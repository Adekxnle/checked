import './style.css';
import illustration_200 from '../../assets/illustration_w-200.svg';
import illustration_300 from '../../assets/illustration_w-300.svg';
import illustration_400 from '../../assets/illustration_w-400.svg';
import illustration_500 from '../../assets/illustration_w-500.svg';
import { ModalContext } from '../../context/ModalContext';
import { useContext } from 'react';

function NoTask() {
  const { toggleIsOpen } = useContext(ModalContext);

  return (
    <div className='pages no-task-page'>
      <img
        src={illustration_300}
        srcSet={`${illustration_200} 200w, ${illustration_300} 400w, ${illustration_300} 800w, ${illustration_400} 1100w, ${illustration_500} 1900w`}
        alt='illustration of a person relaxing'
      />
      <p>You don't have any task set for today</p>
      <button className='create-new-task-btn' onClick={toggleIsOpen}>
        Create new task
      </button>
    </div>
  );
}

export default NoTask;
