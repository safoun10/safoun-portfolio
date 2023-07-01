import { createBrowserRouter } from "react-router-dom";
import Body from "../pages/body/Body";
import Home from "../components/home/Home";

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