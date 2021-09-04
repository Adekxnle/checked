import './Header.css';
import calenderIcon from './assets/calender.svg';
import plusIcon from './assets/plus.svg';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  let location = useLocation();

  return (
    <div className='header'>
      <div className='header-top'>
        <div className='header-top-left'>
          <span className='header-bullet' />
          <div className='date-container'>
            <h1 className='date'>August 21, 2021</h1>
            <img src={calenderIcon} alt='calender icon' />
          </div>
        </div>
        <button className='add-new-task-btn'>
          <img src={plusIcon} alt='plus icon' />
          <span>add new task</span>
        </button>
      </div>
      <div className='header-bottom'>
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
  );
}

export default Header;
