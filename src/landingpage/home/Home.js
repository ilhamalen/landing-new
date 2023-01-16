import React from 'react'
import Navbar from '../navbar/Navbar'
import Body from '../body/Body'
import Footer from '../footer/Footer'

function Home() {
    return (
        <div className="">
            <div className="fixed z-10 w-full ">
                <Navbar />
            </div>
            <Body />
            <Footer />
        </div>
    )
}

export default Home