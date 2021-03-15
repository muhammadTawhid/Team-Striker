import logo from './logo.svg';
import './App.css';
import Main from './components/Main/Main';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details/Details';



function App() {
  return (

    <Router>
      <Switch>
        <Route exact path='/'>
          <Main></Main>
        </Route>
        <Route path="/details/:idTeam">
          <Details></Details>
        </Route>
        <Route>
          
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
