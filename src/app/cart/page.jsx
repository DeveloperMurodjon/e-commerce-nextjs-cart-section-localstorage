import Image from 'next/image';
import { CartItem, Del } from '@/assets';
import React from 'react';

function Cart() {
    return (
        <div className="min-h-screen flex justify-center">
            <div>
                <h2 className="text-[#454545] font-bold text-[64px] mb-10">Корзина</h2>

                <div className="bg-gray-100 p-6 rounded-2xl shadow-lg w-full">
                    <table className="w-full rounded-2xl border-separate border-spacing-0">

                        <thead className="mb-3">
                            <tr className="text-gray-600 text-sm">
                                <th className="text-[#454545] opacity-50 font-medium text-[16px] text-left p-3">
                                    Фото
                                </th>
                                <th className="text-[#454545] opacity-50 font-medium text-[16px] text-left p-3">
                                    Товары
                                </th>
                                <th className="text-[#454545] opacity-50 font-medium text-[16px] text-left p-3">
                                    Описание
                                </th>
                                <th className="text-[#454545] opacity-50 font-medium text-[16px] text-left p-3">
                                    Артикул
                                </th>
                                <th className="text-[#454545] opacity-50 font-medium text-[16px] text-center p-3">
                                    Количество
                                </th>
                                <th className="text-[#454545] opacity-50 font-medium text-[16px] text-center p-3">
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {[1, 2].map((item, index) => (
                                <tr
                                    key={index}
                                    className={index > 0 ? 'border-t border-gray-300' : ''}
                                >
                                    <td className="  rounded-md">
                                        <Image className='bg-white px-1 py-2 rounded-2xl' src={CartItem} alt="cart item" />
                                    </td>

                                    <td className="py-5 px-6 font-medium text-gray-700">
                                        Встраиваемый светильник Novotech
                                        <p className="text-lg font-bold text-gray-900">6 399₽</p>
                                    </td>

                                    <td className="py-5 px-6 text-gray-600 text-sm">
                                        Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;
                                    </td>

                                    <td className="py-5 px-6 text-gray-600 text-sm">
                                        RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS
                                    </td>

                                    <td className="py-5 px-6 flex items-center justify-center gap-3">
                                        <button className="px-3 py-1 text-lg text-[#454545]">-</button>
                                        <span className="border rounded-md py-[10px] px-[16px] border-[#E1E1E1] font-medium">
                                            1
                                        </span>
                                        <button className="px-3 py-1 text-lg text-[#454545]">+</button>
                                    </td>

                                    <td className="py-5 px-6 text-gray-600 text-sm text-center">
                                        <Image src={Del} alt="delete button" className="cursor-pointer" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cart;
