import styled from 'styled-components';

export default function ButtonUnderlined({ children }) {
  return <ButtonUnderlinedClass>{children}</ButtonUnderlinedClass>;
}

const ButtonUnderlinedClass = styled.button`
  margin-top: 18px;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  color: #ffffff;
`;
