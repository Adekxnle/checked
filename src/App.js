import './App.css';
import Header from './components/Header/index';
import Tasks from './views/Tasks/index';
import CompletedTasks from './views/CompletedTask/index';
import NewTask from './views/NewTask/index';
import { Switch, Route } from 'react-router-dom';
import TaskContextProvider from './context/TaskContext';
import ModalContextProvider from './context/ModalContext';

function App() {
  return (
    <TaskContextProvider>
      <ModalContextProvider>
        <div className='app'>
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
      </ModalContextProvider>
    </TaskContextProvider>
  );
}

export default App;
