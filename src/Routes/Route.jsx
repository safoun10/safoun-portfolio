import { createBrowserRouter } from "react-router-dom";
import Body from "../pages/body/Body";
import Home from "../components/home/Home";
// import Projects from "../pages/projects/Projects";
import Contact from "../pages/contact/Contact";
import ProjectsPage from "../pages/projectsPage/ProjectsPage";

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
	{
		path: "projects",
		element: <ProjectsPage></ProjectsPage>,
	},
	{
		path: "contact",
		element: <Contact></Contact>,
	},
]);

export default router;