import styled from 'styled-components';
import { Link } from 'react-router-dom';

import arrowBack from '../../assets/arrowBack.svg';

import Main from '../../shared/Main';
import Header from '../../shared/Header';
import DescriptionPlan from './DescriptionPlan';

import InputsBuyer from './InputsBuyer';
import UserContext from '../../contexts/UserContext';
import { useContext, useState } from 'react';
import ModalConfirm from './ModalConfirm';

export default function Plan_Page() {
  const { objDescriptionPlan } = useContext(UserContext);

  const [keyToggleCardView, setKeyToggleCardView] = useState(true);

  function toggleConfirmCard() {
    setKeyToggleCardView(!keyToggleCardView);
  }

  console.log(objDescriptionPlan);
  return (
    <>
      <Header>
        <Link to="/subscriptions">
          <img src={arrowBack} alt="" />
        </Link>
      </Header>
      <Main>
        <Container>
          <img src={objDescriptionPlan.image} alt="" />
          <h1>{objDescriptionPlan.name}</h1>
        </Container>
        <ContainerPerks>
          <DescriptionPlan />
        </ContainerPerks>
        <InputsBuyer
          objDescriptionPlan={objDescriptionPlan}
          toggleConfirmCard={toggleConfirmCard}
          keyToggleCardView={keyToggleCardView}
        />
      </Main>
      <ModalConfirm
        keyToggleCardView={keyToggleCardView}
        toggleConfirmCard={toggleConfirmCard}
      />
    </>
  );
}

const ContainerPerks = styled.div`
  width: 299px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;

  h1 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
    position: relative;
    bottom: 30px;
  }

  img {
    margin: 10px 0 30px 0;
  }
`;
