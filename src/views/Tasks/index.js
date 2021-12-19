import './style.css';
import { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';
import { ModalContext } from '../../context/ModalContext';
import NoTask from '../NoTask/index';
import illustration_200 from '../../assets/tasks/illustration_w-200.svg';
import illustration_300 from '../../assets/tasks/illustration_w-300.svg';
import illustration_400 from '../../assets/tasks/illustration_w-400.svg';
import illustration_500 from '../../assets/tasks/illustration_w-500.svg';

function Tasks() {
  const { tasks, toggleTaskCompleted } = useContext(TaskContext);
  const { toggleIsOpen } = useContext(ModalContext);

  const handleUpdateChecked = (e, task_id) => {
    //console.log(e.target);
    toggleTaskCompleted(task_id);
  };

  return tasks.length ? (
    <div className='tasks-page'>
      {tasks.some((task) => task.completed === false) ? (
        <ol>
          {tasks.map((task) => {
            return (
              <li className='task-container' key={task.id}>
                <span className='checkbox-input'>
                  <input
                    checked={task.completed ? true : false}
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
                <label htmlFor={task.id} tabIndex='4'>
                  <div className='task'>
                    <div className='badge' style={{ background: task.badge }} />
                    <p
                      style={{
                        textDecoration: task.completed ? 'line-through' : 'none',
                      }}>
                      {task.title}
                    </p>
                  </div>
                </label>
              </li>
            );
          })}
        </ol>
      ) : (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#e6e6e6',
            flexDirection: 'column',
          }}>
          <img
            src={illustration_300}
            srcSet={`${illustration_200} 200w, ${illustration_300} 400w, ${illustration_300} 800w, ${illustration_400} 1100w, ${illustration_500} 1900w`}
            alt='illustration of a joyous person'
          />
          <p style={{ fontWeight: 400, textAlign: 'center', lineHeight: 1.6 }}>
            Welldone!. you've finished all of your tasks.
          </p>
        </div>
      )}
      <a href='/#' className='add-new-task-btn-sm' onClick={toggleIsOpen}>
        <svg
          width='14'
          height='14'
          viewBox='0 0 14 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z' fill='#e6e6e6' />
        </svg>
      </a>
    </div>
  ) : (
    <NoTask />
  );
}

export default Tasks;
