import React, { useState } from 'react';
import CourseGoalsItem from '../CourseGoalsItem/CourseGoalsItem';

import './CourseGoalsList.css'

const CourseGoalsList = (props) => {
    const listItem = props.listItems.filter((item) => item.text);
    
   
    return (
      <ul className="goals-list">
        {listItem.map((goal) => (
          <CourseGoalsItem  key={goal.id} id={goal.id} onDelete={props.onDeleteItem} >{goal.text}</CourseGoalsItem>
        ))}
      </ul>
    );
}

export default CourseGoalsList;