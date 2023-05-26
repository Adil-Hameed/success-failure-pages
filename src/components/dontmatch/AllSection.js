import React from 'react'

export default function AllSection() {
    return (
        <>
            <div className='container-fluid py-5 '>
                <div className='row w-80 mx-auto'>
                    <div className='col-xxl-10 col-lg-10  col-12 text-center mx-auto px-0 '>
                        <h1 className='fw-bolder mt-3'>
                            Oops, it looks like we<span style={{ color: "#2CAAE6" }}> hit a bump</span> in the road.
                            {/* You just <span style={{ color: "#40FF62" }}>Rocked</span> that form, thanks! */}
                        </h1>
                        {/* <p className='d-inline-block light-green mt-5 p-2 px-4 mb-0 fw-semibold fs-22 rounded roboto'>
                    Book A Call
                    </p> */}
                    </div>
                </div>
            </div>
            <div className='container-fluid py-5 dark-blue '>
                <div className='row w-80 mx-auto'>
                    <div className='col-xxl-10 col-lg-10 col-12 text-center mx-auto px-0 '>
                        <p className='fs-22 fw-semibold mb-4 light-green-text'>
                            Unfortunately, based on the information provided, we won't be able to proceed with our Sell and Leaseback program.
                        </p>
                        <h3 className='fs-40  fw-bolder mb-4'>
                            But hey, don't lose hope! You're welcome to complete the form again and double-check the information provided. We're here to help and guide you through the process.
                        </h3>
                    </div>
                </div>
            </div>
            <div className='container-fluid py-5  '>
                <div className='row w-80 mx-auto'>
                    <div className='col-xxl-10 col-lg-10 col-12 text-center mx-auto px-0 py-4'>
                        <p className='d-inline-block light-green  mx-4 p-2 px-4 mb-3 fw-semibold fs-22 rounded'>
                            Give it Another Shot
                        </p>
                        <p className='d-inline-block border border-black  p-2 px-4 mb-0 fw-semibold fs-22 rounded'>
                            Explore Our Blogs
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
