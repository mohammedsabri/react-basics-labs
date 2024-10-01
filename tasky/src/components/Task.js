import React from 'react';
const Task = (props) => {
    
      <button onClick={props.markDone} className='doneButton'>Done</button> 

    return (
        
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.description}</p>
            <button onClick={props.markDone}>Done</button> 
             <p style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}></p>
        </div>
        

    )
}

export default Task;