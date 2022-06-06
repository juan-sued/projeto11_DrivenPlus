import styled from 'styled-components';
import peaksIcon from '../../assets/peakIcon.svg';
import dolarIcon from '../../assets/dolarIcon.svg';
import UserContext from '../../contexts/UserContext';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import Loading from '../../shared/Loading';
export default function DescriptionPlan() {
  const { idPlan } = useParams();

  const {
    objLoginResponse,
    objDescriptionPlan,
    setObjDescriptionPlan,
    objPerksPlan,
    setObjPerksPlan
  } = useContext(UserContext);

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlan}`;
    // headerToken
    const config = {
      headers: {
        Authorization: `Bearer ${objLoginResponse.token}`
      }
    };

    const promise = axios.get(URL, config);
    promise.then(response => {
      setObjDescriptionPlan(response.data);

      setObjPerksPlan(response.data.perks);
    });
    promise.catch(err => alert('erro ao processar'));
  }, []);

  return (
    <>
      {objPerksPlan === null ? (
        <Loading />
      ) : (
        <>
          <Container>
            <div className="containerTitle">
              <img src={peaksIcon} alt="" />
              <h4>Benefícios:</h4>
            </div>
            <ol className="peaks" style={{ listStyleType: 'decimal' }}>
              {objDescriptionPlan.perks.map((perk, index) => (
                <li key={index}>{perk.title}</li>
              ))}
            </ol>
          </Container>
          <Container>
            <div className="containerTitle">
              <img src={dolarIcon} alt="" />
              <h4>Preço:</h4>
            </div>
            <p>R$ {objDescriptionPlan.price.replace('.', ',')} cobrados mensalmente</p>
          </Container>
        </>
      )}
    </>
  );
}

const Container = styled.div`
  width: 90%;
  margin-top: 12px;
  color: white;
  padding: 0 22px 0 0px;
  margin-bottom: 10px;
  p {
    margin-top: 4px;
    font-size: 14px;
  }
  .containerTitle {
    display: flex;
    font-size: 16px;

    h4 {
      margin-left: 4px;
    }
  }

  .peaks {
    margin: 20px 0 0 17px;
    font-size: 14px;
    height: 33px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-around;
    line-height: 16px;
  }
`;
