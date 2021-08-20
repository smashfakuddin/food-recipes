import React from 'react';

const Nav = () => {
    return (
        <div className=' bg-green-50  h-16 flex justify-between items-center px-4'>
            <div>
                <h1 className='uppercase font-bold text-3xl text-yellow-600 font-mono cursor-pointer'>
                    food recipes
                </h1>
            </div>
            <div className="px-4 cursor-pointer md:hidden">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </div>
            <div className='md:block hidden'>
                <a href="/home" className="text-sm mr-3 ">Home</a>
                <a href="/about" className="text-sm mr-3 ">About</a>
                <a href="/signup" className='text-sm bg-gray-700 text-white p-2 rounded'>Sign Up</a>
            </div>
        </div>
    );
};

export default Nav;