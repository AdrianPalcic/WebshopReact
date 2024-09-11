import "../CSS/Cart.css";
import heropic from "../assets/images/about-contact_hero.jpg";
import "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.min.css';
import product1 from "../assets/images/clothes1.jpg";
import logo from "../assets/images/brand.logo.png"
import payPic from "../assets/images/pay.png";
import AppStore from "../assets/images/appstore.jpg";
import TrgPlay from "../assets/images/trgplay.jpg";
import Footer from "../Components/HomePageComp/Footer";


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

    function Cart() {
        return (
            <>
            <section className="hero" style={heroBackground}>
            <h1>Košarica</h1>
            </section>
            <section className="product-table">
                <table>
                    <thead>
                        <tr>
                            <td>
                                Ukloni
                            </td>
                            <td>
                                Slika
                            </td>
                            <td>
                                Artikl
                            </td>
                            <td>
                                Cijena
                            </td>
                            <td>
                                Kolicina
                            </td>
                            <td>
                                Ukupno
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i class="fa-solid fa-trash"></i></td>
                            <td><img src={product1} alt="artikl" /></td>
                            <td>Shrek5 tshirt</td>
                            <td>
                                $69
                            </td>
                            <td>
                                <input type="number" value="1" />
                            </td>
                            <td>$69</td>

                        </tr>
                        <tr>
                            <td><i class="fa-solid fa-trash"></i></td>
                            <td><img src={product1} alt="artikl" /></td>
                            <td>Shrek5 tshirt</td>
                            <td>
                                $69
                            </td>
                            <td>
                                <input type="number" value="1" />
                            </td>
                            <td>$69</td>

                        </tr>
                        <tr>
                            <td><i class="fa-solid fa-trash"></i></td>
                            <td><img src={product1} alt="artikl" /></td>
                            <td>Shrek5 tshirt</td>
                            <td>
                                $69
                            </td>
                            <td>
                                <input type="number" value="1" />
                            </td>
                            <td>$69</td>

                        </tr>
                        <tr>
                            <td><i class="fa-solid fa-trash"></i></td>
                            <td><img src={product1} alt="artikl" /></td>
                            <td>Shrek5 tshirt</td>
                            <td>
                                $69
                            </td>
                            <td>
                                <input type="number" value="1" />
                            </td>
                            <td>$69</td>

                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="kuponITotal">
                <div className="kupon">
                    <h2>Primjeni Kupon</h2>
                    <div>
                        <input type="text" placeholder="Unesite kupon" />
                        <button>Primjeni</button>
                    </div>
                </div>
                <div className="total">
                    <h2>Ukupno</h2>
                    <table>
                        <tr>
                            <td>
                                Ukupno
                            </td>
                            <td>
                                $69
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Shipping
                            </td>
                            <td>
                                Free
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ukupno
                            </td>
                        </tr>
                    </table>
                    <button className="kupi">Idi na Kupnju</button>
                </div>
            </section>
            <Footer logo={logo} store={AppStore} store2={TrgPlay} pay={payPic} />

            </>

        )
    }

    export default Cart;