import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Otp.module.css";

const Otp = () => {
  const [otp, setotp] = React.useState("");
  const [data, setData] = React.useState({});
  const [getotp, setGetotp] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const sendotp = () => {
    console.log("sendotp");
    axios
      .post("http://localhost:8080/getotp", data)
      .then((res) => {
        console.log(res.data.otp);
        setGetotp(res.data.otp);
      })
      .catch((err) => console.log(err, "err"));
  };

  const Signup = (e) => {
    e.preventDefault();
    console.log("singup");

    if (Number(otp) !== getotp) {
      return alert("otp is not correct");
    } else {
      alert("go to log in page");
      axios({
        method: "post",
        url: "http://localhost:8080/signup",
        data: { ...data },
      })
        .then((res) => {
          console.log(res);
          navigate("/login");
        })
        .catch((err) => console.log(err, "err"));
    }

    // axios.post()
  };

  const otpsend = (e) => {
    e.preventDefault();
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
        />
        <h1>LOGIN / REGISTER</h1>

        <hr style={{ margin: "2vh 5vh 0vh 5vh" }} />
        {/* <form onSubmit={handelSubmit}>
          <input type="text" onChange={(e) => setGotp(e.target.value)} />

          <button
            style={{
              backgroundColor: "#fb2e79",
              margin: "3vh 5vh 0vh 5vh",
              color: "white",
              width: "20vw",
              height: "6vh",
              fontSize: "1.1rem",
              fontWeight: "500",
              borderRadius: "3px",
            }}
          >
            Enter Phone Number or Email
          </button>
        </form> */}
        <form onSubmit={otpsend}>
          <input
            placeholder="email"
            onChange={handleChange}
            name="email"
          ></input>
          <br></br>
          <input
            placeholder="password"
            onChange={handleChange}
            name="password"
          ></input>
          <br></br>
          <button
            style={{
              backgroundColor: "#fb2e79",
              margin: "3vh 5vh 0vh 5vh",
              color: "white",
              width: "20vw",
              height: "6vh",
              fontSize: "1.1rem",
              fontWeight: "500",
              borderRadius: "3px",
            }}
            onClick={sendotp}
          >
            Send otp
          </button>
          <br></br>
        </form>
        <form onSubmit={Signup}>
          <input
            placeholder="Enter otp"
            onChange={(e) => setotp(e.target.value)}
          ></input>
          <br></br>
          <button>signup</button>
        </form>
      </div>
    </div>
  );
};

export default Otp;
