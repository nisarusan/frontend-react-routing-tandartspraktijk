import React from 'react';
import './Navigation.css';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="nav-container">
                <h4>De Tandenborstel</h4>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/gaatjes">Gaatjes</NavLink></li>
                    <li><NavLink to="/afspraken">Afspraak maken</NavLink></li>
                    <li><NavLink to="tanden-bleken">Tanden bleken</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;