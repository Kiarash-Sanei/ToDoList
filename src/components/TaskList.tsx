import Button from "./Button";

interface Props {
  tasks: string[];
}
const TaskList = ({ tasks }: Props) => {
  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li className="list-group-item list-group-item-dark d-flex justify-content-end align-items-center">
          {task}
          <div className="ms-auto">
            <Button
              onClick={() => console.log(task)}
              text="Delete"
              theme="dark"
            />
          </div>
          <div className="ms-2">
            <Button
              onClick={() => console.log(task)}
              text="Edit"
              theme="dark"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
