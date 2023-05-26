import React from 'react'

export default function Header() {
    return (
        <div className='container-fluid py-5 '>
            <div className='row w-80 mx-auto'>
                <div className='col-xxl-10  col-12 text-center mx-auto px-0 '>
                    <img src="asset/Group 1000006678.svg" className='img-fluid mb-2' alt='' />
                    <h1 className='fw-bolder mt-4'>
                        You just <span style={{ color: "#40FF62" }}>Rocked</span> that form, thanks!
                    </h1>
                    <p className='d-inline-block light-green mt-5 p-2 px-4 mb-0 fw-semibold fs-22 rounded roboto'>
                    Book A Call
                    </p>
                </div>
            </div>
        </div>

    )
}
