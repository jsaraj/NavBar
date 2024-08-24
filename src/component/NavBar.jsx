import React, { useState } from 'react'
import { links, social, logoSite } from './Data'
import { BsBorderWidth ,BsXLg  } from "react-icons/bs";
import { VscNoNewline } from 'react-icons/vsc';


function NavBar() {

    const [showMenu, setShowMenu] = useState(false);
    console.log(showMenu)
    return (
        <>
            <nav className='flex justify-center items-center border-b-2 bg-gray-500 py-1 max-md:bg-transparent max-md:border-b-0'>

                <div className='flex w-11/12 max-md:relative '>
                    <div>
                        <div className='md:hidden pt-3 '>
                            {
                                showMenu ?   <BsXLg  size={28} onClick={() => setShowMenu(!showMenu)} />:  <BsBorderWidth size={28} onClick={() => setShowMenu(!showMenu)} />
                            }
                            
                        </div>
                        <div className='mr-10 max-md:w-full max-md:hidden'>
                            <a href={logoSite.url}><img className='h-24 cursor-pointer' src={logoSite.src}></img></a>
                        </div>

                    </div>
                    <div className={`${showMenu ? 'max-md:h-96 w-10/12 max-md:absolute max-md:top-10 max-md:w-7/12 rounded-md max-md:bg-gray-400 transition ease-in-out duration-300	' : 'max-md:overflow-hidden max-md:h-0 w-10/12 max-md:absolute max-md:top-10 max-md:w-7/12 rounded-md max-md:bg-gray-400 transition ease-in-out duration-100'}`} >
                        <div className='md:hidden max-md:px-5 max-md:pt-2 flex justify-center'>
                            <a href={logoSite.url}><img className='h-14 cursor-pointer' src={logoSite.src}></img></a>
                        </div>
                        <ul className='max-md:px-5 max-md:pb-5'>
                            {
                                links.map((link) => {
                                    return (
                                        <li className='inline-block pr-8 pt-8 text-lg font-medium  max-md:block ' key={link.id}>
                                            <a className='hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500 pb-2' href={link.url}>{link.text}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
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