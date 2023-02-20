import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(){
    return(
        <button 
        className='CreateTodoButton' 
        onClick={() =>console.log('clic xd')}
        >
            +
        </button>
    );
}

export {CreateTodoButton};