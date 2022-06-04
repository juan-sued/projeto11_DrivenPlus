import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoAndName from '../../assets/logoAndName.svg';
import arrowBack from '../../assets/arrowBack.svg';

import Main from '../../shared/Main';
import Header from '../../shared/Header';
import DescriptionPlan from './DescriptionPlan';

import { ThreeDots } from 'react-loader-spinner';
//import loading
import InputsBuyer from './InputsBuyer';
import UserContext from '../../contexts/UserContext';
import { useContext, useState } from 'react';

export default function Plan_Page() {
  const { objDescriptionPlan } = useContext(UserContext);

  const [keyToggleCardView, setKeyToggleCardView] = useState(true);

  function toggleConfirmCard() {
    setKeyToggleCardView(!keyToggleCardView);
  }

  return (
    <>
      {keyToggleCardView ? (
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

            <DescriptionPlan />
            <InputsBuyer
              toggleConfirmCard={toggleConfirmCard}
              keyToggleCardView={keyToggleCardView}
            />
          </Main>
        </>
      ) : (
        <CardConfirm />
      )}
    </>
  );
}

const CardConfirm = styled.div`
  height: 100%;
  width: 100%;
  background-color: red;
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
