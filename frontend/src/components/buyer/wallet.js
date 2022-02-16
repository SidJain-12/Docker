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
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const theme = createTheme();


function Wallet() {
    const [wallet, setwallet] = React.useState("")

    const [increment, setincrement] = React.useState("")
    const onChangeWallet = (event) => { setincrement(event.target.value); };

    const newUser = {
        email: localStorage.getItem("email")
    };


    useEffect(() => {
        axios
            .post("/api/user/user_detail", newUser)
            .then((response) => {
                console.log(response.data);
                // setfirstName(response.data.firstName);
                // setlastName(response.data.lastName);
                // setage(response.data.age);
                // setcontactname(response.data.contactname);
                // setEmail(response.data.email);
                // setbatchname(response.data.batchname);
                setwallet(response.data.wallet);

            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {

            email: localStorage.getItem("email"),
            wallet: increment,
        };

        console.log(newUser);

        axios
            .post("/api/user/wallet", newUser)
            .then((response) => {
                console.log(response.data);
                window.location.reload();
                // alert("Successfully Updated");
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <Box
            sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <AccountBalanceWalletIcon/> 
            </Avatar>

            <Typography component="h1" variant="h5">
                        Wallet
                    </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} >
                        Balance:{wallet}
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            fullWidth
                            id="wallet"
                            label="Increment"
                            type="number"
                            name="wallet"
                            value={increment}
                            onChange={onChangeWallet}
                        />
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
    );
}


export default Wallet;
