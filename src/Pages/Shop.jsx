import heropic from "../assets/images/shophero.jpg";
import ShopHero from "../Components/shopComp/ShopHero";
import productImage1 from "../assets/images/clothes1.jpg";
import productImage2 from "../assets/images/clothes2.jpg";
import productImage3 from "../assets/images/clothes3.jpg";
import productImage4 from "../assets/images/clothes4.jpg";
import productImage5 from "../assets/images/clothes5.jpg";
import productImage6 from "../assets/images/clothes6.jpg";
import productImage7 from "../assets/images/clothes7.jpg";
import productImage8 from "../assets/images/clothes8.jpg";
import "../CSS/shop.css";
import FeaturedProducts from "../Components/HomePageComp/FeaturedProducts";
import Footer from "../Components/HomePageComp/Footer";
import logo from "../assets/images/brand.logo.png"
import payPic from "../assets/images/pay.png";
import AppStore from "../assets/images/appstore.jpg";
import TrgPlay from "../assets/images/trgplay.jpg";
import Visit from "../Components/HomePageComp/Visiti";
import "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Shop() {

    const handleClick = () => {
        console.log("clicked");
       
    }

    const Products = [
        {
            id: 1,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage1,
        },
        {
            id: 2,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage2,
        },
        {
            id: 3,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage3,
        },
        {
            id: 4,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage4,
        },
        {
            id: 5,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage5,
        },
        {
            id: 6,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage6,
        },
        {
            id: 7,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage7,
        },
        {
            id: 8,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage8,
        },
        {
            id: 9,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage1,
        },
        {
            id: 10,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage2,
        },
        {
            id: 11,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage3,
        },
        {
            id: 12,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage4,
        },
        {
            id: 13,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage5,
        },
        {
            id: 14,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage6,
        },
        {
            id: 15,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage7,
        },
        {
            id: 16,
            made: "adidis",
            Title: "Shrek 5 T-Shirt",
            price: "$69",
            img: productImage8,
        },
    ]

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
       <ShopHero background={heroBackground} />
        <FeaturedProducts data={Products} click={handleClick}/>
        <section className="sec-pad pagination">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
        </section>
        <Visit />
        <Footer logo={logo} store={AppStore} store2={TrgPlay} pay={payPic} />
        </>
    )
}

export default Shop;