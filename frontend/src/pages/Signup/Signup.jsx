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
        style={{height:"17px",margin:"3vh 0vh 0vh 3vh"}}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVhNLTUnAPBQYMepezLlKgTmXwNHlHnKTdlFYGlgW56q9V9lJ3cpSiYLBrRgkRRuFSd0&usqp=CAU"
          alt=""
        />
        <h1>Sign in</h1>
      </div>
    </div>
  );
};

export default Signup;
