import React from 'react';
import Image from 'next/image';
import { HeroImage } from '@/assets';


const Hero = () => {
	return (
		<div>
			<Image className='mb-[97px]' src={HeroImage} priority={true} alt={"hero image"} />
		</div>)
};

export default Hero;
