import logo from "../assets/images/brand.logo.png"
import { Link } from "react-router-dom";
import "../CSS/header.css"
    function Header() {

const handleClick = () => {
    console.log("Button clicked");
    const menu = document.querySelector(".sidebar");
    menu.style.display = "block";
}

const handleOtherClick = () => {
    console.log("Other button clicked");
    const menu = document.querySelector(".sidebar");
    menu.style.display = "none";
}

        return (
            
            
            <section className="header">
                <div className="left">
                <a href="#"><img src={logo} alt="brand_logo" /></a>
                    <ul className="navbar">
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                        <li><Link to="page3">Shop</Link></li>
                        <li><a>Login</a></li>
                    </ul>
                    <ul className="sidebar">
                        <li onClick={handleOtherClick}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
                    <li><a className="active">Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Shop</a></li>
                        <li><a>Login</a></li>
                    </ul>

                </div>
                <div className="search-cart">
                <div class="container-input">
  <input type="text" placeholder="Search" name="text" className="input" />
  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
</svg>
</div>
                <a><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg></a>
                <svg onClick={handleClick} className="menu" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </div>
            </section>
        
        
        )
    }
    export default Header;