import React from 'react'
import { links, social, logoSite } from './Data'

function NavBar() {
    return (
        <>
            <div className='flex justify-center items-center border-b-2 bg-gray-500 py-1'>
                <div className='flex w-11/12'>
                    <div className='w-1/12 mr-10'>
                        <a href={logoSite.url}><img className='h-24' src={logoSite.src}></img></a>
                    </div>
                    <div className='w-10/12'>
                        <ul>
                            {
                                links.map((link) => {
                                    return (
                                        <li className='inline-block pr-8 pt-8 text-lg font-medium ' key={link.id}>
                                            <a className='hover:text-orange-500 hover:border-b-2 hover:border-b-orange-500 pb-2' href={link.url}>{link.text}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='w-1/12'>
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

            </div>


        </>
    )
}

export default NavBar