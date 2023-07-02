import React from "react";
import "./Me.css";

const Me = () => {
	return (
		<div className="me-top mx-auto text-two" style={{ maxWidth: "1200px" }}>
			<div className="display-1">Why Me?</div>
			<div className="display-5 quote">
				Passion whispers, dedication shouts, and discipline ......{" "}
				<br />
				<div className="d-flex justify-content-between">
					<span className="ps-4">crafts a symphony of triumph</span>
					<span className=" display-6 text-one">_Safoun</span>
				</div>
			</div>
		</div>
	);
};

export default Me;
