import React from "react";
import styles from "./Signup.module.css";


const Signup = () => {
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
        <h1>Sign in</h1>
        <p style={{ marginLeft: "5vh", marginRight: "5vh" }}>
          To quickly find your favourites items, saved addresses and payments.
        </p>
        <hr style={{ margin: "2vh 5vh 0vh 5vh" }} />
        <p style={{ marginLeft: "5vh", marginTop: "2vh" }}>
          Register and earn 2000 reward points
        </p>
        <img style={{margin:"2vw 0vw 2vw 1.5vw"}} src={require("./P.png")} alt="" />
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
        <br />
        <button
          style={{
            display: "flex",
            margin: "2.5vh 5vh 0vh 5vh",
            border: "1px solid rgb(122, 122, 122)",
            borderRadius: "3px",
            width: "20vw",
            height: "6vh",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{ height: "4vh", marginRight: "1.6vh", marginTop: "1vh" }}
            src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip"
            alt=""
          />
          <p
            style={{
              color: "rgb(122, 122, 122)",
              fontSize: "1.1rem",
              fontWeight: "500",
              marginTop: "0.7vh",
            }}
          >
            Google
          </p>
        </button>
        <p
          style={{
            color: "rgb(122, 122, 122)",
            fontSize: "17px",
            fontWeight: "400",
            margin: "3vh 5vh 0vh 5vh",
          }}
        >
          By continuing, you agree that you have read and accept our T&Cs and
          Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Signup;
