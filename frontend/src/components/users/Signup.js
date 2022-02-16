import * as React from 'react';
import axios from "axios";
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

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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

const theme = createTheme();


export default function BasicSelect() {
    const [user, setUser] = React.useState('');

    const handleChange = (event) => {
        setUser(event.target.value);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Grid>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">User</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={user}
                            label="User"
                            onChange={handleChange}
                        >

                            <MenuItem value={1}>Buyer</MenuItem>
                            <MenuItem value={2}>Vendor</MenuItem>
                        </Select>
                    </FormControl>
                    {user == 1 ? <BSignUp /> : <> </>}
                    {user == 2 ? <VSignUp /> : <></>}
                </Box>
            </Grid>
        </Container>
    );
}

function BSignUp() {
    const [firstName, setfirstName] = React.useState("")
    const [lastName, setlastName] = React.useState("")
    const [age, setage] = React.useState("")
    const [contactname, setcontactname] = React.useState("")
    const [batchname, setbatchname] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setpassword] = React.useState("")
    const [date, setDate] = React.useState(null);


    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     // eslint-disable-next-line no-console
    //     console.log({
    //         email: data.get('email'),
    //         password: data.get('password'),
    //     });
    // };

    const handlefirstNameChange = (event) => { setfirstName(event.target.value); };
    const handlelastNameChange = (event) => { setlastName(event.target.value); };
    const onChangeEmail = (event) => { setEmail(event.target.value); };
    const onChangeAge = (event) => { setage(event.target.value); };
    const onChangecontactname = (event) => { setcontactname(event.target.value); };
    const onChangebatchname = (event) => { setbatchname(event.target.value); };
    const onChangePassword = (event) => { setpassword(event.target.value); };




    const resetInputs = () => {
        setfirstName("");
        setlastName("");
        setage("");
        setcontactname("");
        setbatchname("");
        setEmail("");
        setpassword("");
        setDate(null);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            contactname: contactname,
            batchname: batchname,
            email: email,
            password: password,
            date: Date.now(),
        };

        console.log(newUser)

        axios
            .post("/api/user/register", newUser)
            .then((response) => {
                alert("Registration Succesful!!");
                console.log(response.data);
            });

        resetInputs();
    };

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
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Buyer Register
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
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

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={onChangePassword}
                               
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={onSubmit}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="SignInSide" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
        </ThemeProvider>
    );
}


function VSignUp() {


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

    const resetInputs = () => {
        setfirstName("");
        setlastName("");
        setshopname("");
        setcontactname("");
        setcopen("");
        setcclose("");
        setEmail("");
        setpassword("");
        setDate(null);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            shopname: shopname,
            contactname: contactname,
            copen: copen,
            cclose: cclose,
            email: email,
            password: password,
            date: Date.now(),
        };

        console.log(newUser);

        axios
            .post("/api/vendor/register", newUser)
            .then((response) => {
                alert("Registration Succesful!!");
                console.log(response.data)
            .catch((err) => {
                console.log(err)
            });
            });

        resetInputs();
    };



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
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Vendor Register
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
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
                                    defaultValue="18:30"
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
                                    defaultValue="18:30"
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
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    value={password}
                                    onChange={onChangePassword}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            onClick={onSubmit}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="SignInSide" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
        </ThemeProvider>
    );
}