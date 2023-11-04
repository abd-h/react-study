import React, { useState } from 'react';

import './CourseGoalsItem.module.css'

const CourseGoalsItem = (props) => {
    const [deletedItem, setDeleteItem] = useState(props.children);

    const deleteHandler = () => {
        props.onDelete(props.id)
    }
    console.log(props);
    return <li onClick={deleteHandler}>
    {props.children}</li>;
}

export default CourseGoalsItem