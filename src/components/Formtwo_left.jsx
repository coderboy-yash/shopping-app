import React from 'react'

const Formtwo_left = () => {
    return (
        <div className='bg-white p-6 rounded-lg flex flex-col gap-4'>
            <div className="flex flex-col gap-1">
                <p className='font-semibold text-[22px]'>Form title</p>
                <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
            </div>
            <div className="flex flex-col gap-1">
                <label>Label title</label>
                <input className='border border-neutral-300 p-2 rounded-md' type="text" name="first1" placeholder='Placeholder content' />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="select">Label title</label>
                <select className='border border-neutral-300 p-2 rounded-md' name="select">
                    <option value="">Choose</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                </select>
            </div>
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col gap-1">
                    <label>Label title</label>
                    <input className='border border-neutral-300 p-2 rounded-md' type="text" name="first2" placeholder='Placeholder content' />
                </div>
                <div className="flex flex-col gap-1">
                    <label>Label title</label>
                    <input className='border border-neutral-300 p-2 rounded-md' type="text" name="first3" placeholder='Placeholder content' />
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="textarea">Label title</label>
                <textarea className='border border-neutral-300 p-4 rounded-md' placeholder="Placeholder content" name="textarea" id="textarea" cols="0" rows="5"></textarea>
            </div>
        </div>
    )
}

export default Formtwo_left