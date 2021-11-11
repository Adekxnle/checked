import './style.css';
import calenderIcon from '../../assets/calender.svg';
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
    <div className='header'>
      <div className='header-top'>
        <div className='header-top-left'>
          <span className='header-bullet' />
          <div className='container'>
            <div className='date-container'>
              <h1 className='date'>{currentDate.toDateString()}</h1>
              <img src={calenderIcon} alt='calender icon' />
            </div>
            <div className='links-container'>
              <ul>
                <li>
                  <Link className='tabs' to='/'>
                    <div className='tab'>
                      <h2> Tasks </h2>
                      {location.pathname === '/' ? <div className='active' /> : ''}
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className='tabs' to='/completed-tasks'>
                    <div className='tab'>
                      <h2>Completed Tasks</h2>
                      {location.pathname === '/completed-tasks' ? <div className='active' /> : ''}
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className='add-new-task-btn' onClick={toggleIsOpen}>
          <img src={plusIcon} alt='plus icon' />
          <span>add new task</span>
        </button>
      </div>
    </div>
  );
}

export default Header;
