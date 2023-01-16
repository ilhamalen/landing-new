import React from 'react'

function Footer() {
    return (
        <>
            <div className='flex grid grid-cols-4 flex row px-20 py-20 bg-[#13349A]'>
                <div className='col-span-2 text-white'>
                    <span className='font-bold pb-1'>PT Jasa Raharja</span>
                    <div className='pt-2'>
                        <p className='text-justify text-white pr-60'>
                            Melaksanakan Asuransi Kecelakaan penumpang alat angkutan umum dan asuransi tanggung jawab
                            menurut hukum terhadap pihak ketiga sebagaimana diatur UU No. 33 dan 34 tahun 1964 berikut
                            peraturan pelaksanaannya.
                        </p>
                    </div>
                </div>
                <div className='col-span-2'>
                    <div className='flex grid grid-cols-2 flex row'>
                        <div className='col-span-1 text-white'>
                            <span className='font-bold mb-1'>Hubungi Kami</span>
                            <div className='pt-2 word-wrap: break-word flex'>
                                <p rel='noopener noreferrer' target={"_blank"} href="https://rekrutmen.jasaraharja.co.id/" className='flex text-white'>
                                    <span className='mr-2 mt-2'>
                                        <img src="/assets/web.svg" alt='web recruitment' />
                                    </span>
                                    www.rekrutmen.jasaraharja.co.id
                                </p>
                            </div>
                            <div className=''>
                                <p rel='noopener noreferrer' target={"_blank"} href="mailto:rekrutmen@jasaraharja.co.id" className='flex text-white'>
                                    <span className='mr-2 mt-2'>
                                        <img src="/assets/mail.svg" alt='email recruitment' />
                                    </span>
                                    rekrutmen@jasaraharja.co.id
                                </p>
                            </div>
                            <div className=''>
                                <p rel='noopener noreferrer' target={"_blank"} href="https://www.jasaraharja.co.id" className='flex text-white'>
                                    <span className='mr-2 mt-2'>
                                        <img src="/assets/web.svg" alt='web jasa raharja' />
                                    </span>
                                    jasaraharja.co.id
                                </p>
                            </div>
                        </div>
                        <div className='col-span-1 px-8 text-white'>
                            <span className='font-bold'>Social Media</span>
                            <div className='pb-2 pt-2'>
                                <p className='flex' rel='noopener noreferrer' target={"_blank"} href="https://www.instagram.com/pt_jasaraharja">
                                    <span className='mr-2 mt-2'>
                                        <img src="/assets/Instagram.svg" alt='web jasa raharja' />
                                    </span>
                                    pt_jasaraharja
                                </p>
                            </div>
                            <div className='pb-2'>
                                <p className='flex' rel='noopener noreferrer' target={"_blank"} href="https://twitter.com/pt_jasaraharja">
                                    <span className='mr-2 mt-2'>
                                        <img src="/assets/Twitter.svg" alt='web jasa raharja' />
                                    </span>
                                    pt_jasaraharja
                                </p>
                            </div>
                            <div className='pb-2'>
                                <p className='flex' rel='noopener noreferrer' target={"_blank"} href="https://www.youtube.com/JasaRaharjaOfficial">
                                    <span className='mr-2 mt-2'>
                                        <img src="/assets/Youtube.svg" alt='web jasa raharja' />
                                    </span>
                                    Jasa Raharja Official
                                </p>
                            </div>
                            <div className='pb-2'>
                                <p className='flex' rel='noopener noreferrer' target={"_blank"} href="https://www.facebook.com/JasaRaharja">
                                    <span className='mr-2 mt-2'>
                                        <img src="/assets/Facebook.svg" alt='web jasa raharja' />
                                    </span>
                                    Jasa Raharja
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-10 text-center pt-3 text-white text-sm pb-8 bg-black">
                <span>Copyright © 2022 • Powered by Infomedia Telkom Indonesia [1]</span>
            </div>
        </>
        // <footer className="bg-gray-900 text-white">
        //     <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#13349A] py-7">
        //         <div className='row ml-0 mr-0 text-left'>
        //             <h5>PT Jasa Raharja</h5>
        //             <div className='row'>
        //                 <div className='col-lg-8 col-md-4'>
        //                     <p className='text-justify'>
        //                         Melaksanakan Asuransi Kecelakaan penumpang alat angkutan umum dan asuransi tanggung jawab
        //                         menurut hukum terhadap pihak ketiga sebagaimana diatur UU No. 33 dan 34 tahun 1964 berikut
        //                         peraturan pelaksanaannya.
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className='col-md-3 pb-3 text-white'>
        //             <h5 className=''>Hubungi Kami</h5>
        //             <div className='p-2 word-wrap: break-word'>
        //                 <a> rel='noopener noreferrer' target={"_blank"} href="https://rekrutmen.jasaraharja.co.id/" className='text-white'>www.rekrutmen.jasaraharja.co.id</a>
        //             </div>
        //             <div className='p-2'>
        //                 <a rel='noopener noreferrer' target={"_blank"} href="mailto:rekrutmen@jasaraharja.co.id" className='text-white'>rekrutmen@jasaraharja.co.id</a>
        //             </div>
        //             <div className='p-2'>
        //                 <a rel='noopener noreferrer' target={"_blank"} href="https://www.jasaraharja.co.id" className='text-white'>jasaraharja.co.id</a>
        //             </div>
        //         </div>
        //         <div className='col-md-3 text-white'>
        //             <h5>Social Media</h5>
        //             <div className='pb-2'>
        //                 <a rel='noopener noreferrer' target={"_blank"} href="https://www.instagram.com/pt_jasaraharja">pt_jasaraharja</a>
        //             </div>
        //             <div className='pb-2'>
        //                 <a rel='noopener noreferrer' target={"_blank"} href="https://twitter.com/pt_jasaraharja">pt_jasaraharja</a>
        //             </div>
        //             <div className='pb-2'>
        //                 <a rel='noopener noreferrer' target={"_blank"} href="https://www.youtube.com/JasaRaharjaOfficial">Jasa Raharja Official</a>
        //             </div>
        //             <div className='pb-2'>
        //                 <a rel='noopener noreferrer' target={"_blank"} href="https://www.facebook.com/JasaRaharja">Jasa Raharja</a>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="grid grid-cols-1 gap-10 text-center pt-3 text-white text-sm pb-8">
        //         <span>Copyright © 2022 • Powered by Infomedia Telkom Indonesia [1]</span>
        //     </div>
        // </footer>
    )
}

export default Footer