import React from 'react'

export const TodoList = ({ todoList, setTodoList }) => {


  return (
    <div className='todoList'>
      <div className='todos'>
        {
          todoList ? todoList.map((task) => {
          return(
            <div className='todoText'>
            <span>{task.text}</span>
          </div>
          )
          }): "データがありません"
        }
        {/* 三項演算子：左側がtrueであれば:までが動く。falseであればデータがありませんが返る。 */}
      </div>
    </div>
  );
};





