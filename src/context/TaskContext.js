import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([
    // {
    //   id: uuidv4(),
    //   title:
    //     'wash them plates!wash them plates!wash them plates!wash them plates!wash them plates!',
    //   badge: '#7f5af0',
    //   completed: false,
    // },
    // {
    //   id: uuidv4(),
    //   title:
    //     'feed the dogs!feed the dogs!feed the dogs!feed the dogs!feed the dogs!feed the dogs!feed the dogs!feed the dogs! feed the dogs!feed the dogs!feed the dogs!feed the dogs!feed the dogs!feed the dogs!feed the dogs!feed the dogs!',
    //   badge: '#ff8906',
    //   completed: false,
    // },
    // { id: uuidv4(), title: 'Read your books!', badge: '#2cb67d', completed: false },
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

  return (
    <TaskContext.Provider value={{ tasks, toggleTaskCompleted }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
