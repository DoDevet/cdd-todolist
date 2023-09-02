import styled from '@emotion/styled';
import { Button } from 'components/atoms/Button';
import { Label } from 'components/atoms/Label';

interface ITodoItem {
  label: string;
  onDelete?: (todo: string) => void;
}
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;
export const TodoItem = ({ label, onDelete }: ITodoItem) => {
  return (
    <Container>
      <Label label={label} />
      <Button label="삭제" onClick={() => onDelete && onDelete(label)} />
    </Container>
  );
};
