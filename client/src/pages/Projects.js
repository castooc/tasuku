import { useState } from 'react';
import styled from 'styled-components';
import { SideBar } from '../features/kanbanSideBar';

// import { Column } from '../features/kanbanColumn';

const Projects = ()=> {
  const [name, setName] = useState("casta1")
  const [currentProject, setCurrentProject] = useState({
    name : name,
    tasks : {
      Todo: ['Task 1', 'Task 99'],
      InProgress: ['Task 3', 'Task 4'],
      Done: ['Task 5', 'Task 6'],
  }})

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
  };

  return (
    <KanbanBoardContainer>

      <SideBar project = {currentProject}/>

      {Object.keys(currentProject["tasks"]).map((status) => (
        <KanbanColumn key={status} onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, status)}>
          <KanbanHeader>{status}</KanbanHeader>
          {currentProject["tasks"][status].map((task) => (
            <KanbanCard
              key={task}
              draggable
              onDragStart={(e) => handleDragStart(e, task, status)}
            >
              {task}
            </KanbanCard>
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

const KanbanCard = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

