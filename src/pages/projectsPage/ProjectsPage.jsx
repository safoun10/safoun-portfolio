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
				<div className="display-1 ps-4">My Projects</div>
				<div className="row">
					<div className="pt-5 col-11 mx-auto">
						<div className="project-img"></div>
						<div className="d-flex justify-content-between">
							<Link
								to={"https://foodie-fiesta-449d3.web.app/home"}
								className="text-decoration-none text-dark"
							>
								<div className="text-three display-6 ps-3 pt-3">
									Foodie Fiesta
								</div>
							</Link>
							<Link
								to={"https://foodie-fiesta-449d3.web.app/home"}
								className="text-decoration-none text-dark"
							>
								<div className="fs-2 ps-3 pt-3">Live Site</div>
							</Link>
							<Link
								to={"https://foodie-fiesta-449d3.web.app/home"}
								className="text-decoration-none text-dark"
							>
								<div className="fs-2 ps-3 pt-3">
									Client
								</div>
							</Link>
							<Link
								to={"https://foodie-fiesta-449d3.web.app/home"}
								className="text-decoration-none text-dark"
							>
								<div className="display-6 ps-3 pt-3">
									Server
								</div>
							</Link>
						</div>
					</div>
					<div className="pt-5 col-11 mx-auto">
						<div className="project-img-2"></div>
						<Link
							to={"https://euphoria-safoun.web.app/"}
							className="text-decoration-none text-dark"
						>
							<div className="display-6 ps-3 pt-3">Euphoria</div>
						</Link>
					</div>
					<div className="pt-5 col-11 mx-auto">
						<div className="project-img-3"></div>
						<Link
							to={"https://euphoria-safoun.web.app/"}
							className="text-decoration-none text-dark"
						>
							<div className="display-6 ps-3 pt-3">Euphoria</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsPage;
