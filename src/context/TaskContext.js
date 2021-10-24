import { createContext, useState } from 'react';

export const TaskContext = createContext();

function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'wash them plates!', badge: '#7f5af0' },
    { id: 2, title: 'feed the dogs!', badge: '#ff8906' },
  ]);

  return <TaskContext.Provider value={{ tasks }}>{props.children}</TaskContext.Provider>;
}

export default TaskContextProvider;
