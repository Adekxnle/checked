import './NoTask.css';
import illustration from '../assets/illustration.svg';

function NoTask() {
  return (
    <div className='pages no-task-page'>
      <img src={illustration} alt='illustration' />
      <p>You don't have any task set for today</p>
      <button className='create-new-task-btn'>Create new task</button>
    </div>
  );
}

export default NoTask;
