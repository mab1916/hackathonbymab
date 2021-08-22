import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { LoginAction, SignUpAction } from "../../../store/actions/AuthActions";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './userlogin.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function UserLogin() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [hasAccount, setHasAccount] = useState(true);
  const dispatch = useDispatch();

  const isLogin = () => {
    dispatch(LoginAction(email, password, setErrorMsg))
  }

  const newSignup = () => {
    let user = {
      name,
      phone,
      city,
      country,
      email,
      password
    }
    dispatch(SignUpAction(user, setErrorMsg));
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc',width: '700px', height: '120vh', paddingTop: '20px' }}>
          <form className={classes.root} noValidate autoComplete="off">
            {
              hasAccount ?
                <div className='loginstyle'>
                  {/* SignIn */}
                  <p style={{ color: 'red' }}>{errorMsg}</p>
                  <TextField
                    required
                    type='email'
                    id="outlined-required"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                  <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div>
                    <Button className='signbutton' onClick={isLogin} variant="outlined" color="primary">
                      Sign In
                    </Button>
                    <p>
                      Do not have an Account?
                      <span
                        onClick={() => setHasAccount(!hasAccount)}
                        style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
                        Sign Up
                      </span>
                    </p>
                  </div>
                </div>
                :
                <div className='signupstyle'>
                  {/* Sign Up */}
                  <p style={{ color: 'red' }}>{errorMsg}</p>
                  <TextField
                    required
                    type='text'
                    id="outlined-required"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    required
                    type='text'
                    id="outlined-required"
                    label="Country"
                    variant="outlined"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                  <br />
                  <TextField
                    required
                    type='text'
                    id="outlined-required"
                    label="City"
                    variant="outlined"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <TextField
                    required
                    type='text'
                    id="outlined-required"
                    label="phone"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <br />
                  <TextField
                    required
                    type='email'
                    id="outlined-required"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div>
                    <Button className='signbutton' onClick={newSignup} variant="outlined" color="primary">
                      Sign Up
                    </Button>
                    <p>
                      Have an Account?
                      <span
                        onClick={() => setHasAccount(!hasAccount)}
                        style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}>
                        Sign In
                      </span>
                    </p>
                  </div>
                </div>
            }
          </form>
        </Typography>
      </Container>
    </React.Fragment >
  );
}

export default UserLogin;
