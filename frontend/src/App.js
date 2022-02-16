import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
// Common home page
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import SignUp from "./components/users/Signup";
import SignInSide from "./components/users/SignInSide";

// vendor
import AddProduct from "./components/vendor/AddProduct";
import ViewProduct from "./components/vendor/ViewProduct";
import Dispatched from "./components/vendor/Dispatch";
import Dispatch from "./components/vendor/Dispatchproduct";
import SeeRating from "./components/vendor/SeeRating";
import VendorEditFood from "./components/vendor/VendorEditFood";
import MyOrders from "./components/MyOrders";


//buyer

import MyBOrders from "./components/buyer/MyBOrders";
import RateVendor from "./components/buyer/RateVendor";
import Rate from "./components/buyer/Rate";
import Wallet from "./components/buyer/wallet";
import SearchResult from "./components/search/Result";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="SignInSide" element={<SignInSide />} />
          <Route path="profile" element={<Profile />} />
          
          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/viewproducts" element={<ViewProduct/>} />
          <Route exact path="/seerating" element={<SeeRating/>} />
          <Route exact path="/dispatch" element={<Dispatch/>} />
          <Route exact path="/dispatched" element={<Dispatched/>} />
          <Route exact path="/editfood" element={<VendorEditFood/>}/>
          
          <Route exact path="/rate" element={<Rate/>} />
          <Route exact path="/ratevendor" element={<RateVendor/>} />
          <Route exact path="/buyerorder" element={<MyBOrders/>}/>
          <Route exact path="/myorders" element={<MyOrders/>} />
          <Route exact path="/wallet" element={<Wallet />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
