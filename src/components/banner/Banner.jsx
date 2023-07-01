import React, { useEffect } from "react";
import "./Banner.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
	useEffect(() => {
		Aos.init({
			offset: 200,
			duration: 1000,
			easing: "ease-in",
			delay: 400,
		});
	}, []);

	return (
		<div className="mx-auto" style={{ maxWidth: "1200px" }}>
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
