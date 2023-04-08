import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='header-area bg-[#FFF3EA] py-[20px]'>
            <div className="container mx-auto">
                <div className="row flex flex-wrap w-full">
                    <div className="logo-area w-[20%]">
                        <Link to="/"><img src="https://wp.alithemes.com/html/agon/html-tailwindcss/demo/assets/images/logo.svg" alt="" /></Link>
                    </div>
                    <div className="menu-area w-[80%]">
                        <nav>
                            <ul >
                                
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="about">About</Link></li>
                                <li><Link to="meals">All Meal</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;