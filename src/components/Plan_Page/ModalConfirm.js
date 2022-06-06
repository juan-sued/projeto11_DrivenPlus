import styled from 'styled-components';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext.js';
import closeIcon from '../../assets/closeIcon.svg';

//import context
export default function ModalConfirm({ keyToggleCardView, toggleConfirmCard }) {
  const {
    setObjBuyPlanResponse,
    objDataCardCredit,
    objLoginResponse,
    objPerksPlan,
    objDescriptionPlan
  } = useContext(UserContext);

  const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions';

  const navigate = useNavigate();

  //função de compra confirmada
  function buyPlan(event) {
    event.preventDefault();
    // headerToken
    const config = {
      headers: {
        Authorization: `Bearer ${objLoginResponse.token}`
      }
    };

    const promise = axios.post(URL, objDataCardCredit, config);

    promise.then(promise => {
      setObjBuyPlanResponse(promise.data);

      navigate('../home', { replace: true });
    });
    promise.catch(err => {
      alert('erro');
    });
  }

  return (
    <>
      {objPerksPlan === null ? (
        ''
      ) : (
        <Modal onSubmit={buyPlan} display={keyToggleCardView ? 'none' : 'flex'}>
          <div className="modalCardConfirm">
            <p>
              Tem certeza que deseja assinar o plano Driven Plus (R$
              {objDescriptionPlan.price.replace('.', ',')})?
            </p>
            <span className="container">
              <button onClick={toggleConfirmCard} type="button">
                Não
              </button>
              <button type="submit">SIM</button>
            </span>
          </div>
          <img onClick={toggleConfirmCard} src={closeIcon} alt="" />
        </Modal>
      )}
    </>
  );
}

const Modal = styled.form`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: ${props => props.display};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    position: relative;
    bottom: 400px;
    left: 150px;
  }

  .modalCardConfirm {
    width: 248px;
    height: 210px;
    background: #ffffff;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 22px;

    p {
      margin-top: 5px;
      font-weight: 700;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      width: 192px;

      color: #000000;
    }
  }

  .container {
    display: flex;

    width: 100%;
    justify-content: space-around;
  }

  button {
    width: 95px;
    height: 52px;

    background: #cecece;
    border-radius: 8px;
    border: none;
    font-weight: 700;
    color: #ffffff;
  }
  button:last-child {
    background-color: #ff4791;
  }
`;
