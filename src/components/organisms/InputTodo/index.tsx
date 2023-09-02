import styled from '@emotion/styled';
import { Button } from 'components/atoms/Button';
import { Input } from 'components/atoms/Input';
import { TodoListContext } from 'contexts/TodoContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const InputTodo = () => {
  const [todo, setTodo] = useState('');
  const { onAdd } = useContext(TodoListContext);
  const navigate = useNavigate();
  const onClick = () => {
    if (todo === '') return;

    onAdd(todo);
    setTodo('');
    navigate('/');
  };
  return (
    <Container>
      <Input value={todo} onChange={setTodo} />
      <Button label="추가" onClick={onClick} color="#304FFE" />
    </Container>
  );
};
