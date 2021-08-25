import './App.css';
import Header from './components/Header';
import NoTask from './views/NoTask';
import Tasks from './views/Tasks';
import CompletedTasks from './views/CompletedTasks';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='pages'>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <NoTask />
            </Route>
            <Route path='/tasks'>
              <Tasks />
            </Route>
            <Route path='/completed-tasks'>
              <CompletedTasks />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
