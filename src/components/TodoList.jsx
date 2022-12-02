import React from 'react'

export const TodoList = ({ taskList, setTaskList }) => {
  return (
    <div className='todoList'>
      <div className='todos'>
        {/* {
          taskList ? taskList.map(task) => {

          } : "データがありません"
        } */}

        {/* {taskList.map((task) => (
          <div className='todoText'>
            <span>{task.text}</span>
          </div>
        ))} */}
      </div>
    </div>
  );
};





