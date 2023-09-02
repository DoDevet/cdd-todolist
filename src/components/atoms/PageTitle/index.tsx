import styled from '@emotion/styled';

interface PageTitleProps {
  title: string;
}
const Container = styled.h1`
  margin-top: 0;
`;
export const PageTitle = ({ title }: PageTitleProps) => {
  return <Container>{title}</Container>;
};
