import './style.css';
import Checked from '../../assets/checked-white.svg';
import React, { useContext, useState } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { TaskContext } from '../../context/TaskContext';
import { v4 as uuidv4 } from 'uuid';

function NewTask() {
  const { isOpen, toggleIsOpen } = useContext(ModalContext);
  const { addNewTask } = useContext(TaskContext);

  const [title, setTitle] = useState('');
  const [badge, setBadge] = useState('');

  const handleAddNewTask = (e) => {
    e.preventDefault();

    const newTask = { title, badge };
    if (newTask.title !== '' && newTask.badge !== '') {
      addNewTask(newTask);
    }

    setTitle('');
  };

  const handleSetBadge = (e) => (e.target.checked ? setBadge(e.target.value) : '');

  return (
    <div className='new-task-page-wrapper' style={{ display: isOpen ? 'grid' : 'none' }}>
      <div className='new-task-page'>
        <form onSubmit={(e) => handleAddNewTask(e)}>
          <div className='new-task-header'>
            <div className='new-task-header-left'>
              <svg
                onClick={toggleIsOpen}
                width='14'
                height='14'
                viewBox='0 0 14 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z'
                  fill='#e6e6e6'
                />
              </svg>
              <h1>New task</h1>
            </div>
            <button type='submit' className='btn-finished'>
              <img src={Checked} alt='checked icon' />
              <span>done</span>
            </button>
          </div>
          <div className='new-task-page-content'>
            <div className='input-title'>
              <label htmlFor='title'>Title</label>
              <textarea
                value={title}
                type='text'
                id='title'
                maxLength='150'
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='color-badge'>
              <p>Color badge</p>
              <div className='colors'>
                <ul>
                  <li>
                    <label className='badge'>
                      <span className='badge-input'>
                        <input
                          id={uuidv4()}
                          value='rgb(255, 137, 6)'
                          type='radio'
                          name='badge'
                          onChange={(e) => handleSetBadge(e)}
                          style={{ backgroundColor: 'rgb(255, 137, 6)' }}
                        />
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className='badge'>
                      <span className='badge-input'>
                        <input
                          id={uuidv4()}
                          value='rgb(127, 90, 240)'
                          type='radio'
                          name='badge'
                          onChange={(e) => handleSetBadge(e)}
                          style={{ backgroundColor: 'rgb(127, 90, 240)' }}
                        />
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className='badge'>
                      <span className='badge-input'>
                        <input
                          id={uuidv4()}
                          value='rgb(150, 86, 161)'
                          type='radio'
                          name='badge'
                          onChange={(e) => handleSetBadge(e)}
                          style={{ backgroundColor: 'rgb(150, 86, 161)' }}
                        />
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className='badge'>
                      <span className='badge-input'>
                        <input
                          id={uuidv4()}
                          value='rgb(242, 95, 76)'
                          type='radio'
                          name='badge'
                          onChange={(e) => handleSetBadge(e)}
                          style={{ backgroundColor: 'rgb(242, 95, 76)' }}
                        />
                      </span>
                    </label>
                  </li>
                  <li>
                    <label className='badge'>
                      <span className='badge-input'>
                        <input
                          id={uuidv4()}
                          value='rgb(44, 182, 125)'
                          type='radio'
                          name='badge'
                          onChange={(e) => handleSetBadge(e)}
                          style={{ backgroundColor: 'rgb(44, 182, 125)' }}
                        />
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button type='submit' className='btn-finished-sm' onClick={(e) => handleAddNewTask(e)}>
            <svg
              width='18'
              height='14'
              viewBox='0 0 18 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M5.6 10.6L1.4 6.40002L0 7.80002L5.6 13.4L17.6 1.4L16.2 0L5.6 10.6Z'
                fill='#e6e6e6'
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
export default NewTask;
