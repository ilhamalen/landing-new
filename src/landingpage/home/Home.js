import React from 'react'
import Navbar from '../navbar/Navbar'
import Body from '../body/Body'
import Footer from '../footer/Footer'

function Home() {
    return (
        <div className="">
            <div className=" w-full ">
                <Navbar />
            </div>
            <Body />
            <Footer />
        </div>
    )
}

export default Home