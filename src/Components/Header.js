import React from 'react';
import { Link } from 'react-router-dom'
import RatePicker from './RatePicker'
export default function Header() {
    return (
        <header>
            <div className="wrapper">
                <Link to='/coins'>
                    <span className="nav-item ">Coins</span>
                </Link>
                <Link to='/exchanges'>
                    <span className="nav-item">Exchanges</span>
                </Link>
                <RatePicker />
            </div>
        </header>
    )
}