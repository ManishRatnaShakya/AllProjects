import Todo from './todo_container/components/Todo'
import Indicator from './Indicator';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MainContainer from './cakeshop_container/component/MainContainer'
import MainFile from './saga_example/components/MainFile';
import TranslateApp from './TranslateApp/TranslateApp';
import SkeletonApp from './SkeletonApp/SkeletonApp'
import {

  BrowserRouter as Router,
  Switch,
  Route,
  
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
          <Route  path="/saga_example">
            <MainFile/>
          </Route>
          <Route  path="/translate">
            <TranslateApp/>
          </Route>
          <Route  path="/skeleton">
            <SkeletonApp/>
          </Route>
        </Switch>
     </Router>
    </div>
  );
}

export default App;
