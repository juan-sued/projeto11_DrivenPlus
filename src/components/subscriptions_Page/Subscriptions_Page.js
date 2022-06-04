import styled from 'styled-components';
//import styled

import Main from '../../shared/Main';
import CardsPlan from './CardPlan';

import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
export default function Subscriptions_Page() {
  const { objDescriptionCard } = useContext(UserContext);
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
