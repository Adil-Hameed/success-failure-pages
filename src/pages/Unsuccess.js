import React from 'react'
import Header from '../components/unsuccess/Header'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import CardParent from '../components/unsuccess/CardParent'

export default function Unsuccess() {
    return (
        <>
            <PreNavbar />
            <Navbar />
            <Header />
            <CardParent />
            <div className='bg-white d-lg-block d-none' style={{ height: "280px" }}>
            </div>
            <Footer />
        </>
    )
}
