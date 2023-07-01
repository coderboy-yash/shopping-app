import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai"
import Table from './Table'
const DisplayForm = () => {
    return (
        <div className='bg-white mx-6 p-6 rounded-lg flex flex-col gap-4'>
            <div className="">
                <p className='font-semibold text-[22px]'>Form title</p>
                <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
            </div>
            <div className="border border-red-400 rounded-lg bg-red-50 flex items-center p-2 gap-2">
                <AiOutlineInfoCircle className='text-red-900' />
                <p className='text-red-900'>Senectus malesuada suspendisse bibendum elit amet vitae.</p>
            </div>
            <Table />
        </div>
    )
}

export default DisplayForm