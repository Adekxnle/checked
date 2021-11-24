import './style.css';
import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import NoTask from '../NoTask/index';

function Tasks() {
  const { tasks, toggleTaskCompleted } = useContext(TaskContext);

  const handleUpdateChecked = (e, task_id) => {
    //console.log(e.target);
    toggleTaskCompleted(task_id);
  };

  return tasks.length ? (
    <div className='tasks-page'>
      <ol>
        {tasks.map((task) => {
          return (
            <li className='task-container' key={task.id}>
              <span className='checkbox-input'>
                <input
                  type='checkbox'
                  name='checked'
                  id={task.id}
                  onChange={(e) => {
                    handleUpdateChecked(e, task.id);
                  }}
                />
                <span className='checkbox-control'>
                  <svg
                    width='18'
                    height='14'
                    viewBox='0 0 18 14'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                    focusable='false'>
                    <path
                      d='M5.6 10.9L1.4 6.70001L0 8.10001L5.6 13.7L17.6 1.69999L16.2 0.299988L5.6 10.9Z'
                      fill='#2E7D32'
                    />
                  </svg>
                </span>
              </span>
              <label htmlFor={task.id}>
                <div className='task'>
                  <div className='badge' style={{ background: task.badge }} />
                  <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.title}
                  </p>
                </div>
              </label>
            </li>
          );
        })}
      </ol>
      <span></span>
    </div>
  ) : (
    <NoTask />
  );
}

export default Tasks;
