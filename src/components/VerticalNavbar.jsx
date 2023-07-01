"use client";

import { motion } from "framer-motion"
import React, { useState } from 'react'

import VerticalNavComponent from "./VerticalNavComponent";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const VerticalNavbar = () => {
    const [show, setShow] = useState(false);
    return (

        <div className="relative">
            {/* <div className={`top-4 left-5 absolute text-2xl flex lg:hidden `} onClick={() => setShow(show => !show)}>
                <AiOutlineMenuUnfold />
            </div>
            <div className="absolute">
                {
                    show &&
                    <div className="flex lg:hidden">
                        <motion.div initial={{ left: -200 }} animate={{ left: 0 }} exit={{ left: -200 }} className=' bg-neutral-800 text-white min-h-fit h-full '>
                            <div onClick={() => setShow(show => !show)} className="bg-neutral-800">Close</div>
                            <div className="bg-neutral-800">
                                <VerticalNavComponent />
                            </div>
                        </motion.div>
                    </div>
                }
            </div> */}
            <div className="hidden lg:flex">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='relative bg-neutral-800 text-white min-h-fit h-full '>
                    <VerticalNavComponent />
                </motion.div>
            </div>
        </div>
    )
}

export default VerticalNavbar