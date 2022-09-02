import React, { useState, useEffect } from "react";
import { Badge, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiUser } from "react-icons/fi";
import { Box, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import DrawerExample from "./DrawerExample";
import axios from "axios";
const Navbar = () => {
	const [hooks, setHooks] = useState(false);
	const [fresh, setFresh] = useState(false);
	const [name, setName] = useState("Account");
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		axios.get("https://nykaclonebymyteam.herokuapp.com/getuser").then((res) => {
			if (res.data.message === "user") {
				setName(res.data.user.username);
				console.log(res.data.user);
				
	
			}
		});
	}, [name]);
	//   console.log(hooks);
	const navigate = useNavigate();

	// console.log("data",items)
	return (
		<div style={{ background: "white" }}>
			<div className={styles.Sc1}>
				<img
					// border={"1px solid red"}
					src="https://theme.zdassets.com/theme_assets/222949/60503496e109d9e249ab19791fb335f0459a483e.png"
					alt=""
					onClick={() => navigate("/")}
				/>
				<div className={styles.parent}>
					<div
						className={styles.sc11}
						onClick={() => setHooks(false)}
					>
						<p>
							<Link to="">Categories</Link>
						</p>
						<p>
							<Link to="">Brands</Link>
						</p>
						<p>
							<Link to="">Luxe</Link>
						</p>
						<p>
							<Link to="">Nykaa Fashion</Link>
						</p>
						<p>
							<Link to="">Beauty Advice</Link>
						</p>
					</div>

					<div className={styles.sc12}>
						{/* <p><BiSearch/></p> */}
						<div
							className={styles.sc121}
							style={{ border: hooks ? "1px solid #e62e77 " : "none" }}
						>
							<img
								height={"30px"}
								width={"35px"}
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
								alt=""
							/>

							<input
								onClick={() => {
									setHooks(true);
								}}
								style={{ width: hooks === true ? "25vw" : "13vw" }}
								type="text"
								placeholder="Search on Nykaa"
							/>
						</div>
						<Center
							display={hooks === true ? "none" : "block"}
							m={2}
							ml={5}
							cursor={"pointer"}
						>
							<FiUser />
						</Center>
						<Link
							to="/signup"
							style={{
								display: hooks === true ? "none" : "block",
								marginLeft: "0.5vw",
								marginTop: "0.7vh",
							}}
						>
							{name}
						</Link>
						<DrawerExample
							isOpen={isOpen}
							onOpen={onOpen}
							onClose={onClose}
							hooks={hooks}
						/>
					</div>
				</div>
				<div
					style={{ height: "100%", width: "5vw" }}
					onClick={() => setHooks(false)}
				></div>
			</div>
			<hr />
			<div
				onClick={() => setHooks(false)}
				className={styles.sc2}
			>
				<div
					className={styles.sc21}
					onClick={() => setHooks(false)}
				>
					<div className={styles.sc211}>
						<p>
							<Link to="">Makeup</Link>
						</p>
						<div className={styles.sc2111}>
							<div style={{ background: "white" }}>
								<h3>
									<Link to="">Face</Link>
								</h3>
								<p>
									<Link to="">Face Primer</Link>
								</p>
								<p>
									<Link to="">Concealer</Link>
								</p>
								<p>
									<Link to="">Foundation</Link>
								</p>
								<p>
									<Link to="">Compact</Link>
								</p>
								<p>
									<Link to="">Contour</Link>
								</p>
								<p>
									<Link to="">Loose Powder</Link>
								</p>
								<p>
									<Link to="">Tinted Moisturizer</Link>
								</p>
								<p>
									<Link to="">Blush</Link>
								</p>
								<p>
									<Link to="">Bronzer</Link>
								</p>
								<p>
									<Link to="">BB & CC Cream</Link>
								</p>
								<p>
									<Link to="">Highlighters</Link>
								</p>
								<p>
									<Link to="">Setting Spray</Link>
								</p>
								<p>
									<Link to="">Makeup Remover</Link>
								</p>
								<p>
									<Link to="">Sindoor</Link>
								</p>
							</div>
							<div style={{ backgroundColor: "#f4f4f4" }}>
								<h3>
									<Link to="">Eyes</Link>
								</h3>
								<p>
									<Link to="">Kajal</Link>
								</p>
								<p>
									<Link to="">Eyeliner</Link>
								</p>
								<p>
									<Link to="">Mascara</Link>
								</p>
								<p>
									<Link to="">Eye Shadow</Link>
								</p>
								<p>
									<Link to="">Eye Brow Enhancers</Link>
								</p>
								<p>
									<Link to="">Eye Primer</Link>
								</p>
								<p>
									<Link to="">False Eyelashes</Link>
								</p>
								<p>
									<Link to="">Eye Makeup Remover</Link>
								</p>
								<p>
									<Link to="">Under Eye Concealer</Link>
								</p>
								<p>
									<Link to="">Contact Lenses</Link>
								</p>
								<h3 style={{ marginTop: "2.5vh" }}>
									<Link to="">Makeup Kits & Combos</Link>
								</h3>
								<p>
									<Link to="">Makeup Kits</Link>
								</p>
								<p>
									<Link to="">Makeup Combos</Link>
								</p>
							</div>
							<div style={{ background: "white" }}>
								<h3>
									<Link to="/products">Lips</Link>
								</h3>
								<p>
									<Link to="">Lipstick</Link>
								</p>
								<p>
									<Link to="">Liquid Lipstick</Link>
								</p>
								<p>
									<Link to="">Lip Crayon</Link>
								</p>
								<p>
									<Link to="">Lip Gloss</Link>
								</p>
								<p>
									<Link to="">Lip Liner</Link>
								</p>
								<p>
									<Link to="">Lip Plumper</Link>
								</p>
								<p>
									<Link to="">Lip Stain</Link>
								</p>
								<h3 style={{ marginTop: "2.5vh" }}>
									<Link to="">Nails</Link>
								</h3>
								<p>
									<Link to="">Nail Polish</Link>
								</p>
								<p>
									<Link to="">Nail Art Kits</Link>
								</p>
								<p>
									<Link to="">Nail Care</Link>
								</p>
								<p>
									<Link to="">Nail Polish Remover</Link>
								</p>
							</div>
							<div style={{ backgroundColor: "#f4f4f4" }}>
								<h3>
									<Link to="">Tools & Brushes</Link>
								</h3>
								<p>
									<Link to="">Face Brush</Link>
								</p>
								<p>
									<Link to="">Eye Brush</Link>
								</p>
								<p>
									<Link to="">Lip Brush</Link>
								</p>
								<p>
									<Link to="">Brush Sets</Link>
								</p>
								<p>
									<Link to="">Brush Cleaners</Link>
								</p>
								<p>
									<Link to="">Sponges & Applicators</Link>
								</p>
								<p>
									<Link to="">Eyelash Curlers</Link>
								</p>
								<p>
									<Link to="">Tweezers</Link>
								</p>
								<p>
									<Link to="">Sharpeners</Link>
								</p>
								<p>
									<Link to="">Mirrors</Link>
								</p>
								<p>
									<Link to="">Makeup Pouches</Link>
								</p>
								<h3 style={{ marginTop: "2.5vh" }}>
									<Link to="">Multi-Functional Makeup Palettes</Link>
								</h3>
							</div>
							<div style={{ background: "white" }}>
								<h3>
									<Link to="">Top Brands</Link>
								</h3>
								<p>
									<Link to="">Kay Beauty</Link>
								</p>
								<p>
									<Link to="">Huda Beauty</Link>
								</p>
								<p>
									<Link to="">Charlotte Tilbury</Link>
								</p>
								<p>
									<Link to="">M.A.C</Link>
								</p>
								<p>
									<Link to="">Maybelline New York</Link>
								</p>
								<p>
									<Link to="">L'Oreal Paris</Link>
								</p>
								<p>
									<Link to="">Lakme</Link>
								</p>
								<p>
									<Link to="">Nykaa Cosmetics</Link>
								</p>
								<p>
									<Link to="">Nyx Pro.Makeup</Link>
								</p>
							</div>
							<div style={{ backgroundColor: "#f4f4f4" }}>
								<h3>
									<Link to="">Quick Links</Link>
								</h3>
								<p>
									<Link to="">Combos @ Nykaa</Link>
								</p>
								<p>
									<Link to="">New Launches</Link>
								</p>
								<p>
									<Link to="">NFBA Nominees 2020</Link>
								</p>
								<p>
									<Link to="">Gifts @ Nykaa</Link>
								</p>
								<p>
									<Link to="">The Gift Store</Link>
								</p>
								<h3 style={{ marginTop: "2.5vh" }}>
									<Link to="">Trending Searches</Link>
								</h3>
								<p>
									<Link to="">Nude Lipstick</Link>
								</p>
								<p>
									<Link to="">Matte Lipstick</Link>
								</p>
								<p>
									<Link to="">Red Lipstick</Link>
								</p>
								<p>
									<Link to="">Pink Lipstick</Link>
								</p>
							</div>
						</div>
					</div>
					<p>
						<Link to="">Skin</Link>
					</p>
					<p>
						<Link to="">Hair</Link>
					</p>
					<p>
						<Link to="">Bath & Body</Link>
					</p>
					<p>
						<Link to="">Nature</Link>
					</p>
					<p>
						<Link to="">Mom & Baby</Link>
					</p>
					<p>
						<Link to="">Health & Wellness</Link>
					</p>
					<p>
						<Link to="">Men</Link>
					</p>
					<p>
						<Link to="">Fragrance</Link>
					</p>
					<p>
						<Link to="">Pop Ups</Link>
					</p>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default Navbar;
