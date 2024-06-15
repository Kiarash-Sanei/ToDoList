import { useState } from "react";
import Button from "./components/Button";
import TaskList from "./components/TaskList";
import TextInput from "./components/TextInput";
function App() {
  const [tasks, tasksUpdater] = useState([]);
  const [newTask, newTaskUpdater] = useState("");
  const add = () => {
    if (!tasks.includes(newTask)) tasksUpdater([...tasks, newTask]);
    newTaskUpdater("");
  };
  const remove = (taskToDelete: string) => {
    tasksUpdater(tasks.filter((task) => task !== taskToDelete));
  };
  const edit = (oldTaskName: string, newTaskName: string) => {
    tasksUpdater(tasks.map((task) => (task === oldTaskName ? newTaskName : task)));
  };
  return (
    <div className="container">
      <TextInput
        pretext="add task"
        handleChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          newTaskUpdater(event.target.value)
        }
        inputValue={newTask}
      />
      <div>
        <Button
          onClick={() => add()}
          text="Add"
          theme="dark"
          otherClass=" mb-3"
        />
      </div>
      <TaskList tasks={tasks} onDelete={remove} onEdit={edit} />
    </div>
  );
}

export default App;
