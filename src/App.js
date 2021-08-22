import './App.css';
import calenderIcon from './assets/calender.svg';
import plusIcon from './assets/plus.svg';

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <div className='header-top'>
          <div className='header-top-left'>
            <span className='header-bullet' />
            <div className='date-container'>
              <p className='date'>August 21, 2021</p>
              <img src={calenderIcon} alt='calender icon' />
            </div>
          </div>
          <button className='add-new-task-btn'>
            <img src={plusIcon} alt='plus icon' />
            add new task
          </button>
        </div>
        <div className='header-bottom'>
          <ul>
            <li>Tasks</li>
            <li>Completed Tasks</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
