import React, { useState } from 'react';
import CourseGoalsItem from '../CourseGoalsItem/CourseGoalsItem';

import './CourseGoalsList.css'

const CourseGoalsList = (props) => {
    const listItem = props.listItems.filter((item) => item.text);
    const [deletedByClick, setDeleteByClick] = useState(listItem)
    // console.log(props);
    
    const handleClick = (e) => {
     
   setDeleteByClick(prev => prev = e.target = 'clicked!!');
        
    };
    return (
      <ul className="goals-list">
            {listItem.map((item) => (
          <CourseGoalsItem onDeleted={handleClick} item={item.text} />
        ))}
      </ul>
    );
}

export default CourseGoalsList;