import React, { useState, useEffect } from 'react';
import alfLogo from '../../../assets/img/Aidlife.jpg';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  navBgColor: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='20' viewBox='0 0 16 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ec2304' fill-opacity='0.62' fill-rule='evenodd'%3E%3Cpath d='M8 0v20L0 10M16 0v10L8 0M16 10v10H8'/%3E%3C/g%3E%3C/svg%3E")`,
  },
  mui_hideLogo: {
    display: 'inline-block',
    '&.scrolled': {
      display: 'none',
    },
  },
  navColor: {
    color: `${theme.palette.primary.contrastText}!important`,
  },
  mui_navLink: {
    color: `${theme.palette.primary.contrastText}!important`,
    '&:hover': {
      color: `${theme.palette.secondary.light}!important`,
    },
    '&.active': {
      color: `${theme.palette.secondary.main}!important`,
    },
  },
  mui_navIcon: {
    '&>span': {
      backgroundColor: `${theme.palette.primary.contrastText}!important`,
    },
  },
}));


const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);
  const classes = useStyles();

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  const openDonate = () => {
    window.open('https://ravesandbox.flutterwave.com/pay/aidlifefoundation','_self');
  }

  const scrolledFunc = () => {
    let navClass = '';
    if (window.scrollY >= 300) {
      navClass = 'scrolled';
    }
    setNavClass(navClass);
  }
  useEffect(() => {
    window.addEventListener('scroll', scrolledFunc);
    return () => {
      window.removeEventListener('scroll', scrolledFunc);
    }
  }, []);
  return (
    <nav className={`navbar navbar-expand-md ${classes.navBgColor} ${navClass}`}>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <img className='App-logo' src={alfLogo} alt='Logo' />
        </a>
        <div className={`navbar-toggler nav-icon ${classes.mui_navIcon} ${ toggeledNav ? 'open' : ''}`}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </div>
        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to='/' className={`nav-link ${classes.mui_navLink}`}>
                <div onClick={toggleNav}> Home</div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/aboutus' className={`nav-link ${classes.mui_navLink}`}>
                <div onClick={toggleNav}> About Us</div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/founder' className={`nav-link ${classes.mui_navLink}`}>
                <div onClick={toggleNav}> The Founder</div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link onClick={openDonate} className={`nav-link ${classes.mui_navLink}`}>
                <div onClick={toggleNav}> Donate</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
