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
			// color="#fff"
			innerSize={12}
			outerSize={10}
			color="0, 0, 0"
			outerAlpha={0.3}
			innerScale={0.7}
			outerScale={7}
			hasBlendMode={true}
			trailingSpeed={10}
			clickables={[
				"a",
				'input[type="text"]',
				'input[type="email"]',
				'input[type="number"]',
				'input[type="submit"]',
				'input[type="image"]',
				'input[type="password"]',
				"label[for]",
				"select",
				"textarea",
				"button",
				".link",
			]}
		/>
		<RouterProvider router={router} />
	</React.StrictMode>
);
