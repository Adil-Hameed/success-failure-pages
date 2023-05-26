import React from 'react'
import Slider from "react-slick";
import NextArrow from '../common/NextArrow';
import PreArrow from '../common/PreArrow';


export default function SuccessCard() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreArrow />,
    };

    return (
        <>
            <div className='col-12  d-lg-flex d-none  align-items-center  justify-content-center text-center px-0'>
                <div className='how-does-sell-card rounded text-center  h-100 '>
                    <p className=''>
                        Congrats! You're one step closer to selling your property! Our sales team will be in touch shortly. Don't worry, they don't bite (well, most of them don't).
                    </p>
                </div>
                <svg className='d-md-block d-none mx-xxl-5 mx-2' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0001 40.3334C32.1253 40.3334 40.3334 32.1253 40.3334 22.0001C40.3334 11.8749 32.1253 3.66675 22.0001 3.66675C11.8749 3.66675 3.66675 11.8749 3.66675 22.0001C3.66675 32.1253 11.8749 40.3334 22.0001 40.3334Z" fill="#40FF62" />
                    <path d="M19.6899 28.4717L26.1433 22L19.6899 15.5283" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='how-does-sell-card rounded text-center h-100 '>
                    <p className=''>
                        We just need a little bit more info about you and your property, so we can match you with the perfect investors. Think of it as a virtual match-making service, but for property sales.
                    </p>
                </div>
                <svg className='d-md-block d-none mx-xxl-5 mx-2' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0001 40.3334C32.1253 40.3334 40.3334 32.1253 40.3334 22.0001C40.3334 11.8749 32.1253 3.66675 22.0001 3.66675C11.8749 3.66675 3.66675 11.8749 3.66675 22.0001C3.66675 32.1253 11.8749 40.3334 22.0001 40.3334Z" fill="#40FF62" />
                    <path d="M19.6899 28.4717L26.1433 22L19.6899 15.5283" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='how-does-sell-card rounded text-center h-100'>
                    <p className=''>
                        A picture is worth a thousand words, so snap away! Upload photos of your property, so we can see what we're working with. Don't worry, we won't judge you for that avocado green bathroom.
                    </p>
                </div>
                <svg className='d-md-block d-none mx-xxl-5 mx-2' width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0001 40.3334C32.1253 40.3334 40.3334 32.1253 40.3334 22.0001C40.3334 11.8749 32.1253 3.66675 22.0001 3.66675C11.8749 3.66675 3.66675 11.8749 3.66675 22.0001C3.66675 32.1253 11.8749 40.3334 22.0001 40.3334Z" fill="#40FF62" />
                    <path d="M19.6899 28.4717L26.1433 22L19.6899 15.5283" stroke="#292D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className='how-does-sell-card rounded text-center h-100'>
                    <p className=''>
                        Great news! You've been approved! Now it's time to make it official. Sign on the dotted line and let's get this party started! Oh, and congrats on becoming a Sell2Rent client!
                    </p>
                </div>
            </div>

            <div className='col-12  d-lg-none d-block mx-auto text-center'>
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
            </div>

        </>
    )
}
