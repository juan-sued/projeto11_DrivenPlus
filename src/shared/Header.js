import styled from 'styled-components';

export default function Header({ children }) {
  return <HeaderClass>{children}</HeaderClass>;
}

const HeaderClass = styled.header`
  padding: 24px;
`;
