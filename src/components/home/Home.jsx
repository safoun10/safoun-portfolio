import Banner from '../banner/Banner';
import Me from '../me/Me';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';

const Home = () => {
    return (
		<div>
			<Banner></Banner>
			<div className="bg-dark text-white">
				<Me></Me>
			</div>
			<Skills></Skills>
			<Projects></Projects>
		</div>
	);
};

export default Home;