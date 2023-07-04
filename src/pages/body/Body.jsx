import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import BottomNav from "../../components/bottomNav/BottomNav";

const Body = () => {
	return (
		<div>
			<BottomNav></BottomNav>
			<Outlet></Outlet>
			<Footer></Footer>
		</div>
	);
};

export default Body;
