import { useState } from "react";
import Button from "./components/Button";
import TaskList from "./components/TaskList";
import TextInput from "./components/TextInput";
function App() {
  const [tasks,tasksUpdater] = useState([]);
  const [newTask, newTaskUpdater] = useState("");
  const add = () => {
    if (!tasks.includes(newTask)) tasksUpdater([...tasks, newTask]);
    newTaskUpdater("");
  };
  return (
    <div className="container">
      <TextInput
        pretext="add task"
        id="field"
        handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          newTaskUpdater(event.target.value);
        }}
        inputValue={newTask}
      />
      <div>
        <Button onClick={() => add()} text="Add" theme="dark" otherClass=" mb-3"/>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
