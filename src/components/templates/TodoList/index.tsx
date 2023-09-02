import styled from '@emotion/styled';
import { Button } from 'components/atoms/Button';
import { PageTitle } from 'components/atoms/PageTitle';
import { TodoItem } from 'components/organisms/TodoItem';
import { useNavigate } from 'react-router-dom';

interface ITodoList {
  onDelete?: (todo: string) => void;
  todoList?: ReadonlyArray<string>;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  background-color: #eeeeee;
`;
const Contents = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
`;
const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
`;
export const TodoList = ({ onDelete, todoList }: ITodoList) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Contents>
        <PageTitle title="할 일 목록" />
        <TodoListContainer>
          {todoList?.map((todo) => (
            <TodoItem key={todo} label={todo} onDelete={onDelete} />
          ))}
        </TodoListContainer>
      </Contents>
      <ButtonContainer>
        <Button label="할 일 추가" color="#304FFE" onClick={() => navigate('/add')} />
      </ButtonContainer>
    </Container>
  );
};
