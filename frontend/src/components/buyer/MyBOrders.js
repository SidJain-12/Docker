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


const VendorDashboard = (props) => {
    const [items, Setitems] = useState([]);
    const [PlacedTime, SetPlacedTime] = useState();
    const [VendorName,SetVendorName]=useState();
    const [ItemName,SetItemName]=useState();
    const [Quantity,SetQuantity]=useState();
    const [Status,SetStatus]=useState();
    const [Cost,SetCost]=useState();
    const [Rating,SetRating]=useState();
    
    const data = { 
       
    }

    useEffect(() => {
        
        axios
            .get("/api/product/")
            .then((response) => {
                Setitems(response);
                console.log(items);
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
                                
                                <TableCell align="right">Tags</TableCell>
                                <TableCell align="right">Add ons</TableCell>
                                <TableCell align="right">Add on prices</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="right">Description</TableCell>
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