import React, { useEffect } from "react";
import "./Banner.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";

const Banner = () => {
	useEffect(() => {
		Aos.init({
			offset: 200,
			duration: 1000,
			easing: "ease-in",
			delay: 400,
		});
	}, []);

	const handleDownload = () => {
		const serverURL = "https://safoun-portfolio-server.vercel.app/download";
		window.open(serverURL);
	};

	return (
		<div className="mx-auto" style={{ maxWidth: "1200px" }}>
			<div>
				<div className="d-flex gap-4 justify-content-end pt-4 navbar align-items-center">
					<Link className="text-decoration-none text-dark text-two fs-5 links">
						<div>Home</div>
					</Link>
					<Link className="text-decoration-none text-dark text-two fs-5 links">
						<div>Projects</div>
					</Link>
					<Link className="text-decoration-none text-dark text-two fs-5 links">
						<div>Contact</div>
					</Link>
					<div>
						<div
							onClick={handleDownload}
							className="btn pe-4 ms-5 text-two text-center resume"
						>
							<img
								src="https://i.postimg.cc/FFBz5FV5/output-onlinegiftools.gif"
								className="img-fluid w-25"
							/>
							Resume
						</div>
					</div>
				</div>
			</div>
			<div className="banner d-flex flex-column justify-content-center text-two">
				<div data-aos="fade-up">
					<div className="display-4">Hello there , I'm</div>

					<div className="display-1 pt-5">
						MD Sultan Mahmud Safoun
					</div>

					<div className="display-4">
						I'm a{" "}
						<TypeAnimation
							sequence={[
								"Frontend Developer",
								2000,
								"MERN stack Developer",
								1000,
								"Student",
								1000,
							]}
							wrapper="span"
							speed={30}
							repeat={Infinity}
						/>
					</div>
				</div>
			</div>
			<div className="d-flex flex-column align-items-end text-center">
				<img
					src="https://i.postimg.cc/nh2VcHf1/126398-mouse-scroll.gif"
					className="img-fluid img-mouse"
				/>
				<div className="text-two">Scroll Down</div>
			</div>
		</div>
	);
};

export default Banner;
