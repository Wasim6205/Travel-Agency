import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-800 p-4 text-white'>
        <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <h2 className='text-2xl font-bold mb-4'>Travel Agency</h2>
                <p className='mb-4'>Your trusted partner for unforgettable travel experiences. Explore the world with us.</p>
            </div>
            <div className='flex flex-col md:items-center'>
                <h4 className='text-lg font-semibold'>Quick Links</h4>
                <div className='flex flex-col mt-4 space-y-2'>
                    <Link to='/'>Home</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                </div>
            </div>
            <div>
                <h2 className='text-xl font-bold mb-4'>Follow Us</h2>
                <div className='flex space-x-4 mb-4'>
                    <FaFacebook className='text-blue-500 hover:text-blue-600' />
                    <FaInstagram className='text-blue-500 hover:text-blue-600' />
                    <FaTwitter className='text-blue-500 hover:text-blue-600' />
                    <FaYoutube className='text-blue-500 hover:text-blue-600' />
                </div>
                <form className='flex items-center justify-center mt-8'>
                    <input className='w-full p-2 rounded-l-lg bg-gray-900 border border-gray-600' type="email" placeholder='Enter Your Email' />
                    <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded-r-lg bordr border-blue-600'>Subscribe</button>
                </form>
            </div>
        </div>

        <div className='flex justify-between mt-8 border-t border-gray-700 pt-4'>
            <p>&copy; 2024 Travel Agency. All rights reserved</p>
            <div className='flex space-x-4 mt-4 md:mt-0'>
                <Link to=''>Privacy Policy</Link>
                <Link to=''>Terms Of Service</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer