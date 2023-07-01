"use client"

import React, { useState } from 'react'
import { BiChevronsLeft, BiChevronsRight, BiSolidEdit } from "react-icons/bi"
import { MdDeleteForever } from "react-icons/md"

const Table = () => {
    const [active, setActive] = useState(2);
    const tab = [1, 2, 3, 4, 5];
    const data = [
        { c1: "Etiam purus in", c2: "Curabitur donec duis", c3: "Curabitur donec duis" },
        { c1: "Duis eget habitant", c2: "At amet odio", c3: "Commodo eget scelerisque" },
        { c1: "Aliquam velit lacus", c2: "Pellentesque egestas placerat", c3: "Tortor habitant sit" },
        { c1: "Fermentum scelerisque ultricies", c2: "Morbi sagittis nulla", c3: "Quam semper quis" },
        { c1: "Integer semper pellentesque", c2: "Neque turpis enim", c3: "Egestas non sociis" },
        { c1: "Parturient at id", c2: "Sem neque, mattis", c3: "Pellentesque facilisis massa" },
        { c1: "Amet, pretium eget", c2: "In ipsum volutpat", c3: "Ut feugiat egestas" },
        { c1: "Risus consequat sollicitudin", c2: "Adipiscing odio nulla", c3: "Pharetra id sit" },
        { c1: "Risus consequat sollicitudin", c2: "Adipiscing odio nulla", c3: "Pharetra id sit" }
    ]
    return (
        <div className="flex flex-col gap-6">
            <div className="rounded-md overflow-x-auto">
                <table className="border border-neutral-300 min-w-full">
                    <thead>
                        <tr className='bg-neutral-300 text-left '>
                            <th className="text-lg font-medium px-4 py-2 border border-r-neutral-100">Column-1</th>
                            <th className="text-lg font-medium px-4 py-2 border border-r-neutral-100">Column-2</th>
                            <th className="text-lg font-medium px-4 py-2 border border-r-neutral-100">Column-3</th>
                            <th className="text-lg font-medium px-4 py-2 ">Column-4</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-neutral-100' : 'bg-white'}>
                                <td className="border px-4 py-2">{row.c1}</td>
                                <td className="border px-4 py-2">{row.c2}</td>
                                <td className="border px-4 py-2">{row.c3}</td>
                                <td className="border px-4 py-2 flex gap-3">
                                    <button className="bg-blue-700 text-white flex items-center p-1 rounded-sm gap-1" onClick={() => alert(`Edit row ${index + 1}`)}>
                                        <BiSolidEdit className='w-[14px] h-[14px]' />
                                        <p className='text-[12px]'>Edit</p>
                                    </button>
                                    <button className="bg-amber-600 text-white flex items-center p-1 rounded-sm gap-1" onClick={() => alert(`Delete row ${index + 1}`)}>
                                        <MdDeleteForever className='w-[14px] h-[14px]' />
                                        <p className='text-[12px]'>Delete</p>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center gap-2 justify-center">
                <BiChevronsLeft />
                <>
                    {
                        tab.map((val, index) => (
                            <div key={index}
                                className={`rounded-md h-[35px] w-[35px] flex justify-center items-center border border-neutral-400 font-medium text-sm cursor-pointer ${active === index + 1 ? " bg-blue-600 text-white" : ""}`}
                            >{val}</div>
                        ))
                    }
                </>
                <BiChevronsRight />
            </div>
        </div>
    )
}

export default Table