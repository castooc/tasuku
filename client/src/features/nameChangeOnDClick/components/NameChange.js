import { useState } from 'react';
import { styled } from 'styled-components';

export const NameChange = ({ text, onTextChange })=>{
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);


  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onTextChange(editedText);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <Text onDoubleClick={handleDoubleClick}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <span>{text}</span>
      )}
    </Text>
  );
}
const Text = styled.div`
  font-size:16px;
  cursor: pointer;
  border-radius:1rem;
  transition: background-color 0.5s, transform 0.4s;
  padding: 0.4rem;
  &:hover {
    transform: translateY(-8px);
    background-color: #F0FFFF;
    color:black;
  }
  cursor: pointer;
  
`;