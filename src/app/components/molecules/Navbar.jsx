'use client';
import Hamburger from '../atoms/Hamburger'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [scrollTop, setScrollTop] = useState(0)

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
        document.addEventListener('scroll', onScroll)
    }, [])
    return (
        <header className={`bg-transparent ${scrolling ? "navbar-fixed" : ""} top-0 left-0 w-full flex items-center z-10`}>
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="#home" className="font-bold text-lg text-primary block py-6">Aditya Pratama</a>
                    </div>
                    <div className="flex items-center px-4">
                        <Hamburger />
                    </div>
                </div>
            </div>
        </header>
    )
}