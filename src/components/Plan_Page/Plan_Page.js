import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoAndName from '../../assets/logoAndName.svg';
import arrowBack from '../../assets/arrowBack.svg';

import Main from '../../shared/Main';
import Header from '../../shared/Header';
import DescriptionPlan from './DescriptionPlan';

import InputsBuyer from './InputsBuyer';

export default function Plan_Page() {
  return (
    <>
      <Header>
        <Link to="/subscriptions">
          <img src={arrowBack} alt="" />
        </Link>
      </Header>
      <Main>
        <LogoAndName src={logoAndName} alt="" />
        <DescriptionPlan />
        <InputsBuyer />
      </Main>
    </>
  );
}

const LogoAndName = styled.img`
  margin: 20px 0 30px 0;
`;
