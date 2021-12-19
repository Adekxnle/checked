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
    <div className='new-task-page-wrapper' style={{ display: isOpen ? 'grid' : 'none' }}>
      <div className='new-task-page'>
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
                          <span
                            className='badge-control'
                            style={{ backgroundColor: colour.colour }}>
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
        <a href='/#' className='btn-finished-sm'>
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
        </a>
        {/* <div className='dummy-div'></div> */}
      </div>
    </div>
  );
}

export default NewTask;
