"use client";

import React, { useEffect } from 'react'
import { AiOutlineShop } from 'react-icons/ai'
import { FiList, FiUsers } from 'react-icons/fi'
import { MdOutlineShoppingBag } from "react-icons/md"
import { animate, motion, useMotionValue, useTransform } from "framer-motion"

const Counter = () => {
    const sale = useMotionValue(0);
    const expense = useMotionValue(0);
    const visitor = useMotionValue(0);
    const order = useMotionValue(0);
    const sales = useTransform(sale, Math.round);
    const expenses = useTransform(expense, Math.round);
    const visitors = useTransform(visitor, Math.round);
    const orders = useTransform(order, Math.round);
    useEffect(() => {
        const animation1 = animate(sale, 2456, { duration: 5 });
        const animation2 = animate(expense, 3326, { duration: 5 });
        const animation3 = animate(visitor, 5325, { duration: 5 });
        const animation4 = animate(order, 1326, { duration: 5 });

        animation1.stop;
        animation2.stop;
        animation3.stop;
        return animation4.stop;
    }, []);
    return (
        <div className='grid gap-2 sm:gap-6 p-4 mx-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
            <div className="flex bg-white p-5 gap-4 rounded-lg">
                <MdOutlineShoppingBag className='text-orange-600 w-8 h-9 ' />
                <div className="">
                    <p className="font-light text-[12px]">Total Sales</p>
                    <div className='font-semibold size-[22px] flex'>
                        $<motion.div>{sales}</motion.div>
                    </div>
                </div>
            </div>
            <div className="flex bg-white p-5 gap-4 rounded-lg">
                <AiOutlineShop className='text-violet-600 w-8 h-9 ' />
                <div className="">
                    <p className="font-light text-[12px]">Total Expenses</p>
                    <div className='font-semibold size-[22px] flex'>$
                        <motion.div className="">{expenses}</motion.div>
                    </div>
                </div>
            </div>
            <div className="flex bg-white p-5 gap-4 rounded-lg">
                <FiUsers className='text-emerald-600 w-8 h-9 ' />
                <div className="">
                    <p className="font-light text-[12px]">Total Visitors </p>
                    <div className='font-semibold size-[22px] flex'>$
                        <motion.div className="">{visitors}</motion.div>
                    </div>
                </div>
            </div>
            <div className="flex bg-white p-5 gap-4 rounded-lg">
                <FiList className='text-purple-600 w-8 h-9 ' />
                <div className="">
                    <p className="font-light text-[12px]">Total Orders</p>
                    <div className='font-semibold size-[22px] flex'>$
                        <motion.div className="">{orders}</motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter