// import axios from "axios";
// import { useState, useEffect } from "react";
// import { render } from "react-dom";
import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile = () => {

  return (

    localStorage.getItem("user_type") === "Buyer" ?
      <BProfile /> :
      localStorage.getItem("user_type") === "Vendor" ?
        <VProfile /> :
        null
  );
}

const theme = createTheme();

function BProfile() {
  // return (<div> Hello {localStorage.getItem("firstname")} </div>)

  const [firstName, setfirstName] = React.useState("")
  const [lastName, setlastName] = React.useState("")
  const [age, setage] = React.useState("")
  const [contactname, setcontactname] = React.useState("")
  const [batchname, setbatchname] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [password, setpassword] = React.useState("")
  const [date, setDate] = React.useState(null);


  const handlefirstNameChange = (event) => { setfirstName(event.target.value); };
  const handlelastNameChange = (event) => { setlastName(event.target.value); };
  const onChangeEmail = (event) => { setEmail(event.target.value); };
  const onChangeAge = (event) => { setage(event.target.value); };
  const onChangecontactname = (event) => { setcontactname(event.target.value); };
  const onChangebatchname = (event) => { setbatchname(event.target.value); };


  const newUser = {
    email: localStorage.getItem("email")
  };

  useEffect(() => {
    axios
      .post("/api/user/user_detail", newUser)
      .then((response) => {
        console.log(response.data);
        setfirstName(response.data.firstName);
        setlastName(response.data.lastName);
        setage(response.data.age);
        setcontactname(response.data.contactname);
        setEmail(response.data.email);
        setbatchname(response.data.batchname);

      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newUser = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      age: data.get("age"),
      contactname: data.get("contactname"),
      batchname: data.get("batchname"),
      email: localStorage.getItem("email"),
      date: Date.now()
    };

    console.log(newUser);

    axios
      .post("/api/user/edit", newUser)
      .then((response) => {
        console.log(response.data);
        alert("Successfully Updated");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Buyer profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={handlefirstNameChange}
                  autoFocus


                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={lastName}
                  onChange={handlelastNameChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  type="number"
                  name="age"
                  value={age}
                  onChange={onChangeAge}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="contactname"
                  label="Contact Number"
                  type="number"
                  name="contactname"
                  value={contactname}
                  onChange={onChangecontactname}
                />
              </Grid>


              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="batchname">Batch Name</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="batchname"
                    name="batchname"
                    value={batchname}
                    onChange={onChangebatchname}
                  >
                    <MenuItem value={1}>UG1</MenuItem>
                    <MenuItem value={2}>UG2</MenuItem>
                    <MenuItem value={3}>UG3</MenuItem>
                    <MenuItem value={4}>UG4</MenuItem>
                    <MenuItem value={5}>UG5</MenuItem>
                  </Select>

                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              // onClick={onSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>

          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );


}

function VProfile() {
  // return (<div> Hello {localStorage.getItem("firstname")} </div>)

  const [firstName, setfirstName] = React.useState("")
    const [lastName, setlastName] = React.useState("")
    const [shopname, setshopname] = React.useState("")
    const [contactname, setcontactname] = React.useState("")
    const [copen, setcopen] = React.useState("")
    const [cclose, setcclose] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setpassword] = React.useState("")
    const [date, setDate] = React.useState(null);

    const handlefirstNameChange = (event) => { setfirstName(event.target.value); };
    const handlelastNameChange = (event) => { setlastName(event.target.value); };
    const onChangeEmail = (event) => { setEmail(event.target.value); };
    const onChangeshopname = (event) => { setshopname(event.target.value); };
    const onChangecontactname = (event) => { setcontactname(event.target.value); };
    const oncopen = (event) => { setcopen(event.target.value); };
    const oncclose = (event) => { setcclose(event.target.value); };
    const onChangePassword = (event) => { setpassword(event.target.value); };

    const newVendor = {
      email: localStorage.getItem("email")
    };
  
    useEffect(() => {
      axios
        .post("/api/vendor/vendor_detail", newVendor)
        .then((response) => {
          console.log(response.data);
          setfirstName(response.data.firstName);
          setlastName(response.data.lastName);
          setshopname(response.data.shopname);
          setcontactname(response.data.contactname);
          setEmail(response.data.email);
          setcopen(response.data.copen);
          setcclose(response.data.cclose);
  
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
  
      const newVendor = {
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        shopname: data.get("shopname"),
        contactname: data.get("contactname"),
        copen: data.get("copen"),
        cclose: data.get("cclose"),
        email: localStorage.getItem("email"),
        date: Date.now()
      };
  
      console.log(newVendor);
      axios
        .post("/api/vendor/edit", newVendor)
        .then((response) => {
          console.log(response.data);
          alert("Successfully Updated");
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return (
      <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                  sx={{
                      marginTop: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                  }}
              >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                      <AccountCircleIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                      Vendor Profile
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                      <Grid container spacing={2}>
                          <Grid item xs={12} sm={6}>
                              <TextField
                                  autoComplete="given-name"
                                  name="firstName"
                                  required
                                  fullWidth
                                  id="firstName"
                                  label="First Name"
                                  autoFocus
                                  value={firstName}
                                  onChange={handlefirstNameChange}
                              />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                              <TextField
                                  required
                                  fullWidth
                                  id="lastName"
                                  label="Last Name"
                                  name="lastName"
                                  autoComplete="family-name"
                                  value={lastName}
                                  onChange={handlelastNameChange}
                              />
                          </Grid>

                          <Grid item xs={12}>
                              <TextField
                                  required
                                  fullWidth
                                  id="shopname"
                                  label="Shop Name"
                                  name="shopname"
                                  value={shopname}
                                  onChange={onChangeshopname}
                              />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                              <TextField
                                  required
                                  fullWidth
                                  id="copen"
                                  label="Canteen Opening Time"
                                  name="copen"
                                  value={copen}
                                  onChange={oncopen}
                                  type="time"
                                  // defaultValue="18:30"
                                  InputLabelProps={{
                                      shrink: true,
                                  }}
                                  inputProps={{
                                      step: 300, // 5 min
                                  }}
                                  sx={{ width: 150 }}
                              />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                              <TextField
                                  required
                                  fullWidth
                                  id="cclose"
                                  label="Canteen Closing Time"
                                  name="cclose"
                                  value={cclose}
                                  onChange={oncclose}
                                  type="time"
                                  // defaultValue="18:30"
                                  InputLabelProps={{
                                      shrink: true,
                                  }}
                                  inputProps={{
                                      step: 300, // 5 min
                                  }}
                                  sx={{ width: 150 }}

                              />
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                                  required
                                  fullWidth
                                  id="contactname"
                                  label="Contact Number"
                                  name="contactname"
                                  value={contactname}
                                  onChange={onChangecontactname}
                              />
                          </Grid>
                      </Grid>
                      <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                      >
                          Update
                      </Button>
                      
                  </Box>
              </Box>
              {/* <Copyright sx={{ mt: 5 }} /> */}
          </Container>
      </ThemeProvider>
  );




}



export default Profile;
