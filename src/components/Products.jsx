import React from 'react';
import ProductCard from './ProductCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Products = async () => {
	let products;
	try {
		const res = await fetch('https://dummyjson.com/products');
		let data = await res.json();
		products = data.products;
	} catch (err) {
		console.log(err);
	}

	return (
		<div className='py-5'>
			<div className='flex gap-y-5 flex-wrap items-center justify-between mb-5'>
				<h2 className='text-4xl max-sm:text-2xl font-semibold max-lg:text-3xl'>
					Популярные товары
				</h2>
				<Link
					href={'/'}
					className='border max-sm:px-6 flex items-center justify-center gap-2 rounded-full px-10 py-2.5'
				>
					Все товары <ArrowRight />
				</Link>
			</div>
			<div className='grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-3'>
				{products && products.map(p => <ProductCard key={p.id} p={p} />)}
			</div>
		</div>
	);
};

export default Products;
