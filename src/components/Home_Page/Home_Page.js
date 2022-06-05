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
import axios from 'axios';
export default function Home_Page() {
  const navigate = useNavigate();
  const { objLoginResponse } = useContext(UserContext);
  const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions';
  // headerToken
  const config = {
    headers: {
      Authorization: `Bearer ${objLoginResponse.token}`
    }
  };

  function action(change) {
    if (change === 'cancelPlan') {
      const promise = axios.delete(URL, config);
      promise.then(response => {
        navigate('../subscriptions', { replace: true });
      });
      promise.catch(err => console.log(err));
    } else if (change === 'changePlan') {
      navigate('../subscriptions', { replace: true });
      console.log('você apertou para trocar de plano');
    }
  }
  return (
    <>
      <Header>
        <img src={objLoginResponse.membership.image} alt="" />

        <img src={profileIcon} alt="" />
      </Header>
      <Main>
        <H1>Olá, {objLoginResponse.name}</H1>
        <ButtonsPerks objLoginResponse={objLoginResponse} />
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
