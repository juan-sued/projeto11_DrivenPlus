import styled from 'styled-components';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import axios from 'axios';

import UserContext from '../../contexts/UserContext.js';
//import context
export default function InputsBuyer({ toggleConfirmCard, keyToggleCardView }) {
  const { objLoginResponse } = useContext(UserContext);
  const { setObjBuyPlanResponse } = useContext(UserContext);
  const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions';
  const [stateButton, setStateButton] = useState('habilitado');
  const [inputCardName, setInputCardName] = useState('');
  const [inputCardNumber, setInputCardNumber] = useState('');
  const [inputSecurityNumber, setInputSecurityNumber] = useState('');
  const [inputExpirationDate, setInputExpirationDate] = useState('');

  const navigate = useNavigate();
  const [objDataCardCredit, setObjDataCardCredit] = useState({
    membershipId: 1,
    cardName: '',
    cardNumber: '',
    securityNumber: 0,
    expirationDate: ''
  });

  function buyPlan(event) {
    event.preventDefault();

    // headerToken
    const config = {
      headers: {
        Authorization: `Bearer ${objLoginResponse.token}`
      }
    };
    setStateButton('loading');
    // ===
    objDataCardCredit.cardName = inputCardName;
    objDataCardCredit.cardNumber = inputCardNumber;
    objDataCardCredit.securityNumber = inputSecurityNumber;
    objDataCardCredit.expirationDate = inputExpirationDate;
    // ===

    setObjDataCardCredit({ ...objDataCardCredit });

    const promise = axios.post(URL, objDataCardCredit, config);

    promise.then(promise => {
      setObjBuyPlanResponse(promise.data);
      console.log(promise.data);
      navigate('../subscriptions', { replace: true });
    });
    promise.catch(err => {
      setStateButton('err');
    });
    setInputCardName('');
    setInputCardNumber('');
    setInputSecurityNumber('');
    setInputExpirationDate('');
  }

  if (stateButton === 'err' && inputCardName.length > 0) {
    setStateButton('habilitado');
  }
  return (
    <ContainerFormClass>
      <form onSubmit={buyPlan}>
        <InputClass
          placeholder="Nome impresso no cartão"
          type="text"
          name="cardName"
          value={inputCardName}
          onChange={e => setInputCardName(e.target.value)}
          required
          disabled={stateButton === 'loading' ? 'disabled' : ''}
        />
        <InputClass
          placeholder="Dígitos do cartão"
          type="text"
          name="cardNumber"
          value={inputCardNumber}
          onChange={e => setInputCardNumber(e.target.value)}
          required
          disabled={stateButton === 'loading' ? 'disabled' : ''}
        />
        <span className="container">
          <InputClass
            placeholder="Código de segurança"
            type="number"
            name="securityNumber"
            value={inputSecurityNumber}
            onChange={e => setInputSecurityNumber(e.target.value)}
            required
            disabled={stateButton === 'loading' ? 'disabled' : ''}
          />
          <InputClass
            placeholder="Validade"
            type="text"
            name="expirationDate"
            value={inputExpirationDate}
            onChange={e => setInputExpirationDate(e.target.value)}
            required
            disabled={stateButton === 'loading' ? 'disabled' : ''}
          />
        </span>
        <BuyPlanButton
          fontsize={stateButton === 'err' ? '15px' : '14px'}
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
            'Dado(s) inválido(s)!'
          ) : stateButton === 'loading' ? (
            <ContainerLoading>
              <ThreeDots color="white" height={40} width={40} />
            </ContainerLoading>
          ) : (
            'ASSINAR'
          )}
        </BuyPlanButton>
      </form>
    </ContainerFormClass>
  );
}

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
    height: 240px;

    .container {
      display: flex;
      width: 299px;

      justify-content: center;
      input {
        width: 100%;
        font-size: 14px;
        padding-left: 7px;
      }
      input:last-child {
        margin-left: 10px;
        width: 142px;
      }
    }
  }
`;

const InputClass = styled.input`
  font-size: 18px;

  width: 299px;
  height: 52px;
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
const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
`;

const BuyPlanButton = styled.button`
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
