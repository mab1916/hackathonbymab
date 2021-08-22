import UsersProfile from './components/Admin/UsersProfile';
import Products from './components/Body/Products/Products';
import UserLogin from './modules/auth/UserLogin/UserLogin';
import Product from './modules/products/Product';
import PrivateRoute from "./modules/auth/UserLogin/PrivateRouting";
import PublicRouting from "./modules/auth/UserLogin/PublicRouting";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useSelector } from 'react-redux';
import LogOut from './modules/auth/logout/logout';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ScrollableTabsButtonAuto from './components/About/about';
import StorageIcon from '@material-ui/icons/Storage';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import './App.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));


function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const authState = useSelector(state => state.AuthReducer.isUserLogin);
  const [doLogoutAction] = LogOut();

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{ backgroundColor: 'red' }}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              M.A.B Foods
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"

          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          {
            authState ?
              <React.Fragment>
                {/* Signed In */}
                <List>
                  <ListItem button>
                    <ListItemIcon >
                      <Link to="/" className='links'>
                        <HomeIcon />
                        <ListItemText className='linkText' primary={'Home'} />
                      </Link>
                    </ListItemIcon>
                  </ListItem>
                </List>
                <List>
                  <ListItem button>
                    <ListItemIcon >
                      <Link to="/usersprofile" className='links'>
                        <AccountCircleIcon />
                        <ListItemText className='linkText' primary={'Profile'} />
                      </Link>
                    </ListItemIcon>
                  </ListItem>
                </List>
                <List>
                  <ListItem button>
                    <ListItemIcon >
                      <Link to="/product" className='links'>
                        <StorageIcon />
                        <ListItemText className='linkText' primary={'Product'} />
                      </Link>
                    </ListItemIcon>
                  </ListItem>
                </List>
                <List>
                  <ListItem button>
                    <ListItemIcon >
                      <Link to="/about" className='links'>
                        <InfoIcon />
                        <ListItemText className='linkText' primary={'About'} />
                      </Link>
                    </ListItemIcon>
                  </ListItem>
                </List>
                <List>
                  <ListItem button>
                    <ListItemIcon>
                      <Link className='links' onClick={doLogoutAction}>
                        <ExitToAppIcon />
                        <ListItemText className='linkText' primary={'Signout'} />
                      </Link>
                    </ListItemIcon>
                  </ListItem>
                </List>
              </React.Fragment>
              :
              <React.Fragment>
                {/* Not Sogned In */}
                <List>
                  <ListItem button>
                    <ListItemIcon >
                      <Link to="/" className='links'>
                        <HomeIcon />
                        <ListItemText className='linkText' primary={'Home'} />
                      </Link>
                    </ListItemIcon>
                  </ListItem>
                </List>
                <List>
                  <ListItem button>
                    <ListItemIcon >
                      <Link to="/login" className='links'>
                        <AccountCircleIcon />
                        <ListItemText className='linkText' primary={'Signin or Create'} />
                      </Link>
                    </ListItemIcon>
                  </ListItem>
                </List>
                <List>
                  <ListItem button>
                    <ListItemIcon >
                      <Link to="/about" className='links'>
                        <InfoIcon />
                        <ListItemText className='linkText' primary={'About'} />
                      </Link>
                    </ListItemIcon>
                  </ListItem>
                </List>
              </React.Fragment>
          }
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />

          <div>
            <Switch>
              <Route path="/about">
                <ScrollableTabsButtonAuto />
              </Route>
              <PrivateRoute path="/usersprofile" auth={authState}>
                <UsersProfile />
              </PrivateRoute>
              <PrivateRoute path="/product" auth={authState}>
                <Product />
              </PrivateRoute>
              <PublicRouting path="/login">
                <UserLogin />
              </PublicRouting>
              <Route exact path="/">
                <Products />
              </Route>
            </Switch>
          </div>
        </main>
      </Router>

    </div >
  );
}

export default App;
