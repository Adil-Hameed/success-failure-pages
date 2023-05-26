import React from 'react'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Header from '../components/success/Header'
import CardParent from '../components/success/CardParent'

export default function Success() {
    return (
        <>
            <PreNavbar />
            <Navbar />
            <Header />
            <CardParent/>
            <Footer />
        </>
    )
}
