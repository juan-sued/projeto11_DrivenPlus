import styled from 'styled-components';

export default function Main({ children }) {
  return <MainClass>{children}</MainClass>;
}

const MainClass = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;
