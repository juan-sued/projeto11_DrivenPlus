import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function InputsRegister() {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputCPF, setInputCPF] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [objNewRegister, setObjNewRegister] = useState({
    email: '',
    name: '',
    cpf: '',
    password: ''
  });

  const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up';

  const [stateButton, setStateButton] = useState('habilitado');
  //
  //
  //
  //função que atualiza e envia o obj post para novo cadastro
  function newRegister(event) {
    event.preventDefault();
    setStateButton('loading');
    // ===
    objNewRegister.email = inputEmail;
    objNewRegister.name = inputName;
    objNewRegister.cpf = inputCPF;
    objNewRegister.password = inputPassword;
    // ===
    const provObjNewRegister = { ...objNewRegister };
    setObjNewRegister(provObjNewRegister);

    const promise = axios.post(URL, objNewRegister);

    promise.then(response => {
      navigate('../', { replace: true });
    });
    promise.catch(err => {
      setStateButton('err');
    });
    setInputEmail('');
    setInputName('');
    setInputCPF('');
    setInputPassword('');
  }

  if (stateButton === 'err' && inputEmail.length > 0) {
    setStateButton('habilitado');
  }

  return (
    <ContainerFormClass>
      <form onSubmit={newRegister}>
        <InputClass
          placeholder="Nome"
          type="text"
          value={inputName}
          onChange={e => setInputName(e.target.value)}
          required
        />
        <InputClass
          placeholder="CPF"
          type="text"
          value={inputCPF}
          pattern={'[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}'}
          onChange={e => setInputCPF(e.target.value)}
          required
        />

        <InputClass
          placeholder="E-mail"
          type="email"
          value={inputEmail}
          onChange={e => setInputEmail(e.target.value)}
          required
        />

        <InputClass
          placeholder="Senha"
          type="text"
          value={inputPassword}
          onChange={e => setInputPassword(e.target.value)}
          required
        />

        <RegisterButton
          backgroundcolor={
            stateButton === 'err'
              ? '#d4d4d4'
              : stateButton === 'loading'
              ? '#ff7169'
              : '#FF4791'
          }
          type="submit"
        >
          {stateButton === 'err' ? (
            'Usuário já cadastrado!'
          ) : stateButton === 'loading' ? (
            <ContainerLoading>
              <ThreeDots color="white" height={40} width={40} />
            </ContainerLoading>
          ) : (
            'CADASTRAR'
          )}
        </RegisterButton>
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

const RegisterButton = styled.button`
  margin-top: 5px;
  width: 303px;
  height: 45px;
  background: ${props => props.backgroundcolor};
  border-radius: 4.63636px;
  border: none;
  font-size: 14px;
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
  margin-top: 140px;

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 295px;
  }
`;

const InputClass = styled.input`
  font-size: 18px;

  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  font-family: 'Lexend Deca', sans-serif;
  border-radius: 5px;
  padding-left: 10px;

  color: black;
  ::placeholder {
    color: #7e7e7e;
    font-weight: 400;
    font-size: 14px;
  }
`;
