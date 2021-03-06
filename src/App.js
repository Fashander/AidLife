import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
 } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './App.css';
import TopNavBar from './components/UI/Header'
import Landing from './components/Pages/Landing';
import Footer from './components/UI/Footer/Footer';
import Aboutus from './components/Pages/Landing/Aboutus';
import Founder from './components/Pages/Landing/Founder';
import DemoOffline from './components/Pages/Offline/DemoOffline';

// const DemoAler = "<div><h2>DEMO SITE</h2><p>This is a demo site created by <strong> Weixel Tech Team</strong> for <br/>College of Education, Oju.</p><p>for full production contact: <a href='tel:+234-803-667-6535'>+234 803 667 6535</a> now!</p></div>";
const DemoAlert = "DEMO SITE \nHi \nThis is a demo site created by Weixel Tech Team for \nAidLife Foundation.\nfor full production pls contact: +234 803 667 6535 ";

const App = () => {
  const [sendAlert, setSendAlert] = useState(()=>{
    return localStorage.getItem('wxn');
  })
  const [exp, setExp] = useState(localStorage.getItem('exp'));

  useEffect(() => {
    document.title = " ADL Demo ";
  }, [])

  useEffect(() => {
    demoAlerter();
  }, [])

  const demoAlerter = () => {
    if(!sendAlert || sendAlert===null){
      setTimeout(() => {
        alert(DemoAlert);
      }, 5000);
      localStorage.setItem('wxn','true');
      const nextExp = new Date();
      nextExp.setDate(nextExp.getDate() + 1);
      localStorage.setItem('exp',`${nextExp}`);
      
    }else {
      if(new Date(exp) < new Date()) {
        localStorage.removeItem('wxn');
        localStorage.removeItem('exp');
      }
    }

  }



  return (
    <DemoOffline />
  //   <Router>
  //   <TopNavBar />
  //   <Switch>
  //     <Route exact path={ROUTES.LANDING} component={Landing} />
  //     <Route exact path={ROUTES.ABOUTUS} component={Aboutus} />
  //     <Route exact path={ROUTES.FOUNDER} component={Founder} />
  //   </Switch>
  //   <Footer />
  // </Router>
  )
}

export default App