import styled from '@emotion/styled';

interface IButton {
  label: string;
  color?: string;
  onClick?: () => void;
}

const Container = styled.button<{ color: string }>`
  padding: 8px 16px;
  border: 0;
  color: #ffffff;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => props.color};
  &:hover {
    opacity: 0.9;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = ({ label, color = '#ff5722', onClick }: IButton) => {
  return (
    <Container onClick={onClick} color={color}>
      {label}
    </Container>
  );
};
