import './style.css';
import Task from '../../components/Task/index';
// NoTask from './NoTask';

function Tasks() {
  return (
    // <NoTask />
    <div className='tasks-page'>
      <ol>
        <Task id='task' title='Wash the dishes before 4pm' />
      </ol>
    </div>
  );
}

export default Tasks;
