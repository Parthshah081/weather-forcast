import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a href="./" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img className="w-[50px] h-[50px]" src="https://cdn3.iconfinder.com/data/icons/luchesa-vol-9/128/Weather-512.png"></img>
                        <span className="ml-3 text-xl">Weatherly</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link href={"/"} className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href={"/about"} className="mr-5 hover:text-gray-900">About Us</Link>
                        <Link href={"/weather"} className="mr-5 hover:text-gray-900">Weather</Link>
                        <Link href={"/contact"} className="mr-5 hover:text-gray-900">Contact Us</Link>
                    </nav>
                    <div className='flex space-x-2'>
                   <Link href={"/login"}><button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Login</button></Link>
                   <Link href={"/signup"}><button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Sign Up</button></Link>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Navbar
{/* <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>  */ }