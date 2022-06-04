import styled from 'styled-components';
//import styled

import Main from '../../shared/Main';
import CardsPlan from './CardPlan';

export default function Subscriptions_Page() {
  return (
    <Main>
      <H1>Escolha seu Plano</H1>
      <CardsPlan />
    </Main>
  );
}

const H1 = styled.h1`
  margin-top: 30px;
  font-size: 32px;
  color: white;
  margin-bottom: 30px;
`;
