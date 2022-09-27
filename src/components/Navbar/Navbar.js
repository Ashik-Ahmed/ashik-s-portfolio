import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-gray-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg font-bold">
                        <li><a href='#works' className='btn btn-ghost normal-case text-lg font-bold text-sky-500'>Works</a></li>
                        <li><a href='#skills' className='btn btn-ghost normal-case text-lg font-bold text-sky-500'>Skills</a></li>
                        <li><a href='#contact' className='btn btn-ghost normal-case text-lg font-bold text-sky-500'>Contact</a></li>
                    </ul>
                </div>
                <a className="flex gap-3 normal-case text-sky-500 text-4xl md:ml-6 font-bold shadow-sky-200 px-2 shadow-md bg=gray-200">Ashik <span className='text-pink-400 text-4xl font-bold -ml-2'>.</span> </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-lg font-bold">
                    <li><a href='#works' className='btn btn-ghost normal-case text-lg font-bold text-sky-500'>Works</a></li>
                    <li><a href='#skills' className='btn btn-ghost normal-case text-lg font-bold text-sky-500'>Skills</a></li>
                    <li><a href='#contact' className='btn btn-ghost normal-case text-lg font-bold text-sky-500'>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-sm normal-case border-0 text-white bg-sky-400 hover:bg-sky-500 shadow-xl mr-6">Let's Talk</button>
            </div>
        </div>
    );
};

export default Navbar;