import React from 'react'

export default function Header() {
    return (
        <div className='container-fluid pt-2 pb-5 '>
            <div className='row w-80 mx-auto'>
                <div className='col-xxl-10  col-12 text-center mx-auto px-0 '>
                    <img src="asset/Group 1000006678 (1).svg" className='img-fluid' alt='' />
                    <h1 className='fw-bolder'>
                        WE ARE <span style={{ color: "#FF5F68" }}>SORRY</span>
                    </h1>
                    <p className='fs-22 text-secondary'>
                        It looks like your property may not qualify for our program at this time.
                    </p>

                </div>
            </div>
        </div>

    )
}
