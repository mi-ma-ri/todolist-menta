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
      <Input setTodoList={setTaskList} />
      <TodoList todoList={taskList} setTodoList={setTaskList} />
      {/* 3つのコンポーネントをここで記載 */}
      {/*値を渡すときは=の左側を渡す。基本的に命名は同じにするとミスがおきない。+渡すのは第一引数でも第二引数でもどちらでも良い。*/}
    </div>
  );
}

export default App;