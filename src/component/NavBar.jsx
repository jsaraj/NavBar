import React, { useEffect, useRef, useState } from 'react'
import { links, social, logoSite } from './Data'
import { BsBorderWidth, BsXLg } from "react-icons/bs";



function NavBar() {

    const [showMenu, setShowMenu] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {

        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showMenu) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
            linksContainerRef.current.style.overflow = "hidden"
        } else {
            linksContainerRef.current.style.height = "0%";
            linksContainerRef.current.style.overflow = "auto"
        }

    }, [showMenu])


    return (
        <>
            <nav className='flex justify-center items-center border-b-2 bg-gray-500 py-1 max-md:bg-transparent max-md:border-b-0'>

                <div className='flex w-11/12 max-md:relative '>
                    <div>
                        <div className='md:hidden pt-3 '>
                            {
                                showMenu ? <BsXLg size={28} onClick={() => setShowMenu(!showMenu)} /> : <BsBorderWidth size={28} onClick={() => setShowMenu(!showMenu)} />
                            }

                        </div>
                        <div className='mr-10 max-md:w-full max-md:hidden'>
                            <a href={logoSite.url}><img className='h-24' src={logoSite.src}></img></a>
                        </div>

                    </div>
                    <div className='w-10/12 max-md:absolute max-md:top-10 max-md:w-7/12 rounded-md max-md:bg-gray-400 transition ease-in-out duration-300' ref={linksContainerRef} >
                        <div ref={linksRef}>
                            <div className='md:hidden max-md:px-5 max-md:pt-2 flex justify-center'>
                                <a href={logoSite.url}><img className='h-14 cursor-pointer' src={logoSite.src}></img></a>
                            </div>
                            <ul className='max-md:px-5 max-md:pb-5' >
                                {
                                    links.map((link) => {
                                        return (
                                            <li className='inline-block md:pr-8 md:pt-8 md:h-20 text-lg max-md:text-sm font-medium  max-md:block max-md:border-b-2 max-md:border-gray-500 max-md:py-3' key={link.id}>
                                                <a className='hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500 pb-2' href={link.url}>{link.text}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='w-1/12 max-md:hidden'>
                        <ul>
                            {
                                social.map((item) => {
                                    return (
                                        <li className='inline-block pr-3 pt-8 ' key={item.id}>
                                            <a href={item.url}>{item.icon}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>



            </nav>


        </>
    )
}

export default NavBar