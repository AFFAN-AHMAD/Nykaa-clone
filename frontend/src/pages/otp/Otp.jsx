import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Otp.module.css";
import { useToast } from "@chakra-ui/react";
// Follow prev file comments
const Otp = () => {
	const [otp, setotp] = React.useState("");
	const [data, setData] = React.useState({});
	const [getotp, setGetotp] = React.useState("");
	const navigate = useNavigate();
	const toast = useToast();

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const sendotp = () => {
		console.log("sendotp");
		axios
			.post("https://nykaclonebymyteam.herokuapp.com/getotp", data)
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
			return toast({
				title: `enter a valid otp`,
				status: "error",
				position: "top",
				isClosable: true,
				color: "white",
			});
		} else {
			toast({
				title: `Signup successful`,
				status: "success",
				position: "top",
				isClosable: true,
				color: "white",
			});
			axios({
				method: "post",
				url: "https://nykaclonebymyteam.herokuapp.com/signup",
				data: { ...data },
			})
				.then((res) => {
					console.log(res);
					navigate("/login");
				})
				.catch((err) => console.log(err, "err"));
		}
	};

	const otpsend = (e) => {
		e.preventDefault();
	};

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
						onClick={() => navigate("/")}
					/>
					<h1>SIGN UP / REGISTER</h1>

					<hr style={{ margin: "2vh 2vh 0vh 2vh" }} />
					<form onSubmit={otpsend}>
						<input
							placeholder="Email or Phone Number"
							onChange={handleChange}
							name="email"
							style={{
								border: "1px solid red",
								height: "6vh",
								margin: "6vh 0vh 0vh 4vh",
								width: "85%",
								textAlign: "center",
								outline: "red",
							}}
						/>
						<br></br>
						<input
							placeholder="Username"
							onChange={handleChange}
							name="username"
							style={{
								border: "1px solid red",
								height: "6vh",
								margin: "2vh 0vh 0vh 4vh",
								width: "85%",
								textAlign: "center",
								outline: "red",
							}}
						/>
						<br></br>
						<input
							placeholder="Password"
							onChange={handleChange}
							name="password"
							style={{
								border: "1px solid red",
								height: "6vh",
								margin: "2vh 0vh 0vh 4vh",
								width: "85%",
								textAlign: "center",
								outline: "red",
							}}
							type="password"
						/>
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
							onClick={sendotp}
						>
							Send OTP
						</button>
						<br></br>
					</form>
					<form onSubmit={Signup}>
						<input
							placeholder="Enter otp"
							onChange={(e) => setotp(e.target.value)}
							style={{
								border: "1px solid red",
								height: "6vh",
								margin: "15vh 0vh 0vh 4vh",
								width: "85%",
								textAlign: "center",
								outline: "red",
							}}
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
						>
							Signup
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Otp;
