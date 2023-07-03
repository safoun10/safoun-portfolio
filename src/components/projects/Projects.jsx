import { Link } from "react-router-dom";
import "./Project.css";

const Projects = () => {
	return (
		<div
			className="text-two mx-auto mt-5 py-5"
			style={{ maxWidth: "1200px" }}
		>
			<div className="display-1 ps-4">My Projects</div>
			<div className="row">
				<div className="pt-5 col-6">
					<div className="project-img"></div>
					<Link
						to={"https://foodie-fiesta-449d3.web.app/home"}
						className="text-decoration-none text-dark"
					>
						<div className="text-three display-6 ps-3 pt-3">
							Foodie Fiesta
						</div>
					</Link>
				</div>
				<div className="pt-5 col-6">
					<div className="project-img-2"></div>
					<Link
						to={"https://euphoria-safoun.web.app/"}
						className="text-decoration-none text-dark"
					>
						<div className="text-three display-6 ps-3 pt-3">
							Euphoria
						</div>
					</Link>
				</div>
			</div>
			<div className="d-flex justify-content-end">
				<Link to={"/projects"}>
					<div className="btn bg-dark text-white px-5 rounded-3 me-5 py-2 fs-5">
						More Projects
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Projects;
