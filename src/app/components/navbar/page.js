"use client";

import { adminNavOptions, navOptions } from "@/utils";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Dialog } from '@headlessui/react'
import Modal from "../modal/page";
function Navlinks({isModalView=true}) {
  const router = useRouter(); // Initialize the router object
  return (
    <div>
      <ul  className={`flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${
          isModalView ? "flex-column" : "flex-row"
        }`}>
        {navOptions.map((item) => (
          <li
            className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
            key={item.id}
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
    
  )
}
export default function Navbar() {
  const isAdminView = false;
  const isAuthUser = false;
  const [show, setShow] = useState(false);
  let [isOpen, setIsOpen] = useState(false)
  const user = {
    role: 'admin',

  }
  return (
    <div className="bg-white w-full p-6 border-b-2">
      <div className="flex justify-between mx-auto max-w-screen-xl">
        <div>
          <span className='text-2xl font-bold'>E Commerce</span>
        </div>
        <div className="hidden md:flex ">
          <Navlinks />
        </div>
        <div className="flex">
          {!isAdminView && isAuthUser ?
            <>
              <button className='bg-black text-white px-4 py-2 rounded-xl'>Account</button>
              <button className='bg-black text-white px-4 py-2 rounded-xl'>Cart</button>

            </>

            :
            null
          }
          {/* {
          user?.role === 'admin' && isAuthUser ? <button className='bg-black text-white px-4 py-2 rounded-xl'>client view</button> : <button>admin view</button>
        } */}
          {isAuthUser ? (
            <button
              onClick={handleLogout}
              className={
                "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
              }
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className={
                "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white"
              }
            >
              Login
            </button>
          )}
          <button
            className="md:hidden"
            onClick={() => setShow(true)}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>

          {/* modal to show responsive menu */}

          <Modal show={show} setShow={setShow} mainContent={
            <Navlinks isModalView={true} />
          } />
        </div>

      </div>

    </div>
  )
}
