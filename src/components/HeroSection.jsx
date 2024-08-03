import React from 'react'
import investiture from "../assets/images/investiture.jpg"
import { Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <div className='w-full'>
            {/* <div className='w-full m-auto'> */}
            <div className='relative w-full h-[170vw] lg:h-[45vw] flex' style={{ backgroundImage: `url(${investiture})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                <div className='w-full absolute top-0 left-0 bg-[#000] h-full opacity-50 lg:opacity-70 z-10'></div>
                <div className='w-full  flex place-items-center relative z-[100]'>
                    <div className='w-[95%] lg:w-[70%] m-auto lg:m-0 lg:px-10 flex flex-wrap text-center lg:text-left slide-up'>
                        <h1 className='text-[50px] mb-4 lg:text-[75px] leading-[70px] lg:leading-[80px] font-extrabold text-white opacity-90'>Welcome to NIMechE Uniport</h1>
                        <p className='text-[20px] mb-4 lg:px-8 text-gray-300'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has packages.</p>
                        <Link className='bg-[#05135D] w-[45%] lg:w-[35%] text-[18px] lg:text-[24px] m-auto lg:m-0 text-center text-white py-4 rounded-lg'>Visit our E-library</Link>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default HeroSection