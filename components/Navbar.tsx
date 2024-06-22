'use client';

import Image from 'next/image';
import Logo from '@/public/logo.webp';
import React, { MouseEvent } from 'react';

const Navbar = () => {
    const openFeedbackDialog = (event: MouseEvent<HTMLButtonElement>) => {
        var dialog = document.getElementById('my_modal_4') as HTMLDialogElement;
        dialog?.showModal();
    }

    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl hidden md:flex">spritesheetmaker.com</a>
                <Image src={Logo} alt='logo' height={50} className='md:hidden'/>
            </div>
            <div className="navbar-center">
                <Image src={Logo} alt='logo' height={50} className='hidden md:block'/>
            </div>
            <div className="navbar-end">
                <a href='https://ko-fi.com/C0C6ZM5Y6' target='_blank'>
                <Image className='border-spacing-0 h-[36px] min-w-[130px] mr-4' height={36} width={130} src='https://storage.ko-fi.com/cdn/kofi3.png?v=3' alt='Buy Me a Coffee at ko-fi.com' />
                </a>
                <button className="btn btn-outline btn-primary" onClick={openFeedbackDialog}>Feedback</button>
            </div>
        </div>
    )
}

export default Navbar;