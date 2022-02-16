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
import { ListItemText } from "@mui/material";


import Select from '@mui/material/Select';

const theme = createTheme();

function AddOns(props) {
    const handleAddOnSubmit = (event) => {
        event.preventDefault();
        const addOn = {
            name: document.getElementById(`addOnName${props.index}`).value,
            price: document.getElementById(`addOnPrice${props.index}`).value
        };
        console.log(addOn);
        if (addOn.name === '' || addOn.price === '') {
            alert("Please enter a valid name and price");
        } else {
            if (props.addOnNames.length < props.index) {
                alert("Make sure previous add-ons are added before adding new ones");
            } else if (props.addOnNames.length === props.index) {
                props.setAddOnNames([...props.addOnNames, addOn.name]);
                props.setAddOnPrices([...props.addOnPrices, addOn.price]);
            } else {
                let newNames = [...props.addOnNames];
                let newPrices = [...props.addOnPrices];
                newNames[props.index] = addOn.name;
                newPrices[props.index] = addOn.price;
                props.setAddOnNames(newNames);
                props.setAddOnPrices(newPrices);
            }
        }
    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <TextField
                    id={`addOnName${props.index}`}
                    label="Add On Name"
                    fullWidth
                    value={props.addOnNames[props.index]}
                    size="small"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    id={`addOnPrice${props.index}`}
                    label="Add On Price"
                    fullWidth
                    value={props.addOnPrices[props.index]}
                    size="small"
                    type="number"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Button
                    onClick={handleAddOnSubmit}
                    fullWidth
                    variant="contained"
                >
                    Submit Add On
                </Button>
            </Grid>
        </Grid>
    );
}


function AddTags(props) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const Tags = {
            name: document.getElementById(`foodTags${props.index}`).value,
        }

        if (Tags.name === '') {
            alert("Please enter a valid name and price");
        } else {
            if (props.foodTags.length < props.index) {
                alert("Make sure previous Tags are added before adding new ones");
            } else if (props.foodTags.length === props.index) {
                props.setTag([...props.foodTags, Tags.name]);
            } else {
                let newTags = [...props.foodTags];
                newTags[props.index] = Tags.name;
                props.setTag(newTags);
            }
        }
        console.log(props.foodTags);

    };
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={8}>
                <TextField
                    id={`foodTags${props.index}`}
                    label="tags"
                    value={props.foodTags.join("\n")}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Button
                    onClick={handleSubmit}
                    fullWidth
                    variant="contained"
                    color="inherit"
                >
                    Submit Tag
                </Button>
            </Grid>
        </Grid>
    );

}
function AddProduct() {

    const [refresh, setrefresh]=React.useState(false)
    const [ItemName, setItemName] = React.useState("")
    const [price, setprice] = React.useState("")

    const [foodItem, setFoodItem] = useState([]);
    const [foodItemPrice, setFoodItemPrice] = useState([]);

    const [count, setCount] = useState(0);
    const [foodTags, setTag] = useState([]);
    const [countTags, setCountTags] = useState(0);

    const [type, settype] = React.useState("")
    const [description, setdescription] = React.useState("")
    const [email, setEmail] = React.useState("")
    // const email = localStorage.getItem('email');

    const handleItemNameChange = (event) => { setItemName(event.target.value); };
    const onChangedescription = (event) => { setdescription(event.target.value); };
    const onChangeprice = (event) => { setprice(event.target.value); };
    const onChangetype = (event) => { settype(event.target.value); };

    const resetInputs = () => {
        setItemName("");
        setprice("");
        settype("");
        setdescription("");
        setFoodItem([""]);
        setFoodItemPrice([""]);
        setTag([""]);
    };
    // console.log(JSON.parse(localStorage.getItem("item")));

    const objects=JSON.parse(localStorage.getItem("item"));

    // console.log(localStorage.getItem("item"));

    const newProduct = {
        ItemName: objects.ItemName
    };

    // console.log(newProduct);
   

    useEffect(() => {
        axios
            .post("/api/product/viewprod", newProduct)
            .then((response) => {

                console.log(response.data);
                setItemName(response.data.ItemName);
                setprice(response.data.price);
                settype(response.data.type);
                setdescription(response.data.description);
                setEmail(response.data.email);
                setFoodItem(response.data.addOnNames);
                setFoodItemPrice(response.data.addOnPrices);
                setTag(response.data.tag);
                setCount(response.data.addOnNames.length);
                setCountTags(response.data.tag.length);

                console.log(response.data.addOnNames);
                console.log(response.data.addOnPrices);

            })
            .catch(function (error) {
                console.log(error);
            });
            
    }, []);

    const onSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);

        const newProduct = {
          
            ItemName: ItemName,
            price: price,
            type: type,
            description: description,
            email: localStorage.getItem("email"),
            addOnNames: foodItem,
            addOnPrices: foodItemPrice,
            tag: foodTags
        };

        console.log(newProduct);

        axios
            .post("/api/product/edit", newProduct)
            .then((response) => {
                alert("Updated Succesful!!");
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err)
            });

        resetInputs();
        window.location.href("./viewproducts");
    };

    var addOnFields = [];
    var tagFields = [];

    for (var x = 0; x < count; x++) {
        addOnFields.push(<AddOns key={x} index={x} addOnNames={foodItem} addOnPrices={foodItemPrice} setAddOnNames={setFoodItem} setAddOnPrices={setFoodItemPrice} />);
    }

    for (var i = 0; i < countTags; i++) {
        tagFields.push(<AddTags key={i} index={i} foodTags={foodTags} setTag={setTag} />);
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
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Edit Products
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="ItemName"
                                    required
                                    fullWidth
                                    id="ItemName"
                                    label="Item Name"
                                    autoFocus
                                    value={ItemName}
                                    onChange={handleItemNameChange}
                                />
                            </Grid>


                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="price"
                                    label="Price"
                                    name="price"
                                    type="number"
                                    value={price}
                                    onChange={onChangeprice}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={() => { setCount(count + 1) }}
                                > ADD FOOD ADD-ON</Button>
                            </Grid>
                            <Grid item xs={12}>
                                {addOnFields}
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={() => { setCountTags(countTags + 1) }}
                                > ADD TAGS</Button>
                            </Grid>
                            <Grid item xs={12}>
                                {tagFields}
                            </Grid>

                            <Grid item xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="type">Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="type"
                                        value={type}
                                        onChange={onChangetype}
                                    >
                                        <MenuItem value={"Veg"}>Veg</MenuItem>
                                        <MenuItem value={"Non-veg"}>Non-veg</MenuItem>

                                    </Select>

                                </FormControl>

                            </Grid>



                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label="Description"
                                    name="description"
                                    autoComplete="description"
                                    value={description}
                                    onChange={onChangedescription}
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
                            Update
                        </Button>
                        <Grid container justifyContent="flex-end">

                        </Grid>
                    </Box>
                </Box>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
        </ThemeProvider >
    );
}


export default AddProduct;