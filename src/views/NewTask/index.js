import './style.css';
import Checked from '../../assets/checked-white.svg';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import { v4 as uuidv4 } from 'uuid';

function NewTask() {
  const { isOpen, toggleIsOpen } = useContext(ModalContext);

  const colours = [
    { id: uuidv4(), colour: '#ff8906' },
    { id: uuidv4(), colour: '#7f5af0' },
    { id: uuidv4(), colour: '#9656a1' },
    { id: uuidv4(), colour: '#f25f4c' },
    { id: uuidv4(), colour: '#2cb67d' },
  ];

  return (
    <div className='new-task-page' style={{ display: isOpen ? 'block' : 'none' }}>
      <div className='new-task-header'>
        <div className='new-task-header-left'>
          <svg
            onClick={toggleIsOpen}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M8.59009 16.59L13.1701 12L8.59009 7.41L10.0001 6L16.0001 12L10.0001 18L8.59009 16.59Z'
              fill='#e6e6e6'
            />
          </svg>
          <h1>New task</h1>
        </div>
        <button className='btn-finished'>
          <img src={Checked} alt='checked icon' />
          <span>done</span>
        </button>
      </div>
      <div className='new-task-page-content'>
        <div className='input-title'>
          <label htmlFor='title'>Title</label>
          <textarea type='text' id='title' maxLength='150' />
        </div>
        <div className='color-badge'>
          <p>Color badge</p>
          <div className='colors'>
            <ul>
              {colours.map((colour) => {
                return (
                  <li key={colour.id}>
                    <label className='badge'>
                      <span className='badge-input'>
                        <input type='radio' name='badge' />
                        <span className='badge-control' style={{ backgroundColor: colour.colour }}>
                          <svg
                            width='18'
                            height='14'
                            viewBox='0 0 18 14'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M5.6 10.6L1.4 6.40002L0 7.80002L5.6 13.4L17.6 1.4L16.2 0L5.6 10.6Z'
                              fill='white'
                            />
                          </svg>
                        </span>
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTask;
