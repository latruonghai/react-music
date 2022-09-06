import React from 'react'
import { useState } from "react";
import { FaTshirt } from 'react-icons/fa';
import { RiVipDiamondLine } from 'react-icons/ri';
import { BsUpload } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { BsFillPeopleFill } from 'react-icons/bs';

const Navbar = () => {
  const Menus = [
    { id: 0 ,name: "Chủ đề", icon: <FaTshirt/>},
    { id: 1 ,name: "Vip", icon: <RiVipDiamondLine/>},
    { id: 2 ,name: "Tải lên", icon: <BsUpload/>},
    { id: 3 ,name: "Cài đặt", icon: <FiSettings/>},
  ];
  const [active, setActive] = useState(-1);
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
  return (
    <div className={scrolled ? "w-full fixed z-20 bg-[#171717] drop-shadow-xl justify-between items-center flex" : "w-full fixed top-0 right-0 z-20 bg-[#171717] justify-between items-center flex"}>
      <div className="relative pl-96 left-0">
        <div className="flex absolute inset-y-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" className="block p-3 pl-10 w-96 text-sm text-gray-900 dark:bg-stone-800 rounded-full focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500" placeholder="Tìm kiếm bài hát, nghệ sĩ"/>
        </div>
      <ul className="flex justify-end items-center">   
        <div className="inline-flex pr-10 justify-center items-center">
          {Menus.map((menu, i) => (
          <li key={i} className="w-15 text-white mx-1 items-center">
            <a
              className="flex flex-col text-center pt-5 text-xs place-items-center"
              onMouseEnter={() => setActive(menu.id)}
              onMouseLeave={() => setActive(-1)}
            >
              <span
                className="text-xl cursor-pointer"
              >
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 dark:bg-stone-800 rounded-full">
                    <span className="font-medium text-gray-600 dark:text-gray-300">{ menu.icon}</span>
                </div>
              </span>
              <span
                className={` ${
                  active === menu.id
                    ? "translate-y-2 duration-500 opacity-100 text-xs"
                    : "opacity-0"
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
          ))}
          <div className="cursor-pointer mx-1 flex overflow-hidden relative items-center w-10 h-10 rounded-full ">
            <img src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t39.30808-6/294393289_1446222785802572_5091573743168910914_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8-eDUx2Z0twAX_wbm_d&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT-aOFSZgZkNNqQnMqpqUarH4Uv0i8UJ6GCGrfXOcIb0-g&oe=630ED095" alt=""/>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Navbar