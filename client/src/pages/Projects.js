import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SideBar } from '../features/kanbanSideBar';
import { useAuth0 } from "@auth0/auth0-react"
import fetchRequest from "../utils/fetch-request"
import { updateProjects, getUserProjects } from "../services/api"
// import { Column } from '../features/kanbanColumn';

const Projects = ()=> {
  const [projects, setProjects] = useState([]);
  const [flag,setFlag] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newTask, setNewTask] = useState("")
  const [currentProject, setCurrentProject] = useState({
    name : `Project ${projects.length + 1}`,
    tasks : {
      Todo: [],
      InProgress: [],
      Done: [],
  }})
  const { user } = useAuth0();

  useEffect(() => {
    (async () => {
      try{
        if (projects){
          if (flag){
            const newProjects = updateProjectsWithCurrentProject(currentProject);
            await fetchRequest(()=>updateProjects({_id : user.sub, projects : newProjects, newProject : null}))
            reRenderProjects();
            console.log(newProjects)
      }
    }
      } catch(error){
        console.log(error);
      }
    })()
  }, [flag]);

  useEffect(() => {
    let currentTask;
      if (newTask) {
        currentTask = newTask;
      }
      

  }, [newTask]);

  const reRenderProjects = async()=>{
    const res = await fetchRequest(()=>getUserProjects(user.sub));
    const data = res.data.projects
    setProjects(data)

  }

  const updateProjectsWithCurrentProject = (updatedProject) => {
    const updatedProjects = projects.map((existingProject) => {
      if (existingProject.name === updatedProject.name) {
        return updatedProject; // Replace the existing project with the updated project
      }
      return existingProject;
    });
    return updatedProjects;
  };

  const handleDragStart = (e, task, status) => {
    e.dataTransfer.setData('task', task);
    e.dataTransfer.setData('status', status);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus) => {
    const task = e.dataTransfer.getData('task');
    const currentStatus = e.dataTransfer.getData('status');

    if (currentStatus !== newStatus) {
      const updatedTasks = { ...currentProject["tasks"] };
      updatedTasks[currentStatus] = currentProject["tasks"][currentStatus].filter((t) => t !== task);
      updatedTasks[newStatus] = [...currentProject["tasks"][newStatus], task];
      setCurrentProject({
        ...currentProject,
        "tasks": updatedTasks});
    }
    setFlag(!flag)
  };

  const handleClick = (status)=>{
      setCurrentProject({
        ...currentProject,
        "tasks": {...currentProject["tasks"], 
        [status]:[...currentProject["tasks"][status],
        `task ${currentProject["tasks"][status].length+1}`]}});
        setFlag(!flag)
  }

  const handleCancel = (status, taskToRemove)=>{
    setCurrentProject((prevProject) => ({
      ...prevProject,
      tasks: {
        ...prevProject.tasks,
        [status]: prevProject["tasks"][status].filter((task) => task !== taskToRemove),
      },
    }));
    setFlag(!flag)
  }
  
  const handleModify = ()=>{
    setIsEdit(true);
    console.log(isEdit)
  }

  const handleInputChange = (e, taskToModify, status) => {
    setNewTask(e.target.value);
    setCurrentProject((prevProject) => ({
      ...prevProject,
      tasks: {
        ...prevProject.tasks,
        [status]: prevProject["tasks"][status].map((task) =>
        task === taskToModify ? e.target.value : task
      ),
      },
    }));
  };

  const handleBlur = () => {
    setIsEdit(false);
    setFlag(!flag);
  };

  return (
    <KanbanBoardContainer>

      <SideBar projects = {projects} setProjects = {setProjects} currentProject = {currentProject} setCurrentProject = {setCurrentProject}/>

      {Object.keys(currentProject["tasks"]).map((status) => (
        <KanbanColumn key={status} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, status)}>
          <KanbanHeader>{status}</KanbanHeader>
          <Button onClick = {()=>handleClick(status)}>Create a new card</Button>
          {currentProject["tasks"][status].map((task) => (
            <ContainerCard key={task}>
              {isEdit
              ?<input
              type="text"
              placeholder="Modify task name"
              value={newTask}
              onChange={(e)=>{handleInputChange(e, task, status)}}
              onBlur={handleBlur}
              autoFocus
              />
                :
                <KanbanCard
                draggable
                onDragStart={(e) => handleDragStart(e, task, status)}
                >
                {task}
                </KanbanCard>
              }
              <ModifyButton onClick={handleModify}>Modify</ModifyButton>
              <CancelButton onClick={()=>handleCancel(status,task)}>Remove</CancelButton>
            </ContainerCard>
            
          ))}
        </KanbanColumn>
      ))}
      
    </KanbanBoardContainer>
  );
}

export default Projects;

// Kanban board component
const KanbanBoardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const KanbanHeader = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
`;

const KanbanColumn = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  min-width: 250px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;
const ContainerCard = styled.div`
  display:flex;
  justify-content:space-between;
`;
const KanbanCard = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex:1;

  &:hover {
    background-color: #f0f0f0;
  }
`;
const Button = styled.button`
  background-color: #ffffff;
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f0f0f0;
  }
`;
const CancelButton = styled.button`
background-color: black;
color: #fff;
border: none;
margin:0.9rem;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease-in-out;

&:hover {
  background-color: #e04949;
}
`
const ModifyButton = styled.button`
background-color: black;
color: #fff;
border: none;
margin:0.9rem;
border-radius: 5px;
cursor: pointer;
transition: background-color 0.3s ease-in-out;

&:hover {
  background-color: orange;
}
`
