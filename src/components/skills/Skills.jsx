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
import { SiExpress, SiFirebase, SiMongodb, SiOpenai, SiTailwindcss, SiVercel } from "react-icons/si";
import { BsBug, BsGit, BsGithub, BsPhone, BsShieldShaded } from "react-icons/bs";
import { BiLogoNetlify } from "react-icons/bi";
import { RiBardFill } from "react-icons/ri";
import { RxTimer } from "react-icons/rx";

const Skills = () => {
	return (
		<div className="mx-auto mt-5 text-two" style={{ maxWidth: "1200px" }}>
			<div className="display-2">My Skills</div>
			<div className="my-4 row">
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<FaHtml5 className="display-1"></FaHtml5>
						</div>
						<div className="text-three pt-2 fs-2">HTML</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<FaCss3Alt className="display-1"></FaCss3Alt>
						</div>
						<div className="text-three pt-2 fs-2">CSS</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<FaBootstrap className="display-1"></FaBootstrap>
						</div>
						<div className="text-three pt-2 fs-2">BootStrap</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<img
								src="https://i.postimg.cc/Hk8nLhNV/logo.png"
								alt="react bootstrap"
								className="img-bs"
							/>
						</div>
						<div className="text-three pt-2 fs-2">
							React BootStrap
						</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<SiTailwindcss className="display-1"></SiTailwindcss>
						</div>
						<div className="text-three pt-2 fs-2">Tailwind</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<FaReact className="display-1"></FaReact>
						</div>
						<div className="text-three pt-2 fs-2">React JS</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<BsPhone className="display-1"></BsPhone>
						</div>
						<div className="text-three pt-2 fs-2">
							Responsiveness
						</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<FaCode className="display-1"></FaCode>
						</div>
						<div className="text-three pt-2 fs-2">JSX</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<SiFirebase className="display-1"></SiFirebase>
						</div>
						<div className="text-three pt-2 fs-2">Firebase</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<BsBug className="display-1"></BsBug>
						</div>
						<div className="text-three pt-2 fs-2">Debugging</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<FaPuzzlePiece className="display-1"></FaPuzzlePiece>
						</div>
						<div className="text-three pt-2 fs-2">Rest API</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<BsGit className="display-1"></BsGit>
						</div>
						<div className="text-three pt-2 fs-2">Git</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<BsGithub className="display-1"></BsGithub>
						</div>
						<div className="text-three pt-2 fs-2">GitHub</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<FaFigma className="display-1"></FaFigma>
						</div>
						<div className="text-three pt-2 fs-2">Figma</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<SiVercel className="display-1"></SiVercel>
						</div>
						<div className="text-three pt-2 fs-2">Vercel</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<BiLogoNetlify className="display-1"></BiLogoNetlify>
						</div>
						<div className="text-three pt-2 fs-2">Netlify</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<SiOpenai className="display-1"></SiOpenai>
						</div>
						<div className="text-three pt-2 fs-2">ChatGPT</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<RiBardFill className="display-1"></RiBardFill>
						</div>
						<div className="text-three pt-2 fs-2">Bard AI</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<FaChrome className="display-1"></FaChrome>
						</div>
						<div className="text-three pt-2 fs-2">Dev Tool</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<SiMongodb className="display-1"></SiMongodb>
						</div>
						<div className="text-three pt-2 fs-2">MongoDB</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<FaNodeJs className="display-1"></FaNodeJs>
						</div>
						<div className="text-three pt-2 fs-2">Node JS</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<SiExpress className="display-1"></SiExpress>
						</div>
						<div className="text-three pt-2 fs-2">Express JS</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<RxTimer className="display-1"></RxTimer>
						</div>
						<div className="text-three pt-2 fs-2">Punctual</div>
					</div>
				</div>
				<div className="col-3 skill-card">
					<div className="skill">
						<div>
							<BsShieldShaded className="display-1"></BsShieldShaded>
						</div>
						<div className="text-three pt-2 fs-2">Disciplined</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
