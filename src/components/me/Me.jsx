// import { Tilt } from "react-tilt";
import "./Me.css";
import CountUp from "react-countup";

const Me = () => {
	// const defaultOptions = {
	// 	reverse: false, // reverse the tilt direction
	// 	max: 20, // max tilt rotation (degrees)
	// 	perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
	// 	scale: 1, // 2 = 200%, 1.5 = 150%, etc..
	// 	speed: 1000, // Speed of the enter/exit transition
	// 	transition: true, // Set a transition on enter/exit.
	// 	axis: null, // What axis should be disabled. Can be X or Y.
	// 	reset: true, // If the tilt effect has to be reset on exit.
	// 	easing: "ease-in-out 1s", // Easing on enter/exit.
	// };

	return (
		<div className="me-top px-1 mx-auto text-two mt-3" style={{ maxWidth: "1200px" }}>
			<div className="display-1 ps-md-2 ps-5">Why Me?</div>
			<div className="row py-5 w-100 mx-auto">
				<div className="col-11 mx-auto col-md-6 display-6 p-2 d-flex flex-column align-items-center">
					<div className="border-time">
						<div>
							<CountUp
								start={0}
								duration={5}
								end={30}
								enableScrollSpy="true"
							/>
							+
						</div>
						<div>Projects</div>
					</div>
				</div>
				<div className="col-11 mx-auto col-md-6 display-6 p-2 d-flex flex-column align-items-center">
					<div className="border-time">
						<div>
							<CountUp
								start={0}
								duration={5}
								end={12}
								delay={0}
								enableScrollSpy="true"
							/>
						</div>
						<div>Assignments</div>
					</div>
				</div>
				<div className="col-11 mx-auto col-md-6 display-6 p-2 d-flex flex-column align-items-center">
					<div className="border-time">
						<div>
							<CountUp
								start={0}
								duration={5}
								end={785}
								delay={0}
								enableScrollSpy="true"
							/>+
						</div>
						<div>Github Commits</div>
					</div>
				</div>
				<div className="col-11 mx-auto col-md-6 display-6 p-2 d-flex flex-column align-items-center">
					<div className="border-time">
						<div>
							<CountUp
								start={0}
								duration={5}
								end={40}
								delay={0}
								enableScrollSpy="true"
							/>+
						</div>
						<div>Repositories</div>
					</div>
				</div>
				<div className="col-11 mx-auto col-md-12 display-6 py-2 d-flex flex-column align-items-center">
					<div className="border-time py-md-4 py-4 px-3">
						<div>
							All within{" "}
							<CountUp
								start={0}
								duration={5}
								end={6}
								delay={0}
								enableScrollSpy="true"
							/>{" "}
							months
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Me;
