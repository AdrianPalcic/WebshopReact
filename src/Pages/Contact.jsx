import heropic from "../assets/images/about-contact_hero.jpg";
import "../CSS/Contact.css";
import "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.min.css';

import logo from "../assets/images/brand.logo.png"
import payPic from "../assets/images/pay.png";
import AppStore from "../assets/images/appstore.jpg";
import TrgPlay from "../assets/images/trgplay.jpg";
import Footer from "../Components/HomePageComp/Footer";
function Contact() {

const heroBackground = {
        backgroundImage : `url(${heropic})`,
        backgroundSize:"cover",
        height: '40vh',
       width: "100%",
       color: "white",
       display:"flex",
       flexDirection: "column",
       justifyContent: "center",
       alignItems: "center",
       gap: "20px",
       padding: "14px",
    }

    return (
        <>
             <section 
            className="heroe" style={heroBackground}>
                <h1>#Kontaktiraj_nas</h1>
                <p>Recite nam svoja mišljenja</p>
            </section>
            <section className="contact">
                <div className="left">
                    <h3>Kontaktiraj nas</h3>
                    <h1>Posjeti nas na našoj lokaciji</h1>
                    <div className="info">
                       <p><i class="fa-solid fa-envelope"></i> example@mail.com</p>
                         <p><i class="fa-solid fa-phone"></i> example@mail.com</p>
                         <p><i class="fa-solid fa-map"></i>  Draškovićeva ul. 44, 10000, Zagreb</p>
                        <p><i class="fa-solid fa-clock"></i>  Pon - Ned  06:00 - 24:00</p>
                    </div>
                </div>
                <div className="right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.2569265795022!2d15.98652775875243!3d45.810703507336285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d655f06027e9%3A0x86902899170be4e2!2sDra%C5%A1kovi%C4%87eva%20ul.%2044%2C%2010000%2C%20Zagreb!5e0!3m2!1shr!2shr!4v1725523444051!5m2!1shr!2shr" width="600" height="450"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <section className="formER">
                
                <div className="form-left">
                <p>Pošaljite nam poruku</p>
                <h1>Vaše mišljenje nam je bitno</h1>
                    <form>
                       
                        <input type="text" required placeholder="Ime" />
                      
                        <input type="email" required placeholder="Email" />
                
                        <textarea name="" id="" cols="30" rows="10" required placeholder="Vaša Poruka"></textarea>
                        <button>Pošalji</button>
                    </form> 
                </div>
                <div className="form-right">
                    <div className="person">
                    <i class="fa-solid fa-circle"></i>
                        <div className="person-info">
                            <h3>John Doe</h3>
                            <p>Voditelj</p>
                            <p>Example@gmail.com</p>
                            <p>095 748 2199</p>
                        </div>
                    </div>
                    <div className="person">
                    <i class="fa-solid fa-circle"></i>
                        <div className="person-info">
                            <h3>John Doe</h3>
                            <p>Voditelj</p>
                            <p>Example@gmail.com</p>
                            <p>095 748 2199</p>
                        </div>
                    </div>
                    <div className="person">
                    <i class="fa-solid fa-circle"></i>
                        <div className="person-info">
                            <h3>John Doe</h3>
                            <p>Voditelj</p>
                            <p>Example@gmail.com</p>
                            <p>095 748 2199</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer logo={logo} store={AppStore} store2={TrgPlay} pay={payPic} />
        </>
    );
}

export default Contact;