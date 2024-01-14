import "./Skill.css";
import {
	FaBootstrap,
	FaChrome,
	FaCode,
	FaCss3Alt,
	FaFigma,
	FaHtml5,
	FaNodeJs,
	FaPuzzlePiece,
	FaReact,
} from "react-icons/fa6";
import {
	SiExpress,
	SiFirebase,
	SiMongodb,
	SiTailwindcss,
	SiVercel,
} from "react-icons/si";
import { BsBug, BsGit, BsGithub, BsPhone } from "react-icons/bs";
import { BiLogoNetlify } from "react-icons/bi";

import { Tilt } from "react-tilt";

const defaultOptions = {
	reverse: false, // reverse the tilt direction
	max: 30, // max tilt rotation (degrees)
	perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1, // 2 = 200%, 1.5 = 150%, etc..
	speed: 10000, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: "cubic-bezier(1, 1, 1, 1)", // Easing on enter/exit.
};

const Skills = () => {
	return (
		<div className="mx-auto mt-5 text-two" style={{ maxWidth: "1200px" }}>
			<div className="display-2 ps-4">My Skills</div>
			<div className="my-4 row px-2 w-100 mx-auto">
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<FaHtml5 className="display-1"></FaHtml5>
							</div>
							<div className="text-three pt-2 fs-2">HTML</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<FaCss3Alt className="display-1"></FaCss3Alt>
							</div>
							<div className="text-three pt-2 fs-2">CSS</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<FaBootstrap className="display-1"></FaBootstrap>
							</div>
							<div className="text-three pt-2 fs-2">
								BootStrap
							</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<img
									src="https://i.postimg.cc/Hk8nLhNV/logo.png"
									alt="react bootstrap"
									className="img-bs"
								/>
							</div>
							<div className="text-three pt-2 fs-2">
								ReactBootStrap
							</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<SiTailwindcss className="display-1"></SiTailwindcss>
							</div>
							<div className="text-three pt-2 fs-2">Tailwind</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<FaReact className="display-1"></FaReact>
							</div>
							<div className="text-three pt-2 fs-2">React JS</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<BsPhone className="display-1"></BsPhone>
							</div>
							<div className="text-three pt-2 fs-2">
								Responsiveness
							</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<FaCode className="display-1"></FaCode>
							</div>
							<div className="text-three pt-2 fs-2">JSX</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<SiFirebase className="display-1"></SiFirebase>
							</div>
							<div className="text-three pt-2 fs-2">Firebase</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<BsBug className="display-1"></BsBug>
							</div>
							<div className="text-three pt-2 fs-2">
								Debugging
							</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<FaPuzzlePiece className="display-1"></FaPuzzlePiece>
							</div>
							<div className="text-three pt-2 fs-2">Rest API</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<BsGit className="display-1"></BsGit>
							</div>
							<div className="text-three pt-2 fs-2">Git</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<BsGithub className="display-1"></BsGithub>
							</div>
							<div className="text-three pt-2 fs-2">GitHub</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<FaFigma className="display-1"></FaFigma>
							</div>
							<div className="text-three pt-2 fs-2">Figma</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<SiVercel className="display-1"></SiVercel>
							</div>
							<div className="text-three pt-2 fs-2">Vercel</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<BiLogoNetlify className="display-1"></BiLogoNetlify>
							</div>
							<div className="text-three pt-2 fs-2">Netlify</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<FaChrome className="display-1"></FaChrome>
							</div>
							<div className="text-three pt-2 fs-2">Dev Tool</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<SiMongodb className="display-1"></SiMongodb>
							</div>
							<div className="text-three pt-2 fs-2">MongoDB</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<FaNodeJs className="display-1"></FaNodeJs>
							</div>
							<div className="text-three pt-2 fs-2">Node JS</div>
						</div>
					</Tilt>
				</div>
				<div className="col-lg-3 col-md-6 col-11 mx-auto skill-card">
					<Tilt
						options={defaultOptions}
						className="w-100"
						style={{ height: "auto", width: "auto" }}
					>
						<div className="skill">
							<div>
								<SiExpress className="display-1"></SiExpress>
							</div>
							<div className="text-three pt-2 fs-2">
								Express JS
							</div>
						</div>
					</Tilt>
				</div>
			</div>
		</div>
	);
};

export default Skills;
