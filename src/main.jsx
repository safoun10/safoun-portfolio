import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Route";

import AnimatedCursor from "react-animated-cursor";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AnimatedCursor
			innerSize={12}
			outerSize={8}
			color="0, 0, 0"
			outerAlpha={0.3}
			innerScale={0.7}
			outerScale={7}
			hasBlendMode={true}
			trailingSpeed={10}
			clickables={[
				"a",
				"label[for]",
				"select",
				"button",
				".link",
			]}
		/>
		<RouterProvider router={router} />
	</React.StrictMode>
);
