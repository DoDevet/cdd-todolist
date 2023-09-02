import styled from '@emotion/styled';

interface ILabel {
  label: string;
}

const Container = styled.div`
  flex: 1;
  font-size: 1.2rem;
  margin-right: 16px;
`;
export const Label = ({ label }: ILabel) => {
  return <Container>{label}</Container>;
};
