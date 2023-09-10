import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import { useAuth0 } from "@auth0/auth0-react"
import fetchRequest from '../../../utils/fetch-request';
import { createProject, getUserProjects, updateProjects } from '../../../services/api';
import { NameChange } from '../../nameChangeOnDClick';

export const SideBar = ({project}) => {

  const { user } = useAuth0();
  const [projects, setProjects] = useState(null);

  //For Name edting on double click, see feature nameChange
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    (async () => {
      try{
        const res = await fetchRequest(()=>getUserProjects(user.sub));
        const data = res.data.projects
        if(res.status !== 404){
        setProjects(data)
        data.forEach((project) => {
          setTexts(...texts,project.name)
        });}else{
          return;
        }
      } catch(error){
        console.log(error);
      }
    })();
    }, []);

  const handleTextChange = (index, newText) => {
    const updatedTexts = [...texts];
    updatedTexts[index] = newText;
    setTexts(updatedTexts);
    //ROUTE TO SERVER API HERE

  };

  const handleClick = async ()=>{
    try {
      const existingUserProjects = await fetchRequest(()=>getUserProjects(user.sub));

      if (existingUserProjects.data !== "Not Found") {

        await fetchRequest(()=>updateProjects({_id : user.sub, projects : project}))
      } else{

        await fetchRequest(()=>createProject({_id : user.sub, projects : [project]}));
      }
        } catch (error) {
        console.log(error);
        }
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
      {!projects 
      ?<NoProjects>You don't have any created project</NoProjects>
      :projects.map((project, index) => (
        <NameChange
          key={index}
          text={project.name}
          onTextChange={(newText) => handleTextChange(index, newText)}
        />
      ))}
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
const Button = styled.button`
  all : unset;
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