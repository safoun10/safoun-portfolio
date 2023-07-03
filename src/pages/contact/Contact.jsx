import { useRef } from "react";
import emailjs from "emailjs-com";
import TopNav from "../../components/topNav/TopNav";
import "./Contact.css";

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
				className="mx-auto mt-5 pt-3 text-two"
				style={{ maxWidth: "1200px" }}
			>
				<div className="row mt-2">
					<div className="col-6 bg-dark p-5 rounded-5 d-flex flex-column gap">
						<div className="social-card">
							linkedIn
						</div>
						<div className="social-card">
							linkedIn
						</div>
						<div className="social-card">
							linkedIn
						</div>
						<div className="social-card">
							linkedIn
						</div>
						<div className="social-card">
							linkedIn
						</div>
					</div>
					<div className="col-6">
						<div className="pb-4 display-6">
							You Can Send Me an Email
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
