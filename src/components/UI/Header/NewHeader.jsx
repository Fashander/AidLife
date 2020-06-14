import React, {useState, useEffect} from 'react';
import * as ROUTES from '../../../constants/routes'
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Aidlife from '../../../assets/img/Aidlife.jpg'
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'block',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    logo: {
        maxWidth: 160,
    },
}));

export default function MainAppBar(props) {
    // master 397da25
    const classes = useStyles();
    const [open, setOpen] = useState(null);
    const [mobileMoreopen, setMobileMoreopen] = useState(null);
    const anchorRef = React.useRef(null);

    const isMenuOpen = Boolean(open);
    const isMobileMenuOpen = Boolean(mobileMoreopen);

    // console.log('mobileAnchor: ', mobileMoreopen, 'open: ', open);

    const handleProfileMenuOpen = () => {
        setOpen((prevOpen) => !prevOpen);
        
    };

    const handleProfileMenuClose=(event)=>{
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
          }
      
          setOpen(false);
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
          event.preventDefault();
          setOpen(false);
        }
      }

      const prevOpen = React.useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

    const handleMobileMenuClose = () => {
        setMobileMoreopen(null);
    };

    const handleMenuClose = () => {
        setOpen(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreopen(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            open={open}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
        <Popper
          open={open}
          AnchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center " : "center "
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleProfileMenuClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem component={Link} to={ROUTES.PROFILE} onClick={handleProfileMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
                    <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
            
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            open={mobileMoreopen}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <p>I'm an Individual</p>
            </MenuItem>
            <MenuItem>
                <p>Covid-19 Hub</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <p>I'm a Charity</p>
            </MenuItem>
            <MenuItem>
            <p>I'm a Company</p>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" >
                <Toolbar>
                    {/* <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MoreIcon />
                    </IconButton> */}
                    <Typography component={Link} to={ROUTES.LANDING} className={classes.title} variant="inherit" noWrap >
                        <img src={Aidlife} style={{
                                    left: "50%",
                                    top: "50%",
                                    maxHeight: "50px"
                                }} alt='Aidlife' className={classes.logo} />
                    </Typography>
                    
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        
                    <Tabs>
                            <Tab label="About Us" onClick={handleProfileMenuOpen}> </Tab>
                            <Tab label="Covid-19 Hub"> </Tab>
                            <Tab label="I'm an Individual"> </Tab>
                            <Tab label="I'm a charity"> </Tab>
                            <Tab label="I'm a company" > </Tab>
                            <Tab
                                ref={anchorRef}
                                 aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                
                                label="Toggle Menu"
                                    >
                            </Tab>
                            </Tabs>
                            
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
