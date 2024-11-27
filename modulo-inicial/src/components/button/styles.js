import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 20px;
  margin: 5px;
  border: 2px solid white;
  background-color: #454343;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  flex: 1;
  border-radius: 30px;
  transition: all 0.3s;
  opacity: 0.9;

  &:hover {
    transform: scale(105%);
    opacity: 1;
  }

  background-color: ${({ type }) => (type === 'operator' ? '#CC4422' : '')};
`;
