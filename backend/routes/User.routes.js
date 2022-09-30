const { Router } = require("express");
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
		let n = user[user.length - 1];
		return res.send({ message: "user", user: n });
	}
});

module.exports = UserRouter;
