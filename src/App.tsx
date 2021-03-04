import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import DetailOfCourse from "./components/pages/DetailOfCourse";
import Checkout from "./components/pages/Checkout";

function App():JSX.Element {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/details/:id" component={DetailOfCourse}></Route>
          <Route exact path="/checkout/:id" component={Checkout}></Route>
        </Switch> 
    </Router>
    
  );
}

export default App;
