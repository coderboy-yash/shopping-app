"use client";

import MainBody from '@/components/MainBody';
import Nav from '@/components/Nav';
import VerticalNavbar from '@/components/VerticalNavbar';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [userMail, setuserMail] = useState("");
  const [userPass, setUserPass] = useState("");
  useEffect(() => {
    setuserMail(Cookies.get("userMail"));
    setUserPass(Cookies.get("userPass"));
  }, []);
  const mail = useRef(null);
  const pass = useRef(null);
  var oneMin = new Date(new Date().getTime() + 1 * 60 * 1000)
  const loginUser = (e) => {
    e.preventDefault();
    Cookies.set('userMail', mail.current?.value, { expires: oneMin });
    Cookies.set('userPass', pass.current?.value, { expires: oneMin });
    setuserMail(mail.current?.value);
    setUserPass(pass.current?.value);
  }

  return (
    <>
      {
        userMail !== undefined && userPass !== undefined
          ?
          <>
            <div className="">
              <Nav />
              <div className="flex">
                <div className="bg-neutral-800">
                  <VerticalNavbar />
                </div>
                <MainBody />
              </div>
            </div>
          </>
          :
          <>
            <div className="bg-[#F5F5F5] h-screen flex items-center justify-center">
              <div className="w-full md:w-9/12 lg:w-7/12 flex justify-center">
                <div className="hidden md:flex">
                  <Image className='h-full rounded-s-md object-cover' src="/images/login.png" alt='Login' height={1000} width={1000} />
                </div>
                <div className="p-4 rounded-r-md bg-white w-[80vw] flex flex-col gap-6">

                  <div className="">
                    <h3 className='font-semibold text-[22px]'>Login</h3>
                    <p className='font-light'>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>

                  <div className="">
                    <form action="post" className='flex flex-col gap-3' onSubmit={(e) => loginUser(e)}>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="email" className='text-sm font-light'>E-Mail</label>
                        <input required ref={mail} className='border rounded-md border-neutral-300 p-2' type="email" name='email' placeholder='Enter Your Email' />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label htmlFor="password" className='text-sm font-light'>Password</label>
                        <input required ref={pass} className='border rounded-md border-neutral-300 p-2' type="password" name="password" placeholder='Enter your password' />
                      </div>
                      <div className="relative h-6">
                        <button className='absolute right-0 font-semibold text-sm'>Forget password?</button>
                      </div>
                      <button className='bg-blue-600 w-full text-white py-2 rounded-md'>Login</button>
                    </form>
                  </div>

                  <div className="">
                    <div className="flex items-center">
                      <hr className="flex-grow border-t border-neutral-200" />
                      <p className='mx-2 text-[12px] text-neutral-400'>or</p>
                      <hr className="flex-grow border-t border-neutral-200" />
                    </div>
                    <div className="">
                      <button className='border border-neutral-600 w-full p-2 mt-4 rounded-md'>Register now</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </>
      }
    </>
  )
}
