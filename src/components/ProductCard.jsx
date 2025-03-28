import { Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ProductCard = ({ p }) => {
	return (
		<div className='p-3 pb-10 relative shadow rounded'>
			<span className='absolute top-2 right-2 '>
				<Heart />
			</span>
			<div className='w-full aspect-square'>
				<Image
					src={p.images[0]}
					className='w-full h-full object-contain'
					width={300}
					height={200}
					alt={p.title}
					priority={true}
				/>
			</div>
			<p className='line-clamp-2 mb-4'>{p.title}</p>
			<div className='flex absolute bottom-0 right-0 pb-3 p-[inherit] w-full justify-between items-end gap-1'>
				<div>
					<p className='opacity-50 line-through text-sm'>${p.price}</p>
					<h4 className='leading-4'>
						${(p.price - (p.price / 100) * p.discountPercentage).toFixed(2)}
					</h4>
				</div>
				<span className='bg-black inline-block px-3 py-2 rounded-3xl text-white'>
					<ShoppingCart size={16} />
				</span>
			</div>
		</div>
	);
};

export default ProductCard;
