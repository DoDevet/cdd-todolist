import { createContext, useState } from 'react';

interface Context {
  todoList: string[];
  onDelete: (todo: string) => void;
  onAdd: (todo: string) => void;
}

const TodoListContext = createContext<Context>({
  onAdd: (): void => {},
  onDelete: (): void => {},
  todoList: [],
});

interface Props {
  children: React.ReactNode;
}

const TodoContextProvider = ({ children }: Props) => {
  const [todoList, setTodoList] = useState<string[]>([]);

  const onAdd = (todo: string) => {
    setTodoList((prev) => [...prev, todo]);
  };
  const onDelete = (todo: string) => {
    setTodoList(todoList.filter((prevTodo) => prevTodo !== todo));
  };

  return (
    <TodoListContext.Provider value={{ onAdd, onDelete, todoList }}>
      {children}
    </TodoListContext.Provider>
  );
};

export { TodoContextProvider, TodoListContext };
