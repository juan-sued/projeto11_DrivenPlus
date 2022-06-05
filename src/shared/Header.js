import styled from 'styled-components';

export default function Header({ children }) {
  return <HeaderClass>{children}</HeaderClass>;
}

const HeaderClass = styled.header`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  img {
    max-width: 74px;
    max-height: 51px;
  }
`;
