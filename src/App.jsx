import './App.css';
import { useState } from "react";
import { Title } from "./components/Title"
import { Input } from "./components/Input"
import { TodoList } from './components/TodoList';

function App() {
  const [taskList, setTaskList] = useState([]);
  // ↑ タスクの状態管理をこのuseStateで行っている
  //const [edit. setEdit] = useState(false);
  
  return (
    <div>
      <Title />  
      <Input todoList={taskList} setTodoList={setTaskList} />
      <TodoList todoList={taskList} setTodoList={setTaskList} />
      {/* 3つのコンポーネントをここで記載 */}
      {/*<Input value={text} placeholder="タイトルを入力" onChange={(e) => setText(e.target.value)} />*/}
      </div>
  );
}

export default App;