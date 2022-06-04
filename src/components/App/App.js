import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import react
import { useState } from 'react/';
import '../../css/reset.css';
import '../../css/style.css';
// import css

import UserContext from '../../contexts/UserContext';

import Login_Page from '../Login_Page/LoginPage';
import Sign_up_Page from '../Sign-up/RegisterPage';
import Subscriptions_Page from '../subscriptions/Subscriptions_Page';

//import pages

export default function App() {
  const [objLoginResponse, setObjLoginResponse] = useState({});

  return (
    <UserContext.Provider value={{ objLoginResponse, setObjLoginResponse }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login_Page />} />
          <Route path="/sign_up" element={<Sign_up_Page />} />
          <Route path="/subscriptions" element={<Subscriptions_Page />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
