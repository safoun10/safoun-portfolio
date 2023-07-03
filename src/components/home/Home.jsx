import Banner from '../banner/Banner';
import Me from '../me/Me';
import Skills from '../skills/Skills';

const Home = () => {
    return (
		<div>
			<Banner></Banner>
			<div className="bg-dark text-white">
				<Me></Me>
			</div>
			<Skills></Skills>
		</div>
	);
};

export default Home;