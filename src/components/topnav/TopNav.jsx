import "./TopNav.css";

const TopNav = () => {
	return (
		<div className="px-5 py-4 nav-bg">
			<div className="px-5 py-2 d-flex justify-content-between">
				<div className="fs-2 fw-light">Safoun</div>
				<div className="d-flex gap-5">
					<div>About Me</div>
					<div>My Projects</div>
					<div>Hire Me</div>
				</div>
			</div>
		</div>
	);
};

export default TopNav;
