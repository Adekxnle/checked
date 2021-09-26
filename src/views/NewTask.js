import './NewTask.css';
import NavIcon from '../assets/navigation-back.svg';
import Checked from '../assets/checked-white.svg';

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
          <div className='colors'></div>
        </div>
      </div>
    </div>
  );
}

export default NewTask;
