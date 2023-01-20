import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  // render() {
  const {
    todos,
    handleChangeProps,
    deleteTodoProps,
    setUpdate,
  } = props;
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}
// }

export default TodoList;