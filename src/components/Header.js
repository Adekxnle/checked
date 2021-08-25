import calenderIcon from '../assets/calender.svg';
import plusIcon from '../assets/plus.svg';

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
              <input name='tabs' id='tasks' type='radio' defaultChecked />
              <label htmlFor='tasks' arialselected='true'>
                Tasks
              </label>
              <div className='active' />
            </div>
          </li>
          <li>
            <div className='tab'>
              <input name='tabs' id='completed-tasks' type='radio' />
              <label htmlFor='completed-tasks' arialselected='fasle'>
                Completed Tasks
              </label>
              <div className='active' />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
