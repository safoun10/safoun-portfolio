import { Link, useLocation } from "react-router-dom";
import "./TopNav.css";

const TopNav = () => {
	const location = useLocation();
	const pathName = location.pathname;

	const handleDownload = () => {
		const serverURL = "https://safoun-portfolio-server.vercel.app/download";
		window.open(serverURL);
	};
	return (
		<div>
			<div className="social d-flex flex-column">
				<Link
					className="text-decoration-none"
					to={"https://github.com/safoun10"}
					target="_blank"
				>
					<div>
						<img
							src="https://i.postimg.cc/pLdFJ3pr/animation-640-ljl0cqgt.gif"
							alt="github"
							className="img-fluid img-social"
						/>
					</div>
				</Link>
				<Link
					className="text-decoration-none"
					to={"https://www.linkedin.com/in/safoun10/"}
					target="_blank"
				>
					<div>
						<img
							src="https://i.postimg.cc/5Ngzvf9D/animation-640-ljl0crtq.gif"
							alt="github"
							className="img-fluid img-social"
						/>
					</div>
				</Link>
				<Link
					className="text-decoration-none"
					to={"https://web.facebook.com/safoun.10"}
					target="_blank"
				>
					<div>
						<img
							src="https://i.postimg.cc/85vWrWsb/animation-640-ljl0a7qz.gif"
							alt="github"
							className="img-fluid img-social"
						/>
					</div>
				</Link>
			</div>
			<div className="mx-auto" style={{ maxWidth: "1200px" }}>
				<div className="d-flex gap-4 justify-content-end pt-4 navbar align-items-center">
					<Link
						to={"/"}
						className={
							pathName == "/"
								? "text-decoration-none text-dark text-two fs-5 links active-link"
								: "text-decoration-none text-dark text-two fs-5 links"
						}
					>
						<div>Home</div>
					</Link>
					<Link
						to={"/projects"}
						className={
							pathName == "/projects"
								? "text-decoration-none text-dark text-two fs-5 links active-link"
								: "text-decoration-none text-dark text-two fs-5 links"
						}
					>
						<div>Projects</div>
					</Link>
					<Link
						to={"/contact"}
						className={
							pathName == "/contact"
								? "text-decoration-none text-dark text-two fs-5 links active-link"
								: "text-decoration-none text-dark text-two fs-5 links"
						}
					>
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
		</div>
	);
};

export default TopNav;
