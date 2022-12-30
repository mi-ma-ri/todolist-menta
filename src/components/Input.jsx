import React from 'react'
import { useState } from 'react';

  export const Input = ({ setTodoList }) => {
  const [text, setText] = useState("");
  

  const addTask = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }

    setTodoList((prev) => {
      console.log(prev[0])
      return [
        ...prev, 
        {
          text:text
        },
      ]
    }
    );
    setText("");
  };
  /* 基本的に...prevを使う */
  /* propsで渡ってきている引数だけ記述すればいい(sett*/
  
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
