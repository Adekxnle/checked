import './style.css';
import plusIcon from '../../assets/plus.svg';
import { Link, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { TaskContext } from '../../context/TaskContext';

function Header() {
  let location = useLocation();

  const { toggleIsOpen } = useContext(ModalContext);
  const { tasks, completedTasks } = useContext(TaskContext);

  const currentDate = new Date();

  return (
    <div className='header'>
      <div className='header-top'>
        <div className='header-top-left'>
          <span className='header-bullet' />
          <div className='container'>
            <div className='date-container'>
              <h1 className='date-txt'>{currentDate.toDateString()}</h1>
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17 3H5C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z'
                  stroke='#e6e6e6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7 1V5'
                  stroke='#e6e6e6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M15 1V5'
                  stroke='#e6e6e6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1 9H21'
                  stroke='#e6e6e6'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='links-container'>
              <ul>
                <li>
                  <Link className='tabs' to='/' tabIndex='1'>
                    <div className='tab'>
                      <h2> Tasks </h2>
                      {location.pathname === '/' ? <div className='active' /> : ''}
                    </div>
                  </Link>
                </li>
                <li>
                  {tasks.length ? (
                    <Link className='tabs' to='/completed-tasks' tabIndex='2'>
                      <div className='tab'>
                        <h2>Completed Tasks ({completedTasks.length})</h2>
                        {location.pathname === '/completed-tasks' ? <div className='active' /> : ''}
                      </div>
                    </Link>
                  ) : (
                    <div className='tab'>
                      <h2 className='disabled'>Completed Tasks ({completedTasks.length})</h2>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {tasks.length ? (
          <button className='add-new-task-btn' onClick={toggleIsOpen} tabIndex='3'>
            <img src={plusIcon} alt='plus icon' />
            <span>add new task</span>
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Header;
