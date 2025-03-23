'use client'
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import Link from 'next/link';

function SocialModal() {
    useEffect(() => {

        // avvalgiVaqt
        let lastHour = Number(localStorage.getItem("dailymodal")) || 0
        //hozirgi vaqt
        let d = new Date()
        let currentHour = d.getHours()

        //vaqtni tekshirish
        function shouldShowModal() {
            return !lastHour || currentHour - lastHour >= 24
        }

        if (shouldShowModal()) {
            //10 sekunddan so'ng toastni render qilish
            const timeout = setTimeout(() => {
                toast.info(
                    <div className='flex gap-3'>
                        <Link href='https://instagram.com' >
                            <InstagramIcon size={40} color="#E4405F" />
                        </Link>
                        <Link href='https://youtube.com' >
                            <YoutubeIcon size={40} color='#FF0000' />
                        </Link>
                        <Link href='https://linkedin.com' >
                            <LinkedinIcon size={40} color='#0A66C2' />
                        </Link>
                    </div>,
                    {
                        position: "bottom-right",
                        autoClose: 10000,
                        hideProgressBar: true,
                        closeButton: false,
                        icon: false,
                    }
                )
                localStorage.setItem("dailymodal", currentHour)
            }, 10000)
            return () => clearTimeout(timeout)
        }

    }, [])

    return (
        <div>
            <ToastContainer
                toastStyle={{ padding: '4px', width: 'auto', }}
                icon={false}
                position="bottom-right"
                autoClose={10000}
                closeButton={false}

                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                draggable
                theme="light"
            />
        </div>
    );

}

export function showToast(message, type = "info") {
    toast[type](message, { icon: false });
}

export default SocialModal;
