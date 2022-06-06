import styled from 'styled-components';
//import css
import UserContext from '../../contexts/UserContext.js';
//import context
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
//import react

import axios from 'axios';
//import axios

export default function InputsLogin() {
  const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login';

  const { setObjLoginResponse, setFistLogin } = useContext(UserContext);

  const navigate = useNavigate();

  const [stateButton, setStateButton] = useState('habilitado');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [objLogin, setObjLogin] = useState({
    email: '',
    password: ''
  });

  function login(event) {
    event.preventDefault();
    setStateButton('loading');
    // ===
    objLogin.email = inputEmail;
    objLogin.password = inputPassword;
    // ===

    setObjLogin({ ...objLogin });

    const promise = axios.post(URL, objLogin);

    promise.then(promise => {
      setObjLoginResponse(promise.data);

      if (promise.data.membership) {
        setFistLogin(true);
        navigate('../home', { replace: true });
      } else {
        setFistLogin(false);
        navigate('../subscriptions', { replace: true });
      }
    });
    promise.catch(err => {
      setStateButton('err');
    });
    setInputEmail('');
    setInputPassword('');
  }

  if (stateButton === 'err' && inputEmail.length > 0) {
    setStateButton('habilitado');
  }
  return (
    <ContainerFormClass>
      <form onSubmit={login}>
        <InputClass
          placeholder="email"
          type="email"
          value={inputEmail}
          onChange={e => setInputEmail(e.target.value)}
          required
          disabled={stateButton === 'loading' ? 'disabled' : ''}
        />
        <InputClass
          placeholder="password"
          type="password"
          value={inputPassword}
          onChange={e => setInputPassword(e.target.value)}
          required
          disabled={stateButton === 'loading' ? 'disabled' : ''}
        />

        <LoginButton
          fontsize={stateButton === 'err' ? '12px' : '14px'}
          backgroundcolor={
            stateButton === 'err'
              ? '#d4d4d4'
              : stateButton === 'loading'
              ? '#ff7169'
              : '#FF4791'
          }
          type="submit"
          disabled={stateButton === 'loading' ? 'disabled' : ''}
        >
          {stateButton === 'err' ? (
            'Email ou/e senha inválido(s)!'
          ) : stateButton === 'loading' ? (
            <ContainerLoading>
              <ThreeDots color="white" height={40} width={40} />
            </ContainerLoading>
          ) : (
            'ENTRAR'
          )}
        </LoginButton>
      </form>
    </ContainerFormClass>
  );
}
const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
`;

const LoginButton = styled.button`
  width: 303px;
  height: 45px;
  background: ${props => props.backgroundcolor};
  border-radius: 4.63636px;
  border: none;
  font-size: ${props => props.fontsize};
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  :hover {
    cursor: pointer;
  }
`;

const ContainerFormClass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 155px;
  }
`;

const InputClass = styled.input`
  font-size: 18px;
  font-style: italic;
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  padding-left: 10px;
  ::placeholder {
    color: #dbdbdb;
  }
`;
