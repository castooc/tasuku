import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import { useAuth0 } from "@auth0/auth0-react"
import fetchRequest from '../../../utils/fetch-request';
import { createProject, getUserProjects, updateProjects, updateProjectName } from '../../../services/api';
import { NameChange } from '../../nameChangeOnDClick';

export const SideBar = ({projects, setProjects, currentProject, setCurrentProject}) => {

  const { user } = useAuth0();
  const projectTemplate = ({
    name : `Project ${projects.length + 1}`,
    tasks : {
      Todo: ["lol","loll"],
      InProgress: [],
      Done: [],
  }})
  //For Name edting on double click, see feature nameChange
  const [texts, setTexts] = useState([]);
  const [newText, setNewText] = useState(null);
  const [oldText, setOldText] = useState(null);

  useEffect(() => {
    (async () => {
      try{
        const res = await fetchRequest(()=>getUserProjects(user.sub));
        const data = res.data.projects
        if(res.status !== 404){
        setProjects(data)
        let newTexts = [...texts];
        data.forEach((project) => {
          newTexts = [...newTexts, project.name]
        })
        setTexts(newTexts)
        }else{
          return;
        }
      } catch(error){
        console.log(error);
      }
    })();
    }, []);

  useEffect(() => {
    newText &&
      updateNameInDb(oldText, newText);
      }, [oldText,newText]);

  const handleTextChange = (index, newText, oldText) => {
    const updatedTexts = [...texts];
    updatedTexts[index] = newText;
    setTexts(updatedTexts);
    setNewText(newText)
    setOldText(oldText)
  };

  const updateNameInDb = async (oldName, newName)=>{
    try {
        await fetchRequest(()=>updateProjectName({_id : user.sub, oldName :oldName, newName : newName}))
        reRenderProjects()
      }catch (error) {
        console.log(error);
        }
  }

  const reRenderProjects = async()=>{
    const res = await fetchRequest(()=>getUserProjects(user.sub));
    const data = res.data.projects
    setProjects(data)
  }

  const handleClick = async ()=>{
    try {
      const existingUserProjects = await fetchRequest(()=>getUserProjects(user.sub));
      if (existingUserProjects.data !== "Not Found") {
        await fetchRequest(()=>updateProjects({_id : user.sub, projects : projectTemplate}))
      } else{
        await fetchRequest(()=>createProject({_id : user.sub, projects : [projectTemplate]}));
      }
        } catch (error) {
        console.log(error);
        }finally{
          reRenderProjects();
        }
  }

  const handleProjectClick = async (project)=>{
    setCurrentProject(project)
  }
  
  return (
    <Wrapper>
      <ContainerButton>
        <Button onClick = {handleClick} to="/projects">
              <Icon.FolderPlus size={30}/>
              <Text>Create Project</Text>
        </Button>
      </ContainerButton>
      <SidebarHeader>Projects</SidebarHeader>
      <ContainerProjects>
        {projects.length < 1 
        ?<NoProjects>You don't have any created project</NoProjects>
        :projects.map((project, index) => (
          <ContainerProject key={index}>
            <NameChange
              text={project.name}
              onTextChange={(newText) => handleTextChange(index, newText, project.name)}
            />
            <Button onClick = {()=>handleProjectClick(project)}>Select</Button>
          </ContainerProject>

        ))}
      </ContainerProjects>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  flex: 1;
  background-color: #333;
  color: #fff;
  padding: 20px;
  font-family: 'IBM Plex Mono', monospace;
`;
const ContainerButton = styled.div`
  margin-bottom:1rem;
`
const ContainerProjects = styled.div`
`
const ContainerProject = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
`
const Button = styled.button`
  all : unset;
  font-size:16px;
  display:flex;
  justify-content: space-around;
  align-items:center;
  border-radius:1rem;
  padding:0.4rem;
  cursor: pointer;
  transition: background-color 0.5s, transform 0.4s;
  &:hover{
  transform: translateY(-8px);
  background-color:#F0FFFF;
  color:black;
  }
`
const Text = styled.div`
  margin-left:1rem;
`
const SidebarHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;
const NoProjects = styled.div`
`