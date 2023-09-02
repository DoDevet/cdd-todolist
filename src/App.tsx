import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TodoListPage } from 'pages/TodoListPage';
import { TodoInputPage } from 'pages/TodoInputPage';
import { TodoContextProvider } from 'contexts/TodoContext';
import { NotFound } from 'pages/NotFound';

function App() {
  return (
    <TodoContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={TodoListPage} />
          <Route path="add" Component={TodoInputPage} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </TodoContextProvider>
  );
}

export default App;
