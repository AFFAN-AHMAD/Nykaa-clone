import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";


const Changepass = () => {
  const [data, setData] = React.useState({});
  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.New_password === data.confirm_password) {
      axios
        .post("http://localhost:8080/updated", data)
        .then((res) => {
          console.log(res.data.verify, "brgy");
          if (res.data.verify) {
             alert("Passowrd changed succesfully");
             navigate("/login")
          }
        })
        .catch((err) => alert("error"));
    } else {
      alert("Password does not match");
    }
  };
  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <div style={{ backgroundColor: "#f3f3f3" }}>
        <hr />
      </div>
      <div className={styles.sc1}>
      <img
          style={{ height: "17px", margin: "4vh 0vh 0vh 4vh" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVhNLTUnAPBQYMepezLlKgTmXwNHlHnKTdlFYGlgW56q9V9lJ3cpSiYLBrRgkRRuFSd0&usqp=CAU"
          alt=""
          onClick={()=>navigate("/verifymail")}
        />
        <h1 style={{marginLeft:"13vh"}}>CHANGE PASSWORD</h1>
        <hr style={{ margin: "2vh 2vh 0vh 2vh" }} />
    <form onSubmit={handleSubmit}>
      <input
      style={{
        border: "1px solid red",
        height: "6vh",
        margin: "2vh 0vh 0vh 4vh",
        width: "85%",
        textAlign: "center",
        outline: "red",
      }}
        placeholder=" Email Address"
        type="email"
        name="email"
        onChange={handleChange}
      ></input>
      <br></br>
      <input
      style={{
        border: "1px solid red",
        height: "6vh",
        margin: "2vh 0vh 0vh 4vh",
        width: "85%",
        textAlign: "center",
        outline: "red",
      }}
        placeholder="New Password"
        type="text"
        name="New_password"
        onChange={handleChange}
      ></input>
      <br></br>
      <input
      style={{
        border: "1px solid red",
        height: "6vh",
        margin: "2vh 0vh 0vh 4vh",
        width: "85%",
        textAlign: "center",
        outline: "red",
      }}
        placeholder="Confirm Passoword"
        type="text"
        name="confirm_password"
        onChange={handleChange}
      ></input>
      <br></br>
      <input
     style={{
        backgroundColor: "#fb2e79",
        margin: "2vh 0vh 0vh 4vh",
        color: "white",
        width: "85%",
        height: "6vh",
        fontSize: "1.1rem",
        fontWeight: "500",
        borderRadius: "3px",
      }}
        type="submit"
        value="Update Password"
      ></input>
    </form>
    </div> </div>
  );
};

export default Changepass;
