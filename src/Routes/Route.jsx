import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";
import Body from "../pages/body/Body";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Body></Body>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
		],
	},
]);

export default router;