import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
const Title = styled(Link)`
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
`;

export const AppTitle = () => {
  return <Title to={'/'}>할 일 목록 앱</Title>;
};
