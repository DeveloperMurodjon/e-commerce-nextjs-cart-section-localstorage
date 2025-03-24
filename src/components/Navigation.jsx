import { LogoImage, CatalogImage, SearchImage, FavoritesImage, StateImage, CartImage } from '@/assets/index'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



function Navigation() {
    return (
        <div className='mt-5 mb-[68px]'>
            <div className='flex items-center justify-between'>
                <Link href="/" >
                    <div className='flex items-center gap-2'>
                        <Image src={LogoImage} alt="nornlight" />
                        <h1 className='text-3xl text-[#454545]'>NORNLIGHT</h1>
                    </div>
                </Link>
                <button className='cursor-pointer w-[153px] ml-[35px] mr-4'><Image src={CatalogImage} alt="catalog" /></button>
                <div className="flex w-[626px]  items-center border border-gray-300 rounded-3xl overflow-hidden">
                    <input
                        placeholder="Поиск по товарам"
                        className="px-4 py-2 flex-grow placeholder:font-semibold placeholder:text-[#454545] placeholder:text-[16px] focus:outline-none"
                    />
                    <button className="px-3 cursor-pointer">
                        <Image src={SearchImage} alt="search" width={24} height={24} />
                    </button>
                </div>
                <div className='flex gap-[30px] ml-[30px] items-center'>
                    <Link href={"/"} className='cursor-pointer items-center flex flex-col '>
                        <Image src={FavoritesImage} alt='favorites' />
                        <p className='font-semibold text-sm  text-[#454545]'>Избранное</p>
                    </Link>

                    <Link href={"/"} className='cursor-pointer items-center flex flex-col '>
                        <Image src={StateImage} alt='favorites' />
                        <p className='font-semibold text-sm  text-[#454545]'>Сравнение</p>
                    </Link>

                    <Link href={"/cart"} className='cursor-pointer items-center flex flex-col '>
                        <Image src={CartImage} alt='favorites' />
                        <p className='font-semibold text-sm  text-[#454545]'>Корзина</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navigation