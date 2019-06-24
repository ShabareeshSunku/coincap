import React from 'react';
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header>
            <Link to='/Assets'>
                <span className="nav-item ">Assets</span>
            </Link>
            <Link to='/Exchanges'>
                <span className="nav-item">Exchanges</span>
            </Link>
        </header>
    )
}