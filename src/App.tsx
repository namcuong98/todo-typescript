import { ChangeEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { CreateNewTodo } from "./components/CreateNewTodo";
import { TodoList } from "./components/TodoList";

export type TodoType = { id: string; name: string; isComplete: boolean };

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const saveTodoList = JSON.parse(sessionStorage.getItem("todoList") ?? "[]");
    return saveTodoList;
  });

  const [newTodo, setNewToDo] = useState("");

  const handleChangeNewTodo = (e: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(e.target.value);
  };

  const handlerBtnClick = () => {
    const newTodoItiem: TodoType = {
      id: uuidv4(),
      name: newTodo,
      isComplete: false,
    };
    setTodoList([newTodoItiem, ...todoList]);
    setNewToDo("");
  };

  const updateComplete = (todoID: string) => {
    setTodoList((prv) => {
      return prv.map((todo) => {
        if (todoID === todo.id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    sessionStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <p>work-flow</p>

      <CreateNewTodo
        newTodo={newTodo}
        handleChangeNewTodo={handleChangeNewTodo}
        handlerBtnClick={handlerBtnClick}
      />
      <TodoList todoList={todoList} updateComplete={updateComplete} />
    </>
  );
}

export default App;
