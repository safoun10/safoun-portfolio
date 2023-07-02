import React from 'react';
import Banner from '../banner/Banner';
import Me from '../me/Me';

const Home = () => {
    return (
		<div>
			<Banner></Banner>
			<div className="bg-dark text-white">
				<Me></Me>
			</div>
		</div>
	);
};

export default Home;