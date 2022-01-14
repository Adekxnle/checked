import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), title: 'Read your books!', badge: '#2cb67d', completed: false },
  ]);

  const toggleTaskCompleted = (task_id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === task_id) {
        task.completed = !task.completed;
      }
      return { ...task };
    });

    setTasks(newTasks);
  };

  const completedTasks = tasks.filter((task) => task.completed);

  const addNewTask = (newTask) => {
    setTasks([
      { id: uuidv4(), title: newTask.title, badge: newTask.badge, completed: false },
      ...tasks,
    ]);
    console.log(tasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, toggleTaskCompleted, completedTasks, addNewTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
