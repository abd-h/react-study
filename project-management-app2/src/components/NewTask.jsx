import React, { useState, useContext } from 'react';
import { SelectedProjectContex } from '../store/SelectedProjectContex';

const NewTask = ({onAdd}) => {
    const [enteredTask, setEnteredTask] = useState('');
    const onAddContext = useContext(SelectedProjectContex);
    const [onAddTwocontex] = onAddContext;
   

    const handleChange = (e) => {
        setEnteredTask(e.target.value);
        
    }

    const handleClick = () => {
        // onAdd(enteredTask);
        onAddTwocontex(enteredTask);
        console.log(onAddTwocontex(enteredTask));
        setEnteredTask('');
    }

    

    return (
        <section className='flex items-center gap-4'>
            <input type="text"
                onChange={handleChange}
                value={enteredTask}
                className='w-64 px-2 py-1 rounded-sm bg-stone-200' />
            <button
            onClick={handleClick}    className='text-stone-700 hover:text-stone-950'>Add Task</button>
        </section>
    )
}

export default NewTask;