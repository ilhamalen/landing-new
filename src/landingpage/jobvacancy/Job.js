import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Job() {
    return (
        <>
            <Navbar />
            <div className='bg-[#F4FAFF] grid'>
                <div className='right'>
                    <img src="/assets/dots.svg" alt="" />
                </div>
                <div className='left'>
                    <img src="/assets/dots.svg" alt="" />
                </div>
                <div className='container'>
                    <div className=''>
                        <div className=''>
                            <div className=''>
                                <div className='row ml-16 d-inline-block'>
                                    <div className='col-md-12 px-4'>
                                        <b className='text-2xl'>Job Vacancies</b>
                                        <p className='text-lg'>Sebelum Mendaftar, Pastikan Anda Memenuhi Kualifikasi Khusus Pada <i>Job Role</i> Yang Akan Anda <i>Apply</i></p>
                                    </div>
                                    <div className='col-md-12 pr-0 pt-4 pt-md-0'>
                                        <div className='indent-5'>
                                            <div className='row m-0'>
                                                <div className='col-md-12 m-0 mb-2 pl-0 pr-2'>
                                                    <div className=''>
                                                        <div className=''>
                                                            <ul className=''>
                                                                <div className='row drop-shadow-lg row ml-4 h-16  border-solid border-1 border-white bg-white mb-4'>
                                                                    <div className='col-6 center-list-job p-3'>
                                                                        <h5>Staf Administrasi Bidang Operasional</h5>
                                                                        <p></p>
                                                                        <div className='flex'>
                                                                            <div className='ml-5 pt-1'>
                                                                                <span>
                                                                                    <img className='w-4' src="/assets/icons_checklist.svg" alt="" />
                                                                                </span>
                                                                            </div>
                                                                            <div className='ml-0 text-left'>
                                                                                <small>Bidang: </small>
                                                                                <span>Operasional</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-4 text-right'>
                                                                        <span>
                                                                            <a href="" className='btn-sm '>Detail</a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className='row drop-shadow-lg row ml-4 h-16  border-solid border-1 border-white bg-white mb-4'>
                                                                    <div className='col-6 center-list-job p-3'>
                                                                        <h5>Staf Administrasi Bidang Teknologi Informasi dan Komunikasi</h5>
                                                                        <p></p>
                                                                        <div className='flex'>
                                                                            <div className='ml-5 pt-1'>
                                                                                <span>
                                                                                    <img className='w-4' src="/assets/icons_checklist.svg" alt="" />
                                                                                </span>
                                                                            </div>
                                                                            <div className='ml-0 text-left'>
                                                                                <small>Bidang: </small>
                                                                                <span>Teknologi Informasi dan Komunikasi</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-4 text-right'>
                                                                        <span>
                                                                            <a href="" className='btn-sm '>Detail</a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className='row drop-shadow-lg row ml-4 h-16  border-solid border-1 border-white bg-white mb-4'>
                                                                    <div className='col-6 center-list-job p-3'>
                                                                        <h5>Staf Administrasi Bidang Aktuaria</h5>
                                                                        <p></p>
                                                                        <div className='flex'>
                                                                            <div className='ml-5 pt-1'>
                                                                                <span>
                                                                                    <img className='w-4' src="/assets/icons_checklist.svg" alt="" />
                                                                                </span>
                                                                            </div>
                                                                            <div className='ml-0 text-left'>
                                                                                <small>Bidang: </small>
                                                                                <span>Aktuaria</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-4 text-right'>
                                                                        <span>
                                                                            <a href="" className='btn-sm '>Detail</a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Job