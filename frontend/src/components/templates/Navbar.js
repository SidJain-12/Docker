import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const navigate = useNavigate();

  const remove = () => {
    localStorage.removeItem('user_type');
    localStorage.removeItem('firstname');
    localStorage.removeItem('email');
    navigate("/");
    window.location.reload();
 
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            Canteen Portal
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {
            localStorage.getItem("user_type") === "Buyer" ?

              <Box>
                <Button color="inherit" onClick={() => navigate("/buyerorder")}>
                  My Orders
                </Button>
                <Button color="inherit" onClick={() => navigate("/ratevendor")}>
                  Rate Vendor
                </Button>
                <Button color="inherit" onClick={() => navigate("/rate")}>
                  Rating & Review
                </Button>
                <Button color="inherit" onClick={() => navigate("/profile")}>
                  My Profile
                </Button>
                <Button color="inherit" onClick={() => navigate("/wallet")}>
                  Wallet
                </Button>
                <Button color="inherit" onClick={() => remove()}>
                  Logout
                </Button>
              </Box> :

              localStorage.getItem("user_type") === "Vendor" ?

                <Box>
                  <Button color="inherit" onClick={() => navigate("/addproduct")}>
                    Add Product
                  </Button>
                  <Button color="inherit" onClick={() => navigate("/viewproducts")}>
                    List Product
                  </Button>
                  <Button color="inherit" onClick={() => navigate("/myorders")}>
                    My Orders
                  </Button>
                  {/* <Button color="inherit" onClick={() => navigate("/dispatch")}>
                    Ready to dispatch
                  </Button>
                  <Button color="inherit" onClick={() => navigate("/dispatched")}>
                    Dispatched Products
                  </Button> */}
                  <Button color="inherit" onClick={() => navigate("/seerating")}>
                    See Ratings
                  </Button>
                  <Button color="inherit" onClick={() => navigate("/profile")}>
                    My Profile
                  </Button>
                  <Button color="inherit" onClick={() => remove()}>
                    Logout
                  </Button>
                </Box> :

                <Box >
                  {/* <Button color="inherit" onClick={() => navigate("/")}>
                    Home
                  </Button> */}
                  <Button color="inherit" onClick={() => navigate("/Signup")}>
                    Register
                  </Button>
                  <Button color="inherit" onClick={() => navigate("/SignInSide")}>
                    Login
                  </Button>
                </Box>

          }



        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

// localStorage.removeItem("user_type");localStorage.removeItem("firstname");localStorage.removeItem("email");}