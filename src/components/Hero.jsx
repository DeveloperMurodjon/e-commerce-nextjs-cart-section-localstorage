import React from 'react';
import Navigation from './Navigation';
import Image from 'next/image';
import { HeroImage } from '@/assets';


const Hero = () => {
	return (
		<div>
			<Navigation />
			<Image src={HeroImage} />
		</div>)
};

export default Hero;
