import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(() => {
    const localData = localStorage.getItem('tasks');
    return localData ? JSON.parse(localData) : [];
  });

  const currentDate = new Date();
  const daysOfTheWeek = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const presentDay = daysOfTheWeek[currentDate.getDay()];

  const [day] = useState(() => {
    const dayData = localStorage.getItem('day');
    return dayData ? JSON.parse(dayData) : presentDay;
  });

  // persist state with local storage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // reset tasks daily
  useEffect(() => {
    localStorage.setItem('day', JSON.stringify(day));

    if (day !== presentDay) setTasks([]);
  }, [day, presentDay]);

  // toggle task completed attribute ({completed: true/false})
  const toggleTaskCompleted = (task_id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === task_id) {
        task.completed = !task.completed;
      }
      return { ...task };
    });

    setTasks(newTasks);
  };

  // filter completed tasks into temporary array
  const completedTasks = tasks.filter((task) => task.completed);

  // add new tasks
  const addNewTask = (newTask) => {
    setTasks([
      { id: uuidv4(), title: newTask.title, badge: newTask.badge, completed: false },
      ...tasks,
    ]);
  };

  return (
    <TaskContext.Provider value={{ tasks, toggleTaskCompleted, completedTasks, addNewTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;
