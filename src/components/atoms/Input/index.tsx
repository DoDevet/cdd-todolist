import styled from '@emotion/styled';

interface IInput {
  onChange: (text: string) => void;
  value: string;
}
const Container = styled.input`
  font-size: 1.2rem;
  padding: 8px;
`;
export const Input = ({ onChange, value }: IInput) => {
  return <Container value={value} onChange={(e) => onChange(e.currentTarget.value)}></Container>;
};
