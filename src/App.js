import './App.css';
import Header from './components/Header';
import Tasks from './views/Tasks';
import CompletedTasks from './views/CompletedTasks';
// import NewTask from './views/NewTask';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
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
  );
}

export default App;
