import styled from '@emotion/styled';
import { Button } from 'components/atoms/Button';
import { PageTitle } from 'components/atoms/PageTitle';
import { InputTodo } from 'components/organisms/InputTodo';

import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #eeeeee;
`;
const Contents = styled.div`
  background-color: white;
  padding: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 12px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
`;

export const TodoInput = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Contents>
        <PageTitle title="할 일 추가" />
        <InputTodo />
      </Contents>
      <ButtonContainer>
        <Button label="닫기" onClick={() => navigate('/')} />
      </ButtonContainer>
    </Container>
  );
};
