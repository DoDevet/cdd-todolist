import { TodoList } from 'components/templates/TodoList';
import { TodoListContext } from 'contexts/TodoContext';

import { useContext } from 'react';

export const TodoListPage = () => {
  const { todoList, onDelete } = useContext(TodoListContext);
  return <TodoList todoList={todoList} onDelete={onDelete} />;
};
