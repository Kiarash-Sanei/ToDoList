import { useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";

interface Props {
  tasks: string[];
  onDelete: (taskToDelete: string) => void;
  onEdit: (oldTaskName: string, newTaskName: string) => void;
}
const TaskList = ({ tasks, onDelete, onEdit }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleSaveClick = (task:string) => {
    setIsEditing(false);
    onEdit(task, editValue);
    setEditValue("");
  };
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li className="list-group-item list-group-item-dark d-flex justify-content-end align-items-center">
          {task}
          <div className="ms-auto">
            <Button onClick={() => onDelete(task)} text="Delete" theme="dark" />
          </div>
          <div className="ms-1">
            <Button
              onClick={() => {
                setIsEditing(true);
              }}
              text="Edit"
              theme="dark"
            />
          </div>
          {isEditing && (
            <div className="ms-2">
              <TextInput
                pretext="edit task"
                handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setEditValue(event.target.value)
                }
                inputValue={editValue}
              />
              <Button
                onClick={() => handleSaveClick(task)}
                text="save"
                theme="dark"
                otherClass=" ms-2"
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
