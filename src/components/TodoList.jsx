import React from 'react'
import { useState } from 'react';

export const TodoList = ({ todoList, setTodoList }) => {
  const [edit, setEdit] = useState(false);
  const [stateIndex, setStateIndex] = useState()
  const [stateValue, setStateValue] = useState()
  

  const editTask = (index) => {
    setStateIndex(index)
    setEdit(true)
  };

  const editfunc = (e) => {
    setStateValue(e.target.value)
  }
  
  const editSubmits = (index) => {
    setTodoList((prev) => [...prev, todoList[index].text])
  }

  return (
    <div className='todoList'>
      <div className='todos'>
        {
          todoList.length > 0 ? todoList.map((task,index) => {
          return(
            <div className='todoText'>
            <span>{task.text}</span>
            {edit === true && stateIndex === index ?
            <button onClick={() => editSubmits(index)}>保存</button>:<button onClick={() => editTask(index)}>編集</button>}
            {edit === true && stateIndex === index ?
             (<input type="text" defaultValue={todoList[index].text} onChange={(e) => editfunc(e)} value={stateValue} />):null}
          </div>
          )
          }): "データがありません"
        }
        {/* 三項演算子：左側がtrueであれば:までが動く。falseであればデータがありませんが返る。 */}
      </div>
    </div>
  );
};
