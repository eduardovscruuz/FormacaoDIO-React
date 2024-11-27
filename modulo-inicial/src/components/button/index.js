import { ButtonContainer } from './styles';

export default function Button({ label, onClick, type }) {
  return (
    <ButtonContainer onClick={onClick} type={type}>
      {label}
    </ButtonContainer>
  );
}
