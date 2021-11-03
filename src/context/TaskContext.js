import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

function TaskContextProvider(props) {
  const [tasks] = useState([
    {
      id: uuidv4(),
      title:
        'wash them plates!wash them plates!wash them plates!wash them plates!wash them plates!',
      badge: '#7f5af0',
    },
    {
      id: uuidv4(),
      title:
        'feed the dogs!feed the dogs!feed the dogs!feed the dogs!feed the dogs!feed the dogs!feed the dogs!feed the dogs!',
      badge: '#ff8906',
    },
    { id: uuidv4(), title: 'Read your books!', badge: '#2cb67d' },
  ]);

  return <TaskContext.Provider value={{ tasks }}>{props.children}</TaskContext.Provider>;
}

export default TaskContextProvider;
