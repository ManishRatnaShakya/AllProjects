import Todo from './todo_container/components/Todo'
import Indicator from './Indicator';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MainContainer from './cakeshop_container/component/MainContainer'
import {

  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import InputForm from './simple_form_container/components/InputForm';
function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Route exact path="/" ><Indicator/></Route>
          <Route  path="/todo">
            <Todo/>
          </Route>
          <Route  path="/cake_shop">
            <MainContainer/>
          </Route>
          <Route  path="/simple_form">
            <InputForm/>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
