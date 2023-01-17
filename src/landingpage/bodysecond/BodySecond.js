import React from 'react'

function BodySecond() {
    return (
        <div className='mt-40'>
            <div className='col-md-12 px-0 bg-[#F4FAFF]'>
                <div className='mt-12'>
                    <img src="/assets/dots.svg" alt="logo kanan" />
                </div>
                <div className='row ml-16'>
                    <div className='col-md-12'>
                        <p className=''>
                            <b>
                                <span>Alur Pendaftaran <br /> Rekrutmen Jasa Raharja</span>
                            </b>
                        </p>
                        <p className='pt-3'>Kandidat dapat melihat alur proses  dan rangkaian test rekrutmen selama kegiatan seleksi karyawan Jasa Raharja. <br /> Pastikan Anda melengkapi data diri dengan benar dan lengkap.</p>
                    </div>
                </div>
                <div className='col mt-5 flex'>
                    <div className='col-md-5 ml-6'>
                        <img src="/assets/schedule_org.svg" alt="" />
                    </div>
                    <div className='col-md-5 px-4 ml-20 px-md-0'>
                        <ul>
                            <li>
                                <div className='timeline-card-element'>
                                    <div className='timeline-card-strip'></div>
                                    <div className='timeline-card-body py-3'>
                                        <div className='col-md-12'>
                                            <p className='border-solid border-2'>
                                                <b>Seleksi Administrasi</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='p-5 custom-px-5 bg-gradient-to-b from-blue-700 to-blue-500'>
                <div className='background-left-md'></div>
                <div className='background-right-md'></div>
                <div className='row ml-0 mr-0 text-center'>
                    <div>
                        <p>
                            <b>
                                <span className='font-extrabold text-4xl text-white'>Alur Regristrasi Online</span>
                            </b>
                        </p>
                    </div>
                    <div className=' col-md-12 mt-5'>
                        <ul className='flex text-center justify-center'>
                            <li className='mr-4 ring-2 border-solid border-2 border-sky-500'>
                                <a className='' href="">Step 1</a>
                            </li>
                            <li className='mr-4 border-solid border-2 border-sky-500'>
                                <a href="">Step 2</a>
                            </li>
                            <li className='mr-4 border-solid border-2 border-sky-500'>
                                <a href="">Step 3</a>
                            </li>
                            <li className='mr-4 border-solid border-2 border-sky-500'>
                                <a href="">Step 4</a>
                            </li>
                            <li className='border-solid border-2 border-sky-500'>
                                <a href="">Step 5</a>
                            </li>
                        </ul>
                        <div className=''></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodySecond