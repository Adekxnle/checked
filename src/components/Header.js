import calenderIcon from '../assets/calender.svg';
import plusIcon from '../assets/plus.svg';
import { Link } from 'react-router-dom';

export default function Header() {
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
            <div className='tab'>
              <input type='radio' name='tab' id='task-tab' defaultChecked />
              <label htmlFor='task-tab' ariaselected='true'>
                <Link className='tabs' to='/'>
                  Tasks
                </Link>
              </label>
              <div className='active' />
            </div>
          </li>
          <li>
            <div className='tab'>
              <input type='radio' name='tab' id='completed-task-tab' />
              <label htmlFor='completed-task-tab' ariaselected='false'>
                <Link className='tabs' to='/completed-tasks'>
                  Completed Tasks
                </Link>
              </label>
              <div className='active' />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
