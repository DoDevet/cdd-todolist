import styled from '@emotion/styled';
import { AppTitle } from 'components/atoms/AppTitle';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  text-align: center;
  padding: 8px 0px;
  margin: 0;
  background-color: #aaaaaa;
`;
export const Header = () => {
  return (
    <Container>
      <AppTitle />
    </Container>
  );
};
