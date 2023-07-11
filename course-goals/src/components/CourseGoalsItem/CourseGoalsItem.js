import React, { useState } from 'react';

import './CourseGoalsItem.css'

const CourseGoalsItem = (props) => {
    const [deletedItem, setDelleteItem] = useState(props.item);

    const handleClick = () => {
        setDelleteItem(prev => prev = '');
    }
    console.log(deletedItem);
    console.log(props.item);
    return (
        <li onClick={handleClick} style={{margin: '1rem',
    backgroundColor: 'rgb(103, 2, 56)',
    padding: '0.5rem'
}}>
            {props.item}
        </li>
    )
}

export default CourseGoalsItem