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
  cursor: pointer;
  margin-bottom: 10px;
  transition: background-color 0.4s ease;
  padding: 0.4rem;
  &:hover {
    background-color: #F0FFFF;
    color:black;
  }
`;