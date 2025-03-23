import Hero from '@/components/Hero';
import Products from '@/components/Products';
import SocialModal from '@/components/SocialModal';
import React from 'react';


const HomePage = () => {


	return (
		<div className='container'>
			<Hero />
			<Products />
			<SocialModal />
		</div>
	);
};

export default HomePage;
