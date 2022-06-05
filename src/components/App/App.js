import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import react
import { useState } from 'react/';
import '../../css/reset.css';
import '../../css/style.css';
// import css

import UserContext from '../../contexts/UserContext';

import Login_Page from '../Login_Page/LoginPage';
import Sign_up_Page from '../Sign-up_Page/RegisterPage';
import Subscriptions_Page from '../subscriptions_Page/Subscriptions_Page';
import Plan_Page from '../Plan_Page/Plan_Page';
import Home_Page from '../Home_Page/Home_Page';

//import pages

export default function App() {
  const [objLoginResponse, setObjLoginResponse] = useState({});
  //guarda a resposta do login

  const [objDescriptionPlan, setObjDescriptionPlan] = useState({});

  const [objBuyPlanResponse, setObjBuyPlanResponse] = useState({});
  //guarda a resposta de compra
  //guarda os dados do cartão
  const [objDataCardCredit, setObjDataCardCredit] = useState({
    membershipId: 1,
    cardName: '',
    cardNumber: '',
    securityNumber: 0,
    expirationDate: ''
  });
  return (
    <UserContext.Provider
      value={{
        objLoginResponse,
        setObjLoginResponse,
        objBuyPlanResponse,
        setObjBuyPlanResponse,
        objDescriptionPlan,
        setObjDescriptionPlan,
        objDataCardCredit,
        setObjDataCardCredit
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login_Page />} />
          <Route path="/sign_up" element={<Sign_up_Page />} />
          <Route path="/subscriptions" element={<Subscriptions_Page />} />
          <Route path="/subscriptions/:idPlan" element={<Plan_Page />} />
          <Route path="/home" element={<Home_Page />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
