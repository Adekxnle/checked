import './style.css';
import NavIcon from '../../assets/navigation-back.svg';
import Checked from '../../assets/checked-white.svg';

function NewTask() {
  return (
    <div className='new-task-page'>
      <div className='new-task-header'>
        <div className='new-task-header-left'>
          <img src={NavIcon} alt='navigation icon' />
          <h1>New task</h1>
        </div>
        <button className='btn-finished'>
          <img src={Checked} alt='checked icon' />
          <span>finished</span>
        </button>
      </div>
      <div className='new-task-page-content'>
        <div className='input-title'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' />
        </div>
        <div className='color-badge'>
          <p>Color badge</p>
          <div className='colors'>
            <ul>
              <li>
                <label class='badge'>
                  <span class='badge-input'>
                    <input type='radio' name='badge' />
                    <span class='badge-control' style={{ backgroundColor: '#ff8906' }}>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewTask;