import styled from 'styled-components';

export default function ButtonPink({ backgroundcolor, children, onClick }) {
  return (
    <ButtonPinkClass backgroundcolor={backgroundcolor} onClick={onClick}>
      {children}
    </ButtonPinkClass>
  );
}
const ButtonPinkClass = styled.button`
  width: 303px;
  height: 45px;
  background: ${props => props.backgroundcolor};
  border-radius: 4.63636px;
  border: none;
  font-size: ${props => props.fontsize};
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  margin-bottom: 8px;
  :hover {
    cursor: pointer;
  }
`;
