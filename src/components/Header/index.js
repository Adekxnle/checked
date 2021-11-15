import './style.css';
import plusIcon from '../../assets/plus.svg';
import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

function Header() {
  let location = useLocation();

  const { toggleIsOpen } = useContext(ModalContext);

  const currentDate = new Date();

  //const [month, day, year] = [currentDate, currentDate, currentDate.getFullYear()];

  //console.log(currentDate.toDateString());

  return (
    <div className='c__header'>
      <div className='c__header-top'>
        <div className='c__header-top-left'>
          <span className='c__header-bullet' />
          <div className='c__container'>
            <div className='c__date-container'>
              <h1 className='date-txt'>{currentDate.toDateString()}</h1>
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17 3H5C2.79086 3 1 4.79086 1 7V17C1 19.2091 2.79086 21 5 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7 1V5'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M15 1V5'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1 9H21'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='c__links-container'>
              <ul>
                <li>
                  <Link className='c__tabs' to='/'>
                    <div className='c__tab'>
                      <h2> Tasks </h2>
                      {location.pathname === '/' ? <div className='active' /> : ''}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className='c__tabs' to='/completed-tasks'>
                    <div className='c__tab'>
                      <h2>Completed Tasks (0)</h2>
                      {location.pathname === '/completed-tasks' ? <div className='active' /> : ''}
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className='c__add-new-task-btn' onClick={toggleIsOpen}>
          <img src={plusIcon} alt='plus icon' />
          <span>add new task</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
