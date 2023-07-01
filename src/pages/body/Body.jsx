import { Outlet } from "react-router-dom";
// import TopNav from "../../components/topnav/TopNav";
import Footer from "../../components/footer/Footer";


const Body = () => {
    return (
        <div>
            {/* <TopNav></TopNav> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Body;