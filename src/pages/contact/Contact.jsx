import { useRef } from "react";
import emailjs from "emailjs-com";
import TopNav from "../../components/topNav/TopNav";
import "./Contact.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsLinkedin, BsPhone } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		const $form = e.target;
		let name = $form.from_name.value;
		let email = $form.user_email.value;
		let message = $form.message.value;

		console.log(name, email, message);

		if (name !== "" || email !== "" || message !== "") {
			emailjs
				.sendForm(
					"service_5ngx1w9",
					"template_uk28ye3",
					form.current,
					"gg9Rc1I9kyo6abP5F"
				)
				.then(
					() => {
						name = "";
						email = "";
						message = "";
					},
					(error) => {
						console.log(error.text);
					}
				);
		} else {
			console.log("gotcha");
		}
	};

	return (
		<div>
			<TopNav></TopNav>
			<div
				className="mx-auto my-5 py-3 text-two"
				style={{ maxWidth: "1200px" }}
			>
				<div className="row mt-2 mb-4 w-100 mx-auto">
					<div className="col-11 mx-auto col-lg-6 mt-lg-2 mt-5 bg-dark p-4 p-sm-5 rounded-5 d-flex flex-column gap-3 justify-content-center align-items-center">
						<div className="text-white text-center display-6 pb-4">
							Contact me via
						</div>

						<Link
							to={"https://www.linkedin.com/in/safoun10/"}
							target="_blank"
							className="text-decoration-none text-dark w-100"
						>
							<div className="social-card d-flex align-items-center justify-content-center">
								<BsLinkedin className="fs-2 mx-3 "></BsLinkedin>{" "}
								<span className="fs-4">LinkedIn</span>
							</div>
						</Link>

						<Link
							to={"tel: 01320717733"}
							target="_blank"
							className="text-decoration-none text-dark w-100"
						>
							<div className="social-card d-flex align-items-center justify-content-center">
								<BsPhone className="fs-2 mx-2 "></BsPhone>{" "}
								<span className="fs-4">Phone Number</span>
							</div>
						</Link>

						<Link
							to={"mailto: safoun.official@gmail.com"}
							target="_blank"
							className="text-decoration-none text-dark w-100"
						>
							<div className="social-card d-flex align-items-center justify-content-center">
								<BiLogoGmail className="fs-3 mx-2 "></BiLogoGmail>{" "}
								<span className="fs-4">Email</span>
							</div>
						</Link>

						<Link
							to={"https://www.facebook.com/safoun.10"}
							target="_blank"
							className="text-decoration-none text-dark w-100"
						>
							<div className="social-card d-flex align-items-center justify-content-center">
								<BsFacebook className="fs-3 mx-2 "></BsFacebook>{" "}
								<span className="fs-4">Facebook</span>
							</div>
						</Link>
					</div>
					<div className="col-11 mx-auto col-lg-6 mt-lg-2 mt-5 ps-4">
						<div className="pb-4 display-6">
							You Can Send Me an Email !!
						</div>
						<form ref={form} onSubmit={sendEmail}>
							<div>
								<label className="fs-5 ps-2">Your Name</label>
								<input
									className="inputs fs-5"
									type="text"
									name="from_name"
									required
								/>
							</div>
							<div>
								<label className="fs-5 ps-2">Your Email</label>
								<input
									className="inputs fs-5"
									type="email"
									name="user_email"
									required
								/>
							</div>
							<div>
								<label className="fs-5 ps-2">
									Your Message
								</label>
								<textarea
									className="text-area fs-5"
									name="message"
									required
								/>
							</div>
							<div className="pt-2">
								<input
									className="w-100 bg-dark send-btn fs-5 btn"
									type="submit"
									value="Send"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
