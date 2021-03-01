import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from './components/pages/Home'

function App():JSX.Element {
  let [courses, setCourses] = useState([]);
  useEffect(() => {
    const datos = async()=>{
      await axios.get("http://localhost:8000/api/v1/courses/")
      .then(response => setCourses(response.data));
    }
    datos()
  }, []);
  console.log(courses)

  return (
    <div className="App">
      <Home data={courses}/>
    </div>
  );
}

export default App;
