
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Login.module.css";


const Verifymail = () => {
const navigate = useNavigate()
    const [email,setEmail]= React.useState('')

  
// console.log("refesehd")
 const handleSubmit=()=>{
       console.log("data:", email)
    axios.post("http://localhost:8080/verifyemail",{email})
    .then((res)=>{console.log(res) ;
        if(res.data.verify)  navigate("/changepass")
        if(!res.data.verify) alert(" hack krta hai")
       
    })
    .catch((err)=>{console.log(err);alert(" hack krta hai")})
 }
  return (
		<div style={{ backgroundColor: "#f3f3f3" }}>
			<div style={{ backgroundColor: "#f3f3f3" }}>
				<hr />
			</div>
			<div style={{ paddingBottom: "60px" }}>
				<div className={styles.sc1}>
					<img
						style={{ height: "17px", margin: "4vh 0vh 0vh 4vh" }}
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVhNLTUnAPBQYMepezLlKgTmXwNHlHnKTdlFYGlgW56q9V9lJ3cpSiYLBrRgkRRuFSd0&usqp=CAU"
						alt=""
						onClick={() => navigate("/login")}
					/>
					<h1>Verify Email</h1>
					<hr style={{ margin: "2vh 2vh 0vh 2vh" }} />
					<input
						style={{
							border: "1px solid red",
							height: "6vh",
							margin: "5vh 0vh 0vh 4vh",
							width: "85%",
							textAlign: "center",
							outline: "red",
						}}
						placeholder="Confirm Email Address"
						type="email"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<br></br>
					<button
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
						onClick={handleSubmit}
					>
						verify
					</button>
				</div>
			</div>
		</div>
	);
}

export default Verifymail