import React from 'react'
import { useState } from 'react';

  export const Input = ({taskList, setTaskList}) => {
  const [text, setText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
    
    setTaskList([
      ...taskList, 
      {
        text:text
      },
    ]);
    setText("");
  };
  
  
  return (
    <div className='inputForm'>
      <form onSubmit={addTask}>
        <input 
        placeholder='忘れ物がないように！' 
        onChange={(e) => setText(e.target.value)} 
        value={text} 
        />
        <button onClick={() => addTask()}>追加</button>
      </form>
    </div>
  );
};
