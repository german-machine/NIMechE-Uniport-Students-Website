import React, { useState } from 'react'
import nimecheLogo from '../assets/images/nimeche.png'
import { Link } from 'react-router-dom'
import { MdMenu } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMenu = () => {
        setIsClicked(!isClicked)
    }

    const handleLinkClick = () => {
        setIsOpen(!isOpen);
        setIsClicked(false)
    }


    return (
        <div className='w-full block shadow-xl relative'>
            <div className='w-[90%] lg:w-[90%] m-auto py-3 flex justify-between items-center '>
                <div className='w-[80%] lg:w-[50%] flex items-center gap-3 '>
                    <img src={nimecheLogo} alt="" className='w-[20%]'  />
                    <h2 className='font-extrabold w-full text-[20px] lg:text-[20px] log text-[#FB6301]'>NIMechE <span className='logo font-extrabold'>|</span> <span className='text-green-800'>Uniport</span></h2>
                </div>
                <ul className={`w-full ${isClicked ? 'top-[9.5vh] md:top-[13vh] lg:top-0 left-0 right-0 bg-[#ff893b] lg:bg-transparent translate-y-0 opacity-100 duration-1000' : 'left-0 top-0 z-50 -translate-y-[100%] lg:-translate-y-0 opacity-0 lg:opacity-100 duration-1000'} absolute lg:relative flex lg:flex flex-col lg:flex-row px-5 lg:px-0 py-5 gap-5 lg:gap-0 bg-green-60 justify-around lg:items-center`}>
                    <li className='bg-white lg:bg-transparent py-2 lg:py-0 px-2 lg:px-0 rounded-[5px]' onClick={handleLinkClick}>
                        <Link>Home</Link>
                    </li>
                    <li onClick={handleLinkClick}>
                        <Link>About</Link>
                    </li>
                    <li onClick={handleLinkClick}>
                        <Link>Contact</Link>
                    </li>
                    <li onClick={handleLinkClick}>
                        <Link>Lecturers' profile</Link>
                    </li>
                    <li onClick={handleLinkClick}>
                        <Link>Executives' profile</Link>
                    </li>
                    <li onClick={handleLinkClick}>
                        <Link>E-library</Link>
                    </li>
                </ul>
                <div>
                    {isClicked ? <IoClose className='text-3xl lg:hidden duration-500' onClick={handleMenu} /> : <MdMenu className='text-3xl lg:hidden duration-500 logo' onClick={handleMenu} />}
                </div>
            </div>
        </div>
    )
}

export default Header