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
		axios.get("https://real-gold-earthworm-tam.cyclic.app/getuser").then((res) => {
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
							<Link to="/products">Categories</Link>
						</p>
						<p>
							<Link to="/products">Brands</Link>
						</p>
						<p>
							<Link to="/products">Luxe</Link>
						</p>
						<p>
							<Link to="/products">Nykaa Fashion</Link>
						</p>
						<p>
							<Link to="/products">Beauty Advice</Link>
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
									<Link to="/products">Face</Link>
								</h3>
								<p>
									<Link to="/products">Face Primer</Link>
								</p>
								<p>
									<Link to="/products">Concealer</Link>
								</p>
								<p>
									<Link to="/products">Foundation</Link>
								</p>
								<p>
									<Link to="/products">Compact</Link>
								</p>
								<p>
									<Link to="/products">Contour</Link>
								</p>
								<p>
									<Link to="/products">Loose Powder</Link>
								</p>
								<p>
									<Link to="/products">Tinted Moisturizer</Link>
								</p>
								<p>
									<Link to="/products">Blush</Link>
								</p>
								<p>
									<Link to="/products">Bronzer</Link>
								</p>
								<p>
									<Link to="/products">BB & CC Cream</Link>
								</p>
								<p>
									<Link to="/products">Highlighters</Link>
								</p>
								<p>
									<Link to="/products">Setting Spray</Link>
								</p>
								<p>
									<Link to="/products">Makeup Remover</Link>
								</p>
								<p>
									<Link to="/products">Sindoor</Link>
								</p>
							</div>
							<div style={{ backgroundColor: "#f4f4f4" }}>
								<h3>
									<Link to="/products">Eyes</Link>
								</h3>
								<p>
									<Link to="/products">Kajal</Link>
								</p>
								<p>
									<Link to="/products">Eyeliner</Link>
								</p>
								<p>
									<Link to="/products">Mascara</Link>
								</p>
								<p>
									<Link to="/products">Eye Shadow</Link>
								</p>
								<p>
									<Link to="/products">Eye Brow Enhancers</Link>
								</p>
								<p>
									<Link to="/products">Eye Primer</Link>
								</p>
								<p>
									<Link to="/products">False Eyelashes</Link>
								</p>
								<p>
									<Link to="/products">Eye Makeup Remover</Link>
								</p>
								<p>
									<Link to="/products">Under Eye Concealer</Link>
								</p>
								<p>
									<Link to="/products">Contact Lenses</Link>
								</p>
								<h3 style={{ marginTop: "2.5vh" }}>
									<Link to="/products">Makeup Kits & Combos</Link>
								</h3>
								<p>
									<Link to="/products">Makeup Kits</Link>
								</p>
								<p>
									<Link to="/products">Makeup Combos</Link>
								</p>
							</div>
							<div style={{ background: "white" }}>
								<h3>
									<Link to="/products">Lips</Link>
								</h3>
								<p>
									<Link to="/products">Lipstick</Link>
								</p>
								<p>
									<Link to="/products">Liquid Lipstick</Link>
								</p>
								<p>
									<Link to="/products">Lip Crayon</Link>
								</p>
								<p>
									<Link to="/products">Lip Gloss</Link>
								</p>
								<p>
									<Link to="/products">Lip Liner</Link>
								</p>
								<p>
									<Link to="/products">Lip Plumper</Link>
								</p>
								<p>
									<Link to="/products">Lip Stain</Link>
								</p>
								<h3 style={{ marginTop: "2.5vh" }}>
									<Link to="/products">Nails</Link>
								</h3>
								<p>
									<Link to="/products">Nail Polish</Link>
								</p>
								<p>
									<Link to="/products">Nail Art Kits</Link>
								</p>
								<p>
									<Link to="/products">Nail Care</Link>
								</p>
								<p>
									<Link to="/products">Nail Polish Remover</Link>
								</p>
							</div>
							<div style={{ backgroundColor: "#f4f4f4" }}>
								<h3>
									<Link to="/products">Tools & Brushes</Link>
								</h3>
								<p>
									<Link to="/products">Face Brush</Link>
								</p>
								<p>
									<Link to="/products">Eye Brush</Link>
								</p>
								<p>
									<Link to="/products">Lip Brush</Link>
								</p>
								<p>
									<Link to="/products">Brush Sets</Link>
								</p>
								<p>
									<Link to="/products">Brush Cleaners</Link>
								</p>
								<p>
									<Link to="/products">Sponges & Applicators</Link>
								</p>
								<p>
									<Link to="/products">Eyelash Curlers</Link>
								</p>
								<p>
									<Link to="/products">Tweezers</Link>
								</p>
								<p>
									<Link to="/products">Sharpeners</Link>
								</p>
								<p>
									<Link to="/products">Mirrors</Link>
								</p>
								<p>
									<Link to="/products">Makeup Pouches</Link>
								</p>
								<h3 style={{ marginTop: "2.5vh" }}>
									<Link to="/products">Multi-Functional Makeup Palettes</Link>
								</h3>
							</div>
							<div style={{ background: "white" }}>
								<h3>
									<Link to="/products">Top Brands</Link>
								</h3>
								<p>
									<Link to="/products">Kay Beauty</Link>
								</p>
								<p>
									<Link to="/products">Huda Beauty</Link>
								</p>
								<p>
									<Link to="/products">Charlotte Tilbury</Link>
								</p>
								<p>
									<Link to="/products">M.A.C</Link>
								</p>
								<p>
									<Link to="/products">Maybelline New York</Link>
								</p>
								<p>
									<Link to="/products">L'Oreal Paris</Link>
								</p>
								<p>
									<Link to="/products">Lakme</Link>
								</p>
								<p>
									<Link to="/products">Nykaa Cosmetics</Link>
								</p>
								<p>
									<Link to="/products">Nyx Pro.Makeup</Link>
								</p>
							</div>
							<div style={{ backgroundColor: "#f4f4f4" }}>
								<h3>
									<Link to="/products">Quick Links</Link>
								</h3>
								<p>
									<Link to="/products">Combos @ Nykaa</Link>
								</p>
								<p>
									<Link to="/products">New Launches</Link>
								</p>
								<p>
									<Link to="/products">NFBA Nominees 2020</Link>
								</p>
								<p>
									<Link to="/products">Gifts @ Nykaa</Link>
								</p>
								<p>
									<Link to="/products">The Gift Store</Link>
								</p>
								<h3 style={{ marginTop: "2.5vh" }}>
									<Link to="/products">Trending Searches</Link>
								</h3>
								<p>
									<Link to="/products">Nude Lipstick</Link>
								</p>
								<p>
									<Link to="/products">Matte Lipstick</Link>
								</p>
								<p>
									<Link to="/products">Red Lipstick</Link>
								</p>
								<p>
									<Link to="/products">Pink Lipstick</Link>
								</p>
							</div>
						</div>
					</div>
					<p>
						<Link to="/products">Skin</Link>
					</p>
					<p>
						<Link to="/products">Hair</Link>
					</p>
					<p>
						<Link to="/products">Bath & Body</Link>
					</p>
					<p>
						<Link to="/products">Nature</Link>
					</p>
					<p>
						<Link to="/products">Mom & Baby</Link>
					</p>
					<p>
						<Link to="/products">Health & Wellness</Link>
					</p>
					<p>
						<Link to="/products">Men</Link>
					</p>
					<p>
						<Link to="/products">Fragrance</Link>
					</p>
					<p>
						<Link to="/products">Pop Ups</Link>
					</p>
				</div>
			</div>
			<hr />
		</div>
	);
};

export default Navbar;
