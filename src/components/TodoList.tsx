import { TodoType } from "../App";
import { Todo } from "./Todo";

export const TodoList = ({
  todoList,
  updateComplete,
}: {
  todoList: TodoType[];
  updateComplete: (todoID: string) => void;
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {todoList.map((todo) => {
        return (
          <Todo
            todoID={todo.id}
            key={todo.id}
            name={todo.name}
            isComplete={todo.isComplete}
            updateComplete={updateComplete}
          />
        );
      })}
    </div>
  );
};
