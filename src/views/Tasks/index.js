import './style.css';
import Task from '../../components/Task/index';
// NoTask from './NoTask';

function Tasks() {
  return (
    // <NoTask />
    <div className='tasks-page'>
      <ol>
        <Task id='task' title='fuck!!' />
      </ol>
    </div>
  );
}

export default Tasks;
