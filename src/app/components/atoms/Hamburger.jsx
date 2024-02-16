'use client';
import { useEffect, useState } from "react"
export default function Hamburger(props) {

    return (
        <button onClick={props.onClick} id="hamburger" className={`lg:hidden block absolute right-4 ${props.isActive ? "hamburger-active" : ""}`}>
            <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
            <span className="hamburger-line transition duration-300 ease-in-out"></span>
            <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
        </button>
    )
}