import styled from 'styled-components';
//import styled

import Main from '../../shared/Main';

export default function Subscriptions_Page() {
  return (
    <Main>
      <H1>Escolha seu Plano</H1>
      <CardPlan>asdasd</CardPlan>
    </Main>
  );
}

const H1 = styled.h1`
  font-size: 32px;
  color: white;
  margin-bottom: 30px;
`;

const CardPlan = styled.button`
  background-color: red;
  width: 290px;
  height: 180px;
  background: #0e0e13;
  border: 3px solid #7e7e7e;
  border-radius: 12px;
`;
