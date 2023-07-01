import React from 'react'

const Formtwo_right = () => {
    return (
        <div className='bg-white p-6 rounded-lg'>
            <div className="flex flex-col gap-4">
                <p className='font-semibold text-[22px]'>Form title</p>
                <div className="flex flex-col gap-1">
                    <label htmlFor="first">Label title</label>
                    <input className='border border-neutral-300 p-2 rounded-md' type="text" name="first" placeholder='Placeholder content' />
                </div>
                <div className="flex flex-col gap-1">
                    <label >Label title</label>
                    <select className='border border-neutral-300 p-2 rounded-md' name="select" >
                        <option value="">Choose</option>
                        <option value="One">One</option>
                        <option value="Two">Two</option>
                        <option value="Three">Three</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="textarea">Label title</label>
                    <textarea className='border border-neutral-300 p-4 rounded-md' placeholder="Placeholder content" name="textarea" id="textarea" cols="0" rows="7"></textarea>
                </div>
                <div className="">
                    <button className='bg-blue-600 text-white font-medium w-full p-2 rounded-md'>Button title</button>
                </div>
            </div>
        </div>
    )
}

export default Formtwo_right