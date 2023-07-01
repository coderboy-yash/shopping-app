import React from 'react'
import Formtwo_left from './Formtwo_left'
import Formtwo_right from './Formtwo_right'

const Formtwo = () => {
    return (
        <div className='grid p-4 mt-3 mx-3 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="col-span-1 lg:col-span-2">
                <Formtwo_left />
            </div>
            <Formtwo_right />
        </div>
    )
}

export default Formtwo