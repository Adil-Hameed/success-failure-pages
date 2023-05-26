import React from 'react'
// import Slider from "react-slick";
// import NextArrow from '../common/NextArrow';
// import PreArrow from '../common/PreArrow';
// import NextArrow from './NextArrow';
// import PreArrow from './PreArrow';

export default function UnsuccessCard() {

    // var settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     nextArrow: <NextArrow />,
    //     prevArrow: <PreArrow />,
    // };

    return (
        <>
            <div className='w-80 top-0 test d-lg-flex d-none  justify-content-around px-0 position-absolute'>
                <div className='unsucces-card rounded text-start   p-2'>
                    <img src='asset/Rectangle 17850.png' className='img-fluid' alt='' />
                    <h3 className='fs-22 fw-semibold mt-4 mb-3 px-3' style={{ color: "#30354C" }}>
                        How Sell2Rent Can Help Eliminate Short-Term Debt
                    </h3>
                    <span className='light-blue-text px-3'>
                        Read More &gt; &gt;
                    </span>
                </div>
                <div className='unsucces-card rounded text-start mx-4   p-2'>
                    <img src='asset/Rectangle 17850 (1).png' className='img-fluid' alt='' />
                    <h3 className='fs-22 fw-semibold mt-4 mb-3 px-3' style={{ color: "#30354C" }}>
                        5 Tips For Selling In Today’s Real Estate Market
                    </h3>
                    <span className='light-blue-text px-3'>
                        Read More &gt; &gt;
                    </span>

                </div>
                <div className='unsucces-card rounded text-start   p-2'>
                    <img src='asset/Rectangle 17850 (2).png' className='img-fluid' alt='' />
                    <h3 className='fs-22 fw-semibold mt-4 mb-3 px-3' style={{ color: "#30354C" }}>
                        Skip The Auction, Sell To Rent
                    </h3>
                    <span className='light-blue-text px-3 '>
                        Read More &gt; &gt;
                    </span>

                </div>
            </div>


            <div className='d-lg-none  top-0 d-flex flex-column align-items-center px-0'>
                <div className='unsucces-card rounded text-start   p-2'>
                    <img src='asset/Rectangle 17850.png' className='img-fluid' alt='' />
                    <h3 className='fs-22 fw-semibold mt-4 mb-3 px-3' style={{ color: "#30354C" }}>
                        How Sell2Rent Can Help Eliminate Short-Term Debt
                    </h3>
                    <span className='light-blue-text px-3'>
                        Read More &gt; &gt;
                    </span>
                </div>
                <div className='unsucces-card rounded text-start my-4   p-2'>
                    <img src='asset/Rectangle 17850 (1).png' className='img-fluid' alt='' />
                    <h3 className='fs-22 fw-semibold mt-4 mb-3 px-3' style={{ color: "#30354C" }}>
                        5 Tips For Selling In Today’s Real Estate Market
                    </h3>
                    <span className='light-blue-text px-3'>
                        Read More &gt; &gt;
                    </span>

                </div>
                <div className='unsucces-card rounded text-start   p-2'>
                    <img src='asset/Rectangle 17850 (2).png' className='img-fluid' alt='' />
                    <h3 className='fs-22 fw-semibold mt-4 mb-3 px-3' style={{ color: "#30354C" }}>
                        Skip The Auction, Sell To Rent
                    </h3>
                    <span className='light-blue-text px-3'>
                        Read More &gt; &gt;
                    </span>

                </div>
            </div>

            {/* <div className='col-12  d-lg-none d-block mx-auto text-center'>
                <Slider {...settings} className='mx-auto'>
                    <div className='how-does-sell-card rounded text-center  h-100 '>
                        <p className=''>
                            Congrats! You're one step closer to selling your property! Our sales team will be in touch shortly. Don't worry, they don't bite (well, most of them don't).
                        </p>
                    </div>
                    <div className='how-does-sell-card rounded text-center h-100 '>
                        <p className=''>
                            We just need a little bit more info about you and your property, so we can match you with the perfect investors. Think of it as a virtual match-making service, but for property sales.
                        </p>
                    </div>
                    <div className='how-does-sell-card rounded text-center h-100'>
                        <p className=''>
                            A picture is worth a thousand words, so snap away! Upload photos of your property, so we can see what we're working with. Don't worry, we won't judge you for that avocado green bathroom.
                        </p>
                    </div>
                    <div className='how-does-sell-card rounded text-center h-100'>
                        <p className=''>
                            Great news! You've been approved! Now it's time to make it official. Sign on the dotted line and let's get this party started! Oh, and congrats on becoming a Sell2Rent client!
                        </p>
                    </div>
                </Slider>
            </div> */}

        </>
    )
}
