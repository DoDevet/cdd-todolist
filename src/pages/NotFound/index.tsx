import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #eeeeee;
  flex-direction: column;
`;

const Message = styled.p`
  font-weight: bold;
  color: tomato;
`;

export const NotFound = () => {
  const [counter, setCounter] = useState(3);
  const navigate = useNavigate();
  useEffect(() => {
    const handler = setInterval(() => setCounter((prev) => prev - 1), 1000);
    if (counter <= 0) {
      navigate('/');
    }
    return () => clearInterval(handler);
  }, [counter]);
  return (
    <Container>
      404
      <br />
      NOT FOUND
      <Message>{`Go to the homepage in ${counter} seconds`}</Message>
    </Container>
  );
};
