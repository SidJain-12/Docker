import { useState, useEffect } from "react";
import { render } from "react-dom";

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function UserGreeting(props) {
    return <h1>Please login to continue</h1>;
  }

  useEffect(() => {
    setName("Dass TAs");
  }, []);


  return (<div>
    <h2 style={{ textAlign: "center" }}>Welcome {localStorage.getItem("firstname")} Praaji!</h2>
    {/* {if(localStorage.getItem("user_type")!=="Buyer" || localStorage.getItem("user_type")!=="Vendor")
    {
      <UserGreeting />
    }
  } */}

  </div>)

};

export default Home;
