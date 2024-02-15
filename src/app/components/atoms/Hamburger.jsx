'use client';
import { useEffect, useState } from "react"
export default function Hamburger() {
    const [toggle, setToggle] = useState(false);

    function handleClick() {
        setToggle(!toggle)
    }
    return (
        <button onClick={handleClick} id="hamburger" className={`block absolute right-4 ${toggle ? "hamburger-active" : ""}`}>
            <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
        </button>
    )
}