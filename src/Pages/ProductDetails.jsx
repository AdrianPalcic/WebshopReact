import { useState } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/ProdDetails.css";
import Visit from "../Components/HomePageComp/Visiti";
import Footer from "../Components/HomePageComp/Footer";
import logo from "../assets/images/brand.logo.png"
import payPic from "../assets/images/pay.png";
import AppStore from "../assets/images/appstore.jpg";
import TrgPlay from "../assets/images/trgplay.jpg";
import FeaturedProducts from "../Components/HomePageComp/FeaturedProducts";
import productImage1 from "../assets/images/clothes1.jpg";
import productImage2 from "../assets/images/clothes2.jpg";
import productImage3 from "../assets/images/clothes3.jpg";
import productImage4 from "../assets/images/clothes4.jpg";


    function ProductDetails() {
        const [quantity, setQuantity] = useState(1);
        const {state} = useLocation();
        const { Title, img, price, made, desc} = state;

        const handleValueChange = (e) => {
            const value = e.target.valueAsNumber;
            if (value < 1) {
                setQuantity(1);
            } else {
                setQuantity(value);
            }
        }


        const Products = [
            {
                id: 1,
                made: "adidis",
                Title: "Shrek 5 T-Shirt",
                price: "$69",
                img: productImage1,
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, fuga deserunt cum numquam quaerat labore omnis aliquam sint voluptate aliquid autem, quis explicabo! Asperiores, numquam dolore ipsam at ut delectus!",
            },
            {
                id: 2,
                made: "adidis",
                Title: "Shrek 5 T-Shirt",
                price: "$69",
                img: productImage2,
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, fuga deserunt cum numquam quaerat labore omnis aliquam sint voluptate aliquid autem, quis explicabo! Asperiores, numquam dolore ipsam at ut delectus!",
            },
            {
                id: 3,
                made: "adidis",
                Title: "Shrek 5 T-Shirt",
                price: "$69",
                img: productImage3,
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, fuga deserunt cum numquam quaerat labore omnis aliquam sint voluptate aliquid autem, quis explicabo! Asperiores, numquam dolore ipsam at ut delectus!",
            },
            {
                id: 4,
                made: "adidis",
                Title: "Shrek 5 T-Shirt",
                price: "$69",
                img: productImage4,
                desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, fuga deserunt cum numquam quaerat labore omnis aliquam sint voluptate aliquid autem, quis explicabo! Asperiores, numquam dolore ipsam at ut delectus!",
            },
        ]

        return (
            <>
            <div className="productDetails">
                <div className="product-left">
                        <div className="big-img-cont">
                        <img src={img} alt={Title} className="big-img"/>
                        </div>
                    
                    <div className="small-product-imgs">
                        <img src={img} alt={Title} className="small-img" />
                        <img src={img} alt={Title} className="small-img" />
                        <img src={img} alt={Title} className="small-img" />
                        <img src={img} alt={Title} className="small-img" />
                    </div>
                </div>
                <div className="product-right">
                    <p className="made">{made}</p>
                    <h3>{Title}</h3>
                    <h2>{price}</h2>
                    <select>
                        <option value="" style={{display: 'none'}}>Odaberi Veličinu</option>
                        <option value="XXL">XXL</option>
                        <option value="XL">XL</option>
                        <option value="L">L</option>
                        <option value="M">M</option>
                        <option value="S">S</option>
                        <option value="XS">XS</option>
                    </select>
                    <div className="addToCartContainer">
                        <input type="number"
                                value={quantity}
                                onChange={handleValueChange}
                        />
                        <button id="addToCart">Dodaj u košaricu</button>
                    </div>
                    <div className="product-details">
                        <h4>Detalji Proizvoda</h4>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
            <div className="Slicni">
                  
                    <FeaturedProducts data={Products} text={"Slični Proizvodi"}/>
                </div>
            <Visit />
            <Footer logo={logo} store={AppStore} store2={TrgPlay} pay={payPic} />
            </>
         );
    }

    export default ProductDetails;