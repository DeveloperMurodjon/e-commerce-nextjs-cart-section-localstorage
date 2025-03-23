'use client'
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from 'lucide-react';
import Link from 'next/link';

function SocialModal() {
    useEffect(() => {
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
        );
    }, []);

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
