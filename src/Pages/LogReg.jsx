import "../CSS/logReg.css";
import Visit from "../Components/HomePageComp/Visiti";
import Footer from "../Components/HomePageComp/Footer";
import logo from "../assets/images/brand.logo.png"
import payPic from "../assets/images/pay.png";
import AppStore from "../assets/images/appstore.jpg";
import TrgPlay from "../assets/images/trgplay.jpg";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

    function LogReg() {
        const [logIn, setlogIn] = useState(true)

        if (!logIn) {
            const form = document.getElementById("login");
            form.style.height = "63vh"
        }
        return (
            <>
            <div className="container">
                <fieldset>
                    <div className="legend">
                <h3 className={!logIn ? "active" : ""} onClick={() => setlogIn(!logIn)} >Log in</h3>
                <h3 className={logIn ? "active" : ""} onClick={() => setlogIn(!logIn)}>Register</h3>
                     </div>
                <form id="login" className={!logIn ? "display" : "hide"}>
                    <label for="username"> Username</label>
                    <input type="text" id="username" placeholder=""></input>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="email"></input>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="password"></input>
                    <div className="sec-div">
                    <div className="pass">
                        <p>Zaboravili lozinku?</p>
                    </div>
                    <div className="acc">
                        <p>Nemate racun?</p>
                        <p>Prijavi se</p>
                    </div>
                    </div>
                   
                    <div className="button">
                    <button>Submit</button>
                    </div>
                </form>
                <form id="register" className={logIn ? "display" : "hide"}>
                    <label for="username"> Username</label>
                    <input type="text" id="username" placeholder=""></input>
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="email"></input>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="password"></input>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="password"></input>
                    <div className="sec-div">
                    <div className="pass">
                        <p>Zaboravili lozinku?</p>
                    </div> 
                    <div className="acc">
                        <p>Imate racun?</p>
                        <p>Ulogiraj se</p>
                    </div>
                    </div>
                    <div className="button">
                    <button>Submit</button>
                    </div>
                </form>
                </fieldset>
            </div>
            <Footer logo={logo} store={AppStore} store2={TrgPlay} pay={payPic} />
            </>
            
        );
    }

    export default LogReg;