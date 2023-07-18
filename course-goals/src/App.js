import React, { useState } from "react";
import "./App.css";
import CourseGoalsList from "./components/CourseGoals/CourseGoalsList/CourseGoalsList";


import CourseInput from './components/CourseGoals/CourseInput/CourseInput.js'
function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all execise!", id: Math.random() },
    { text: "Finish the course!", id: Math.random() },
  ]);

  const addGoalHandler = (enteredText) => {
    // setCourseGoals(prev => [items, ...prev])
    console.log(enteredText);
    setCourseGoals(prevGoals => {
      const updateGoals = [enteredText,...prevGoals];
      // updateGoals.unshift({ text: enteredText, id: Math.random().toString() })
      console.log(updateGoals);
      return updateGoals;
    })
  }
  const deleteGoalHandler = (goalId) => {
    setCourseGoals(prevGoal => {
      const updateGoal = prevGoal.filter(goal => goal.id !== goalId);
      return updateGoal;
    }) 
  }

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalsList
        listItems={courseGoals}
        onDeleteItem={deleteGoalHandler}
      />
    );
  }

  return (
    <div className="App">
      <CourseInput onAddGoal={addGoalHandler} />
      {content}
    </div>
  );
}

export default App;
