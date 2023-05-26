import React from 'react'
import SuccessCard from './SuccessCard'

export default function CardParent() {
    return (
        <div className='container-fluid py-5 dark-blue '>
            <div className='row w-80 mx-auto'>
                <div className='col-xxl-10  col-12 text-center mx-auto px-0 '>
                    <p className='fs-22 fw-semibold mb-4 light-green-text'>
                        How to Sell Your Home Like a Pro:
                    </p>
                    <h3 className='fs-40  fw-bolder mb-4'>
                        What to Expect After Submitting Your Info!
                    </h3>
                </div>
            </div>
            <div className='row w-90 mx-auto text-center'>
                <SuccessCard />
            </div>
        </div>
    )
}
