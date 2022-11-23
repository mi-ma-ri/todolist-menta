import './App.css';
import { useState } from "react";
import { Title } from "./components/Title"

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  
  const onAdd = () => {
    setTodoList((prev) => {
      return [...prev, text];
    });
  };


  return (
    <div>
      <Title />
      <input
        placeholder="タイトルを入力"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      {text}
      <button onClick={() => onAdd()}>追加</button>
      <div>
        <div className="lists">
          {todoList.map((todo) => {
            return (
              <>
                <li>{todo}</li>
                <button className="btn ">編集</button>
                <button className="btn ">削除</button>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;