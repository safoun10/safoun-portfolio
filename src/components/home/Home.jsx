import Done from "../done/Done";
import "./Home.css";

const Home = () => {
	return (
		<div className="body">
			<div className="block-1"></div>
			<div className="block-2"></div>
			<div className="block-3"></div>
			<div>
				<div
					className="mx-auto align-items-center text-one name-box"
					style={{ maxWidth: "1200px" }}
				>
					<div className="display-1">
						MD Sultan Mahmud Safoun
					</div>
					<div className="fs-4 ">Frontend Developer</div>
				</div>
			</div>
			<div className="mx-auto pt-5" style={{ maxWidth: "1200px" }}>
				<Done></Done>
			</div>
		</div>
	);
};

export default Home;
