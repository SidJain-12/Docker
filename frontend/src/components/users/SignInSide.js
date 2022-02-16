import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios"
import { useNavigate } from 'react-router';
import LoginIcon from '@mui/icons-material/Login';
// import ls from "local-storage";



// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";


// import Vendordash from "./Vendordash";
// import Buyerdash from "./Buyerdash";
// import "./App.css";

const theme = createTheme();

function Redirect() {
  let navigate = useNavigate();
  function handleClick() {
    navigate('./Vendordash')
  }
  return (
    { handleClick }
  );
}

export default function SignInSide() {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")

  // const [VendorLoggedIn, setVendorLoggedIn] = "false"
  // const [BuyerLoggedIn, setBuyerLoggedIn] = "false"

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(document.getElementById("formIDs"));
    // eslint-disable-next-line no-console
    console.log({
      email: email,
      password: password,
    });

    const newUser = {
      email: email,
      password: password,
    }
    var dick = false;

    axios
      .post("/api/user/login", newUser)
      .then((response) => {
        // alert(response.data);
        // console.log(response.data);
        if (response.data.message === "Login Successful!") {
          dick = true;
          alert(response.data.message);

          window.location.href = "/";
         
          localStorage.setItem("user_type", "Buyer");
          localStorage.setItem("firstname", response.data.user.firstName);
          localStorage.setItem("email", response.data.user.email);
          
        }
      })
      .catch((err) => {
        console.log(err)
      })

    axios
      .post("/api/vendor/login", newUser)
      .then((response) => {
        // alert(response.data);
        // console.log(response.data);
        if (response.data.message === "Login Successful!") {
          dick = true;
          alert(response.data.message);
            //  console.log(response.data);

          window.location.href = "/";

          localStorage.setItem("user_type", "Vendor");
          localStorage.setItem("firstname", response.data.user.firstName);
          localStorage.setItem("email", response.data.user.email);
          localStorage.setItem("shopname", response.data.user.shopname);
          
        }
        else if (!dick) {
          // alert(response.data);
          alert("Incorrect email or password")
        }
      })
      .catch((err) => {
        console.log(err)
      })


  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LoginIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                onChange={(event) => { setEmail(event.target.value) }}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                id="password"
                autoComplete="current-password"
                onChange={(event) => { setPassword(event.target.value) }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="Signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}