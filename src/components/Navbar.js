import React from 'react'

export default function Navbar() {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
            >
                <a href="index.html">
                    <h1 className='text-3xl font-bold text-cyan-600'><i class="fa-brands fa-hive"></i> BlogPedia</h1>
                </a>
            </div>
        </nav>
    )
}
