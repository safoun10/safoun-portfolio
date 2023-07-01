import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Body = () => {
	return (
		<div>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Body;
