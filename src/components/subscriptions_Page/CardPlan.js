import styled from 'styled-components';

import { useEffect, useContext, useState } from 'react';
import axios from 'axios';

import UserContext from '../../contexts/UserContext';

import { Link } from 'react-router-dom';

import Loading from '../../shared/Loading';
//import loading
export default function CardsPlan() {
  const { objLoginResponse } = useContext(UserContext);

  const URL =
    'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';

  const [objCardsPlanList, setObjCardsPlanList] = useState(null);

  useEffect(() => {
    // headerToken
    const config = {
      headers: {
        Authorization: `Bearer ${objLoginResponse.token}`
      }
    };

    const promise = axios.get(URL, config);
    promise.then(response => {
      setObjCardsPlanList(response.data);
      console.log(response.data);
    });
    promise.catch(err => console.log(err));
  }, []);

  return (
    <>
      {objCardsPlanList === null ? (
        <Loading />
      ) : (
        objCardsPlanList.map((cardPlan, index) => (
          <CardPlan
            key={index}
            idPlan={cardPlan.id}
            image={cardPlan.image}
            price={cardPlan.price}
          />
        ))
      )}
    </>
  );
}

//renderiza um cardPlan
function CardPlan({ idPlan, image, price }) {
  console.log(idPlan);
  return (
    <>
      <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to={`/subscriptions/${idPlan}`}
      >
        <CardPlanClass>
          <img src={image} alt="" />
          <H3>R$ {price}</H3>
        </CardPlanClass>
      </Link>
    </>
  );
}

const H3 = styled.h3`
  color: white;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
`;

const CardPlanClass = styled.button`
  background-color: red;
  width: 290px;
  height: 180px;
  background: #0e0e13;
  border: 3px solid #7e7e7e;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin-bottom: 10px;
`;
