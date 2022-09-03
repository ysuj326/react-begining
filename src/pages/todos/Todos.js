import { useState } from "react";
// 1. input 안에 할일을 작성하고, 엔터를 누르거나, 저장 버튼을 누르면
// input은 빈값으로 변경 되고, 작성한 todo 내용을 변수에 넣어두고,
// 작성한 갯수를 표시한다.

function Todos() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onChangeTodo = ({ target }) => setTodo(target.value);

  // 엔터 혹은 저장 버튼 클릭시
  const onSubmitTodos = (event) => {
    event.preventDefault();
    // 입력된 값이 없으면 retrun
    if (!todo) return;
    // 기존 값 안에 새로운 todo 넣기
    setTodoList((currentArray) => [todo, ...currentArray]);
    // 입력된 값 초기화
    setTodo("");
  };

  return (
    <form onSubmit={onSubmitTodos}>
      <h1>My To Do List ({todoList.length})</h1>
      <input
        type="text"
        placeholder="Todo Text here.."
        value={todo}
        style={{
          marginRight: "10px",
          padding: "10px",
        }}
        onChange={onChangeTodo}
      />

      <button>Save</button>

      <hr />
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {index}. {todo}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Todos;
