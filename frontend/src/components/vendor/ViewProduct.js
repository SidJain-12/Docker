import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import CssBaseline from '@mui/material/CssBaseline';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { useState, useEffect } from "react";

const theme = createTheme();

const OnEdit = (item) => {
    // console.log(item);
    localStorage.setItem("item", JSON.stringify(item));
    
    window.location.href = "/editfood";
};

const OnDelete = (id) => {
    const data = {
        id: id,
    }
    axios
        .post("/api/product/delete", data)
        .then((response) => {
            alert("DELETED");
            window.location.href("./VendorDashboard");
        });
}

const VendorDashboard = (props) => {
    const [items, Setitems] = useState([]);
    const data = {
        email: localStorage.getItem("email"),
    }

    useEffect(() => {
        if (localStorage.getItem("user_type") != "Vendor") { window.location.href("./"); }
        axios
            .post("/api/product/view",data)
            .then((response) => {
                Setitems(response.data);
                // console.log(items);
            });
    });



    return (
        <ThemeProvider theme={theme}>
            <Container component="main" >
                <CssBaseline />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Item</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Tags</TableCell>
                                <TableCell align="right">Add ons</TableCell>
                                <TableCell align="right">Add on prices</TableCell>
                                <TableCell align="center">Options</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.ItemName}
                                    </TableCell>
                                    <TableCell align="right">{item.price}</TableCell>
                                    <TableCell align="right">{item.type}</TableCell>
                                    <TableCell align="right">{item.description}</TableCell>
                                    <TableCell align="right">{item.tag}</TableCell>
                                    <TableCell align="right">
                                        {item.addOnNames.map((addon) => (
                                            <div>
                                                {addon}
                                            </div>

                                        ))}
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.addOnPrices.map((addonprice) => (
                                            <div>
                                                {addonprice}
                                            </div>

                                        ))}
                                    </TableCell>
                                    <TableCell align="right">
                                        <Box sx={{ mt: 3 }} align="right">
                                            <Grid container spacing={1} align="right" >
                                                <Grid item xs={3} align="right">
                                                    <Button
                                                        onClick={(event) => {
                                                            OnEdit(item);
                                                        }}
                                                        variant="contained"
                                                    >
                                                        Edit
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={3} align="right">
                                                    <Button
                                                        color="error"
                                                        onClick={(event) => {
                                                            OnDelete(item._id);
                                                        }}
                                                        variant="contained"
                                                    >
                                                        Delete
                                                    </Button>
                                                </Grid>

                                            </Grid>
                                        </Box>



                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </ThemeProvider>
    );
};

export default VendorDashboard;