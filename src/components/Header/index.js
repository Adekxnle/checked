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
    <div className='c__header'>
      <div className='c__header-top'>
        <div className='c__header-top-left'>
          <span className='c__header-bullet' />
          <div className='c__container'>
            <div className='c__date-container'>
              <h1 className='date-txt'>{currentDate.toDateString()}</h1>
              <img src={calenderIcon} alt='calender icon' />
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
                      <h2>Completed Tasks</h2>
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
