import React from 'react'
import { motion } from "framer-motion";

const Popup = ({ isVisible }) => {
    const popup = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 }
    }

    if (!isVisible) {
        return null;
    }
    if (isVisible) {
        return (
            <div className='relative w-full flex justify-center'>
                <motion.div variants={popup} initial="hidden" animate="visible" exit="exit" className="absolute  w-fit text-green-500 backdrop-blur-lg bg-white border border-green-700 top-2 px-4 py-2 rounded-md">
                    <p>Login Successful</p>
                </motion.div>
            </div>
        )
    }
}

export default Popup