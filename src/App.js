import './App.css';
import Header from './components/Header/index';
import Tasks from './views/Tasks/index';
import CompletedTasks from './views/CompletedTask/index';
import NewTask from './views/NewTask/index';
import { Switch, Route } from 'react-router-dom';
// import { ModalContext } from './context/ModalContext';
// import { useContext } from 'react';

function App() {
  //const { toggleIsOpen } = useContext(ModalContext);
  //${toggleIsOpen ? 'scroll-element-when-modal-isOpen' : ''}

  return (
    <div className={`app`}>
      <Header />
      <div className='pages'>
        <Switch>
          <Route path='/completed-tasks'>
            <CompletedTasks />
          </Route>
          <Route exact path='/'>
            <Tasks />
          </Route>
        </Switch>
      </div>
      <NewTask />
    </div>
  );
}

export default App;
