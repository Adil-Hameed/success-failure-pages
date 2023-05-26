import React from 'react'
import UnsuccessCard from './UnsuccessCard'

export default function CardParent() {
    return (
        <div className='container-fluid py-5 dark-blue '>
            <div className='row w-80 mx-auto'>
                <div className='col-lg-8  col-12 text-center mx-auto px-0 '>
                    <p className='fs-22 fw-semibold mb-4 light-green-text'>
                        We understand that selling a property can be stressful, so we invite you to explore our blog for helpful resources and information to navigate this process.
                    </p>
                    <h3 className='fs-33 mb-3 fw-bolder mb-5'>
                        Take a look at some of our popular blog posts that may provide you with the guidance you need:
                    </h3>
                </div>
            </div>
           
            <div className='row w-90 text-center   position-relative mx-auto py-lg-5'>
            <UnsuccessCard />
             </div>
        </div>
    )
}
