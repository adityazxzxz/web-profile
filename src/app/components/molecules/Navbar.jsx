'use client';
import Hamburger from '../atoms/Hamburger'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0)
    const [toggle, setToggle] = useState(true);

    const hideNavbar = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        function onScroll() {
            let curPosition = window.scrollY
            if (curPosition > scrollTop) {
                setScrolling(true)
            } else {
                setScrolling(false)
            }
            setScrollTop(curPosition <= 0 ? 0 : curPosition)
        }

        function onResize() {
            if (window.innerWidth >= 1024) {
                setToggle(true)
            } else {
                setToggle(false)
            }
        }
        window.addEventListener('resize', onResize)
        document.addEventListener('scroll', onScroll)
    }, [])
    return (
        <header className={`bg-transparent absolute ${scrolling ? "navbar-fixed" : ""} top-0 left-0 w-full flex items-center z-10`}>
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div>
                        <a href="#home" className="font-bold text-lg text-primary block py-6">Aditya Pratama</a>
                    </div>
                    <div className="flex items-center px-4">
                        <Hamburger onClick={hideNavbar} isActive={toggle} />
                        <nav id='nav-menu' className={`${toggle ? '' : 'hidden'} absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
                            <ul className='block lg:flex'>
                                <li className='group'>
                                    <a href="#home" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Home</a>
                                </li>
                                <li className='group'>
                                    <a href="#about" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>About Me</a>
                                </li>
                                <li className='group'>
                                    <a href="#portfolio" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Portfolio</a>
                                </li>
                                <li className='group'>
                                    <a href="#clients" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Clients</a>
                                </li>
                                <li className='group'>
                                    <a href="#blog" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Blog</a>
                                </li>
                                <li className='group'>
                                    <a href="#contact" className='text-base text-dark py-2 mx-8 flex group-hover:text-primary'>Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}