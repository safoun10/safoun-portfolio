import { Link } from "react-router-dom";
import TopNav from "../../components/topNav/TopNav";
import "./ProjectsPage.css";

const ProjectsPage = () => {
	return (
		<div className="text-two">
			<TopNav></TopNav>
			<div
				className="text-two mx-auto mt-5 py-5"
				style={{ maxWidth: "1200px" }}
			>
				<div className="display-1 ps-4 pb-5">My Projects</div>

				<div className="row border-project align-items-center mx-auto mb-5">
					<div className="col-xl-9 col-11 mx-auto project-img"></div>
					<div className="col-xl-3 col-11 mx-auto row justify-content-around d-xl-block pt-4 px-2">
						<div>
							<Link
								to={"https://foodie-fiesta-449d3.web.app/home"}
								className="text-decoration-none text-dark"
							>
								<div className="display-4 pb-4 project-name text-center">
									Foodie Fiesta
								</div>
							</Link>
						</div>
						<div className="d-flex flex-column gap-md-4 gap-2">
							<Link
								to={"https://foodie-fiesta-449d3.web.app/home"}
								className="text-decoration-none text-dark btn border"
							>
								<div className="fs-2 links">Live</div>
							</Link>
							<Link
								to={
									"https://github.com/safoun10/Foodie-Fiesta-Client"
								}
								className="text-decoration-none text-dark btn border"
							>
								<div className="fs-2 links">Client</div>
							</Link>
							<Link
								to={
									"https://github.com/safoun10/Foodie-Fiesta-Server"
								}
								className="text-decoration-none text-dark btn border"
							>
								<div className="fs-2 links">Server</div>
							</Link>
						</div>
					</div>
				</div>

				<div className="row border-project align-items-center mx-auto mb-5">
					<div className="col-xl-9 col-11 mx-auto project-img-2"></div>
					<div className="col-xl-3 col-11 mx-auto row justify-content-around d-xl-block pt-4 px-2">
						<div>
							<Link
								to={"https://euphoria-safoun.web.app"}
								className="text-decoration-none text-dark"
							>
								<div className="display-4 pb-4 project-name text-center">
									Euphoria
								</div>
							</Link>
						</div>
						<div className="d-flex flex-column gap-md-4 gap-2">
							<Link
								to={"https://euphoria-safoun.web.app"}
								className="text-decoration-none text-dark btn border"
							>
								<div className="fs-2 links">Live</div>
							</Link>
							<Link
								to={
									"https://github.com/safoun10/Euphoria-Client"
								}
								className="text-decoration-none text-dark btn border"
							>
								<div className="fs-2 links">Client</div>
							</Link>
							<Link
								to={
									"https://github.com/safoun10/Euphoria-Server"
								}
								className="text-decoration-none text-dark btn border"
							>
								<div className="fs-2 links">Server</div>
							</Link>
						</div>
					</div>
				</div>

				<div className="row border-project align-items-center mx-auto mb-5">
					<div className="col-xl-9 col-11 mx-auto project-img-3"></div>
					<div className="col-xl-3 col-11 mx-auto row justify-content-around d-xl-block pt-4 px-2">
						<div>
							<Link
								to={"https://toytopia-safoun.web.app/home"}
								className="text-decoration-none text-dark"
							>
								<div className="display-4 pb-4 project-name text-center">
									Toytopia
								</div>
							</Link>
						</div>
						<div className="d-flex flex-column gap-md-4 gap-2">
							<Link
								to={"https://toytopia-safoun.web.app/home"}
								className="text-decoration-none text-dark btn border"
							>
								<div className="fs-2 links">Live</div>
							</Link>
							<Link
								to={
									"https://github.com/safoun10/Toytopia-Client"
								}
								className="text-decoration-none text-dark btn border"
							>
								<div className="fs-2 links">Client</div>
							</Link>
							<Link
								to={
									"https://github.com/safoun10/Toytopia-Server"
								}
								className="text-decoration-none text-dark btn border"
							>
								<div className="fs-2 links">Server</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsPage;
