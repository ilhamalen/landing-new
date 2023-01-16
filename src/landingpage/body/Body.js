import React from 'react'

function Body() {
    return (
        <div id='home_content' className=" font-poppins h-full">
            {/* <div className=''>
                <img src="/assets/hero_banner.png" alt="" />
            </div> */}
            <div className='bg-gradient-to-b from-blue-700 to-blue-300'>
                <div className='pt-10'>
                    <img src="/assets/dots.svg" alt="logo kiri" />
                </div>
                <div className='row ml-0 mr-0 text-left'>
                    <div className='col-md-12 pl-5 pr-5 my-auto text-center'>
                        <span className=''>
                            <b className='text-bold text-4xl'>Melangkah dan Berkarir <br /> bersama <a className='text-bold text-4xl'>Jasa Raharja</a> </b>
                        </span><br /><br />
                        <span className='text-base text-center'>Bersama Jasa Raharja menjadi human capital yang unggul dan ber-AKHLAK <br />  dalam memberikan pelayanan yang terbaik untuk negeri</span>
                    </div><br />
                    <div className='text-center'>
                        <a href="">Persyaratan</a>
                    </div>
                </div>
                <div className=''>
                    <img src="/assets/dots.svg" alt="logo kanan" />
                </div>
            </div>
        </div>
    )
}

export default Body