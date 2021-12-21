import './style.css';
import { ModalContext } from '../../context/ModalContext';
import { useContext } from 'react';

function IllustrationPage({ illustration, altText, description, button }) {
  const { toggleIsOpen } = useContext(ModalContext);

  return (
    <div className='pages illustration-page'>
      <div className='img-container'>
        <img src={illustration} alt={altText} />
      </div>
      <p>{description}</p>
      {button ? (
        <button className='create-new-task-btn' onClick={toggleIsOpen}>
          Create new task
        </button>
      ) : (
        ''
      )}
    </div>
  );
}

export default IllustrationPage;
