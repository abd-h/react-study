import React, { useState } from "react";
import "./App.css";
import CourseGoalsList from "./components/CourseGoalsList/CourseGoalsList";


import CourseInput from './components/CourseInput/CourseInput.js'
function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all execise!", id: "g1" },
    { text: "Finish the course!", id: 'g2' },
  ]);

  const listItems = (items) => {
    setCourseGoals(prev => [items, ...prev])
  }
  console.log(courseGoals);
  return (
    <div className="App">
      <CourseInput onListItems={listItems} />
      <CourseGoalsList listItems={courseGoals} />
    </div>
  );
}

export default App;
