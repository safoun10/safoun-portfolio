import { Outlet } from "react-router-dom";
import TopNav from "../../components/topnav/TopNav";


const Body = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Body;