import './Tasks.css';
//import NoTask from './NoTask';

function Tasks() {
  return (
    // <NoTask />
    <div className='tasks-page'>
      <ol>
        <li className='task-container'>
          <span className='checkbox-input'>
            <input type='checkbox' name='checked' id='task-1' />
            <span className='checkbox-control'>
              <svg
                width='18'
                height='14'
                viewBox='0 0 18 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                focusable='false'>
                <path
                  d='M5.6 10.9L1.4 6.70001L0 8.10001L5.6 13.7L17.6 1.69999L16.2 0.299988L5.6 10.9Z'
                  fill='#2E7D32'
                />
              </svg>
            </span>
          </span>
          <label htmlFor='task-1'>
            <div className='task'>
              <div className='indicator' />
              <p>Cut the crap!!</p>
            </div>
          </label>
        </li>
        <li className='task-container'>
          <span className='checkbox-input'>
            <input type='checkbox' name='checked' id='task-2' />
            <span className='checkbox-control'>
              <svg
                width='18'
                height='14'
                viewBox='0 0 18 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                focusable='false'>
                <path
                  d='M5.6 10.9L1.4 6.70001L0 8.10001L5.6 13.7L17.6 1.69999L16.2 0.299988L5.6 10.9Z'
                  fill='#2E7D32'
                />
              </svg>
            </span>
          </span>
          <label htmlFor='task-2'>
            <div className='task'>
              <div className='indicator' />
              <p>Get up and wash your ass, nigga!</p>
            </div>
          </label>
        </li>
        <li className='task-container'>
          <span className='checkbox-input'>
            <input type='checkbox' name='checked' id='task-3' />
            <span className='checkbox-control'>
              <svg
                width='18'
                height='14'
                viewBox='0 0 18 14'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
                focusable='false'>
                <path
                  d='M5.6 10.9L1.4 6.70001L0 8.10001L5.6 13.7L17.6 1.69999L16.2 0.299988L5.6 10.9Z'
                  fill='#2E7D32'
                />
              </svg>
            </span>
          </span>
          <label htmlFor='task-3'>
            <div className='task'>
              <div className='indicator' />
              <p>Finish the damn project!!</p>
            </div>
          </label>
        </li>
      </ol>
    </div>
  );
}

export default Tasks;
