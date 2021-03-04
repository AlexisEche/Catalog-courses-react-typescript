import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import DetailOfCourse from "./components/pages/DetailOfCourse";
import Checkout from "./components/pages/Checkout";

function App():JSX.Element {
  // eslint-disable-next-line 
  let [_, setCourses] = useState([]);

  useEffect(() => {
    const datos = async()=>{
      await axios.get("http://localhost:8000/api/v1/courses/")
      .then(response => setCourses(response.data));
      // setloading(false)
    }
    datos()
  }, []);

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
