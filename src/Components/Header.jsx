import React, { useEffect, useState } from "react";
import logo from "../assets/images/brand.logo.png";
import { Link, useLocation } from "react-router-dom";
import "../CSS/header.css";

function Header() {
    const [activeItem, setActiveItem] = useState("Home");
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path === "/") {
            setActiveItem("Home");
        } else if (path === "/page3") {
            setActiveItem("Shop");
        } 
    }, [location]);

    const handleClick = () => {
        const menu = document.querySelector(".sidebar");
        if (menu) {
            menu.style.display = "block";
        }
    };

    const handleOtherClick = () => {
        const menu = document.querySelector(".sidebar");
        if (menu) {
            menu.style.display = "none";
        }
    };

    useEffect(() => {
        function handleClickOutside(event) {
            const menu = document.querySelector(".sidebar");
            const menuButton = document.querySelector(".menu");
            if (menu && !menu.contains(event.target) && !menuButton.contains(event.target)) {
                menu.style.display = "none";
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleNavClick = (e) => {
        const liElement = e.target.closest('li');
        if (liElement) {
            const aElement = liElement.querySelector('a');
            if (aElement) {
                const value = aElement.textContent.trim();
                setActiveItem(value);
            }
        }
    };

    return (
        <section className="header">
            <div className="left">
                <a href="#">
                    <img src={logo} alt="brand_logo" />
                </a>
                <ul className="navbar" onClick={handleNavClick}>
                    <li>
                        <Link 
                            to="/" 
                            className={activeItem === "Home" ? "active" : ""}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <a className={activeItem === "About" ? "active" : ""}>
                            About
                        </a>
                    </li>
                    <li>
                        <a className={activeItem === "Contact" ? "active" : ""}>
                            Contact
                        </a>
                    </li>
                    <li>
                        <Link 
                            to="page3" 
                            className={activeItem === "Shop" ? "active" : ""}
                        >
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="page4"
                         className={activeItem === "Login" ? "active" : ""}>
                            Login
                        </Link>
                    </li>
                </ul>
                <ul className="sidebar" onClick={handleNavClick}>
                    <li onClick={handleOtherClick}>
                        <i className="fa-solid fa-x"></i>
                    </li>
                    <li>
                        <Link 
                            to="/" 
                            className={activeItem === "Home" ? "active" : ""}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <a className={activeItem === "About" ? "active" : ""}>
                            About
                        </a>
                    </li>
                    <li>
                        <a className={activeItem === "Contact" ? "active" : ""}>
                            Contact
                        </a>
                    </li>
                    <li>
                         <Link 
                            to="page3" 
                            className={activeItem === "Shop" ? "active" : ""}
                        >
                            Shop
                        </Link>
                    </li>
                    <li>
                    <Link to="page4"
                         className={activeItem === "Login" ? "active" : ""}>
                            Login
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="search-cart">
                <div className="container-input">
                    <input
                        type="text"
                        placeholder="Search"
                        name="text"
                        className="input"
                    />
                </div>
                <a href="#">
                    <i className="fa-solid fa-cart-shopping cart-btn"></i>
                </a>
                <svg
                    onClick={handleClick}
                    className="menu"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#434343"
                >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </div>
        </section>
    );
}

export default Header;
