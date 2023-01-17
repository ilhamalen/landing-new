import React from 'react'
import BodySecond from "../bodysecond/BodySecond";

function Body() {
    return (
        <>
            <div id='home_content' className=" font-poppins h-screen">
                <div className='absolute h-1/3'>
                    <img className='object-cover' src="/assets/hero_banner.png" alt="" />
                </div>
                <div className='relative bg-gradient-to-b from-blue-900'>
                    <div className='pt-0 absolute'>
                        <img src="/assets/union.png" alt="logo kiri" />
                    </div>
                    <div className='row ml-0 mr-0 text-lef pt-32'>
                        <div className='col-md-12 text-center'>
                            <span className=''>
                                <b className='text-bold text-white text-4xl'>Melangkah dan Berkarir <br /> bersama <a className='text-bold text-4xl text-red-200'>Jasa Raharja</a> </b>
                            </span><br /><br />
                            <span className='text-base text-center text-white'>Bersama Jasa Raharja menjadi human capital yang unggul dan ber-AKHLAK <br />  dalam memberikan pelayanan yang terbaik untuk negeri</span>
                        </div><br />
                        <div className='text-center text-white'>
                            <a className='border-zinc-800' href="">Persyaratan</a>
                        </div>
                    </div>
                    <div className='right-0 absolute'>
                        <img src="/assets/union.png" alt="logo kanan" />
                    </div>
                </div>
                <div className="text-white justify-center bg-[#13349A] relative b-0 mt-96 h-16 ">
                    <marquee className="py-3 ">
                        {/* <img className='w-6' src="/assets/PT_JR.svg" alt="" />  */}
                        <a className='mr-4' href="">REKRUTMEN JASA RAHARJA</a>
                        <a className='mr-4' href="">REKRUTMEN JASA RAHARJA</a>
                        <a className='mr-4' href="">REKRUTMEN JASA RAHARJA</a>
                        <a className='mr-4' href="">REKRUTMEN JASA RAHARJA</a>
                        <a className='mr-4' href="">REKRUTMEN JASA RAHARJA</a>
                        <a className='mr-4' href="">REKRUTMEN JASA RAHARJA</a>
                        <a className='mr-4' href="">REKRUTMEN JASA RAHARJA</a>
                    </marquee>
                </div>
            </div>
            <BodySecond />
        </>
    )
}

export default Body