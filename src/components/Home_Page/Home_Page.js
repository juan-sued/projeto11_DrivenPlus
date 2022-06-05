import Header from '../../shared/Header';
import Main from '../../shared/Main';
import profileIcon from '../../assets/profileIcon.svg';
import logoCardLow from '../../assets/logoCardLow.svg';
import ButtonPink from '../../shared/ButtonPink';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Footer from '../../shared/Footer';
import ButtonsPerks from './ButtonsPerks';

export default function Home_Page() {
  const navigate = useNavigate();
  const { objBuyPlanResponse, objLoginResponse } = useContext(UserContext);

  function action(change) {
    if (change === 'cancelPlan') {
      console.log('você apertou para cancelar o plano');
    } else if (change === 'changePlan') {
      navigate('../subscriptions', { replace: true });
      console.log('você apertou para trocar de plano');
    }
  }
  return (
    <>
      <Header>
        <img src={objBuyPlanResponse.membership.image} alt="" />

        <img src={profileIcon} alt="" />
      </Header>
      <Main>
        <H1>Olá, {objLoginResponse.name}</H1>
        <ButtonsPerks objBuyPlanResponse={objBuyPlanResponse} />
      </Main>
      <Footer>
        <ButtonPink backgroundcolor={'#FF4791'} onClick={() => action('changePlan')}>
          Mudar plano
        </ButtonPink>
        <ButtonPink backgroundcolor={'#FF4747'} onClick={() => action('cancelPlan')}>
          Cancelar plano
        </ButtonPink>
      </Footer>
    </>
  );
}

const H1 = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  margin: 10px 0 53px 0;
`;
