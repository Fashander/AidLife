import React, { useState, useEffect } from 'react';
import alfLogo from '../../../assets/img/Aidlife.jpg';
import '../../../App.css';
import Link from '../Link/Link';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
        <IconButton className={`navbar-toggler nav-icon  ${(() => {
          if (toggeledNav) return 'open';
          return '';
        })}`}
          onClick={toggleNav}
        >
          <MenuIcon/>
          <span />
          <span />
          <span />
        </IconButton>
        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link target='home' offset={-120} classes={`nav-link ${classes.mui_navLink}`}>
                <div onClick={toggleNav}> Home</div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='about' classes={`nav-link ${classes.mui_navLink}`}>
                <div onClick={toggleNav}> About</div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='services' classes={`nav-link ${classes.mui_navLink}`}>
                <div onClick={toggleNav}> Services</div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='blog' classes={`nav-link ${classes.mui_navLink}`}>
                <div onClick={toggleNav}> Blog</div>
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='contact' classes={`nav-link ${classes.mui_navLink}`}>
                <div onClick={toggleNav}> Contact</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
