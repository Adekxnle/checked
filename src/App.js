import './App.css';
import Header from './components/Header/index';
import Tasks from './views/Tasks/index';
import CompletedTasks from './views/CompletedTask/index';
//import NewTask from './views/NewTask/index';
import { Switch, Route } from 'react-router-dom';
import TaskContextProvider from './context/TaskContext';

function App() {
  return (
    <TaskContextProvider>
      <div className='app'>
        <Header />
        <div className='pages'>
          <Switch>
            <Route exact path='/'>
              <Tasks />
            </Route>
            <Route path='/completed-tasks'>
              <CompletedTasks />
            </Route>
          </Switch>
        </div>
        {/* <NewTask /> */}
      </div>
    </TaskContextProvider>
  );
}

export default App;
