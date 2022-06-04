import styled from 'styled-components';
// import css

import { Link } from 'react-router-dom';
//import react

import Main from '../../shared/Main';

import InputsRegister from './InputRegister';
import ButtonUnderlined from '../../shared/ButtonUnderlined';
// import components

export default function Sign_up_Page() {
  return (
    <Main>
      <InputsRegister />
      <Link to="/">
        <ButtonUnderlined>Já tem uma conta? Entre</ButtonUnderlined>
      </Link>
    </Main>
  );
}
