const { Router } = require("express");
// We should always follow DRY principle while formulating our code structure.
// Each we need to import express module in each controller but this can be part of middleware and these redundant imports can be avoided.
// https://codezup.com/create-separate-route-file-node-js-mean-stack/#:~:text=Create%20Employee%20Route%20File%20in%20Node&text=So%20first%20we%20need%20to,an%20argument%20to%20the%20function.

const UserModel = require("../models/User.model");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
var cors = require("cors");
const UserRouter = Router();

let flag = false;
const otpArray = [];
const password = process.env.PASSWORD;
const email = process.env.EMAIL;
const transport = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	service: "gmail",
	auth: {
		user: email,
		pass: password,
	},
});

// MVC should always be driven through some factory patterns as per framework
// You can use repository pattern here 
// https://iperiago.medium.com/node-js-app-in-the-real-world-what-they-never-really-tell-you-part-2-of-a-5-part-series-8e9d41d1824
// We should always have our controller as skiny as possible.
UserRouter.post("/signup", async (req, res) => {
	const { username, password, age, email } = req.body;
	const user = await new UserModel({
		password,
		username,
		email,
	});
	user.save();

	return res.status(201).send("singup suseccfull");
});

UserRouter.post("/getotp",(req, res) => {
	//Whatever is coming in request(req.body.email) you should always validate before processing in your logic.
	const { email } = req.body;
	const otp = Math.floor(Math.random() * 1000000);
	otpArray.push(otp);
	transport
		.sendMail({
			from: "skashyap061998@gmail.com",
			to: email,
			subject: "",
			text: `your singup otp:${otp}`,
		})
		.then((info) => {
			console.log("mail sent successfuly", info);
		});
	return res.send({ message: "otp send", otp: otp });
});

UserRouter.post("/login", async (req, res) => {
	const { email } = req.body;

	const user = await UserModel.find({ email });
	if (!user) {
		return res.status(401).send("enter valid credentials");
	}
	// JWT is a type of authenticating mechanism , you should use limited variables for recognising or validating a user.
    // Our request should be light weighted for better and fast processing. Why age is needed in token?
	const token = jwt.sign(
		{
			username: user.email,
			id: user._id,
			age: user.age,
		},
		"Secert"
	);
	flag = true;
	const refreshToken = jwt.sign({}, "password");

	return res.status(201).send({
		message: "login successfull",
		token: token,
		refreshToken: refreshToken,
	});
});



UserRouter.post("/verifyemail", async (req, res) => {
	const { email } = req.body;
	console.log("email", req.body);
	const user = await UserModel.findOne({ email });
	// We should add custom messages for better handling on FE. You can alert pop up message based on BE
	if (user) {
		return res.send({ verify: true });
	}

	return res.send({ verify: false });
});

UserRouter.post("/updated", async (req, res) => {
	const { email, New_password } = req.body;
	console.log(req.body, "bdy");
	const user = await UserModel.updateOne(
		{ email: email },
		{ $set: { password: New_password } }
	);
	if (user) {
		return res.send({ message: "password changed", verify: true });
	}

	return res.send({ message: "something went worng try AGAIN" });
});

UserRouter.get("/getuser", async (req, res) => {
	// const email = req.body
	const user = await UserModel.find();
	if (!user) {
		return res.send({ message: "Account" });
	} else if (flag) {
		// Use proper variable
		let n = user[user.length - 1];
		return res.send({ message: "user", user: n });
	}
});

module.exports = UserRouter;
