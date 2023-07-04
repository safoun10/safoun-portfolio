import { Link } from "react-router-dom";
import "./BottomNav.css";
import { HiHome } from "react-icons/hi";
import { BsCodeSlash, BsDownload } from "react-icons/bs";
import { RiContactsBook2Fill } from "react-icons/ri";

const BottomNav = () => {

    const handleDownload = () => {
		const serverURL = "https://safoun-portfolio-server.vercel.app/download";
		window.open(serverURL);
	};

	return (
		<div className="d-block d-sm-none">
			<div className="b-nav row align-items-center px-5 py-2 padding mx-auto">
				<Link
					to={"/"}
					className="col-3 d-flex justify-content-center align-items-center text-decoration-none text-white"
				>
					<div className=" btn-b-nav">
						<HiHome className="fs-2"></HiHome>
					</div>
				</Link>
				<Link
					to={"/projects"}
					className="col-3 d-flex justify-content-center align-items-center text-decoration-none text-white"
				>
					<div className=" btn-b-nav">
						<BsCodeSlash className="fs-2"></BsCodeSlash>
					</div>
				</Link>
				<Link
					to={"/contact"}
					className="col-3 d-flex justify-content-center align-items-center text-decoration-none text-white"
				>
					<div className=" btn-b-nav">
						<RiContactsBook2Fill className="fs-2"></RiContactsBook2Fill>
					</div>
				</Link>
				<Link
					onClick={handleDownload}
					className="col-3 d-flex justify-content-center align-items-center text-decoration-none text-white"
				>
					<div className=" btn-b-nav">
						<BsDownload className="fs-2"></BsDownload>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default BottomNav;
