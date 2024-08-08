import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navItems = [
        {
            id:1,
            name: "Home",
            path: "/"
        },
        {
            id:2,
            name: "Gallery",
            path: "/gallery"
        },
        {
            id:3,
            name: "Contact",
            path: "/contact"
        },
        {
            id:4,
            name: "About",
            path: "/about"
        },
    ]
  return (
    <nav className='fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white'>
        <div className='container px-4 flex justify-between items-center h-16'>
            <h3 className='text-2xl font-bold'>Travel</h3>
            <div className='hidden md:flex space-x-4 text-sm font-bold items-center'>
                {navItems.map((item) => (
                    <Link key={item.id} to={item.path} className='px-6 py-2 hover:bg-gray-600 hover:text-white'>{item.name}</Link>
                ))}
                <button className='py-2 px-6 border bg-gray-300'>Login</button>
            </div>
            <div className='md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>
        {isOpen && (
            <div className='md:hidden flex space-y-4 py-4 flex-col bg-white items-center'>
                {navItems.map((item) => (
                    <Link key={item.id} onClick={() => setIsOpen(!isOpen)} to={item.path} className='px-6 py-2 hover:bg-gray-600 hover:text-white'>{item.name}</Link>
                ))}
                <button className='py-2 px-6 border bg-gray-300'>Login</button>
            </div>
        )}
    </nav>
  )
}

export default Navbar