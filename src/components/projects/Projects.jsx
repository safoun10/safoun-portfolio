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
					<div className="text-three display-6 ps-3 pt-3">
						Foodie Fiesta
					</div>
				</div>
				<div className="pt-5 col-6">
					<div className="project-img-2"></div>
					<div className="text-three display-6 ps-3 pt-3">
						Euphoria
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
