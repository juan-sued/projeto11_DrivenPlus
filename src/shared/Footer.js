import styled from 'styled-components';

export default function Footer({ children }) {
  return <FooterClass>{children}</FooterClass>;
}
const FooterClass = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #0e0e13;
`;
