import styled from 'styled-components';
import { useState } from 'react';

import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function InputsBuyer({ toggleConfirmCard, keyToggleCardView }) {
  const [inputCardName, setInputCardName] = useState('');
  const [inputCardNumber, setInputCardNumber] = useState('');
  const [inputSecurityNumber, setInputSecurityNumber] = useState('');
  const [inputExpirationDate, setInputExpirationDate] = useState('');
  const { objDataCardCredit, setObjDataCardCredit } = useContext(UserContext);

  function confirmPlan(event) {
    event.preventDefault();

    // ===
    objDataCardCredit.cardName = inputCardName;
    objDataCardCredit.cardNumber = inputCardNumber;
    objDataCardCredit.securityNumber = inputSecurityNumber;
    objDataCardCredit.expirationDate = inputExpirationDate;
    // ===

    setObjDataCardCredit({ ...objDataCardCredit });
    toggleConfirmCard();
    setInputCardName('');
    setInputCardNumber('');
    setInputSecurityNumber('');
    setInputExpirationDate('');
  }

  return (
    <ContainerFormClass>
      <form onSubmit={confirmPlan}>
        <InputClass
          placeholder="Nome impresso no cartão"
          type="text"
          name="cardName"
          value={inputCardName}
          onChange={e => setInputCardName(e.target.value)}
          required
        />
        <InputClass
          placeholder="Dígitos do cartão"
          type="text"
          name="cardNumber"
          value={inputCardNumber}
          onChange={e => setInputCardNumber(e.target.value)}
          required
        />
        <span className="container">
          <InputClass
            placeholder="Código de segurança"
            type="number"
            name="securityNumber"
            value={inputSecurityNumber}
            onChange={e => setInputSecurityNumber(e.target.value)}
            required
          />
          <InputClass
            placeholder="Validade"
            type="text"
            name="expirationDate"
            value={inputExpirationDate}
            onChange={e => setInputExpirationDate(e.target.value)}
            required
          />
        </span>
        <BuyPlanButton fontsize={'14px'} backgroundcolor={'#FF4791'} type="submit">
          ASSINAR
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
