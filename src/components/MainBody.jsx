"use client";

import { motion } from "framer-motion"
import React, { useState } from 'react'
import { BsPlusLg } from "react-icons/bs"
import { CiSettings } from "react-icons/ci"
import { FiSearch } from "react-icons/fi"
import Counter from './Counter'
import DisplayForm from './DisplayForm'
import Formone from './Formone'
import Formtwo from './Formtwo'
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import VerticalNavComponent from "./VerticalNavComponent";

const MainBody = () => {
    const [search, setSearch] = useState(false);
    const [addNew, setAddNew] = useState(false);
    const [show, setShow] = useState(false);
    const popup = {
        hidden: { x: -200, opacity: 0 },
        show: { x: 0, opacity: 1 },
        transition: { ease: "easeOut", duration: 0.2 }
    }
    return (
        <div className='bg-neutral-200 w-full '>
            <div className="absolute z-10">
                {
                    show && <motion.div variants={popup} transition="transition" initial="hidden" animate="show" exit="hidden" className="flex lg:hidden">
                        <div className=' bg-neutral-800 text-white min-h-fit h-full '>
                            <div onClick={() => setShow(show => !show)} className="bg-neutral-800 px-6 py-2 mt-3">Close</div>
                            <div className="bg-neutral-800">
                                <VerticalNavComponent />
                            </div>
                        </div>
                    </motion.div>
                }
            </div>
            <div className="flex flex-row px-6  bg-white h-16 items-center justify-between">
                <div className="flex-row gap-6 flex">
                    <div className="flex lg:hidden text-2xl" onClick={() => setShow(show => !show)}>
                        <AiOutlineMenuUnfold />
                    </div>
                    <div className="hidden md:flex gap-6">
                        <h1 className='font-semibold text-lg lg:text-[22px]'>Add new post</h1>
                        <div className="flex-row gap-6 flex">
                            <div className="flex flex-row items-center gap-1">
                                <BsPlusLg />
                                <p>Add Content</p>
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                <CiSettings />
                                <p>Settings</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex md:hidden">
                    <h1 className='font-semibold text-base lg:text-[22px]' onClick={() => setAddNew(addNew => !addNew)}>Add new post</h1>
                    {addNew && <>
                        <div className="absolute w-max flex flex-col gap-2 bg-white/80 top-8 p-4 backdrop-blur-lg border-2 border-neutral-400">
                            <div className="flex flex-row items-center gap-1">
                                <BsPlusLg />
                                <p>Add Content</p>
                            </div>
                            <div className="flex flex-row items-center gap-1">
                                <CiSettings />
                                <p>Settings</p>
                            </div>
                        </div>
                    </>}
                </div>
                <div className="border relative border-neutral-300 flex items-center  rounded-md">
                    <div className="hidden lg:flex items-center">
                        <input className='p-2 ' type="text" name="search" placeholder='Search content..' />
                        <div className="p-1 cursor-pointer">
                            <FiSearch className='text-[20px]' />
                        </div>
                    </div>
                    <div className="flex items-center lg:hidden">
                        {
                            search && <motion.input initial={{ x: 200 }} animate={{ x: 0 }} exit={{ x: 200 }} className='border border-neutral-300 rounded-md bg-neutral-50 absolute top-10 right-0 p-2 ' type="text" name="search" placeholder='Search content..' />
                        }
                        <div className=" p-1 cursor-pointer" onClick={() => setSearch(search => !search)}>
                            <FiSearch className='text-[20px]' />
                        </div>
                    </div>
                </div>
            </div>

            <Counter />
            <DisplayForm />
            <Formone />
            <Formtwo />
        </div>
    )
}

export default MainBody