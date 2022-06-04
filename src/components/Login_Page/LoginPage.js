import styled from 'styled-components';
import Main from '../../shared/Main';
import InputsLogin from './InputsLogin';
import logo from '../../assets/logo.svg';
import ButtonUnderlined from '../../shared/ButtonUnderlined';
import { Link } from 'react-router-dom';
export default function Login_Page() {
  return (
    <Main>
      <LogoLogin src={logo} alt="Essa é a Logo" />
      <InputsLogin />
      <Link to="/sign_up">
        <ButtonUnderlined>Não tem uma conta? Cadastre-se</ButtonUnderlined>
      </Link>
    </Main>
  );
}
const LogoLogin = styled.img`
  width: 299px;
  margin-top: 140px;
  margin-bottom: 100px;
`;
