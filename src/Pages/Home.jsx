import "../CSS/Home-page.css";
import "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Banner from "../Components/HomePageComp/CallToAction";
import Hero from "../Components/HomePageComp/Hero";
import Fproducts from "../Components/HomePageComp/FeaturedProducts";
import Visit from "../Components/HomePageComp/Visiti";
import Novo from "../Components/HomePageComp/Novo";
import Fsection from "../Components/HomePageComp/F-section";
import sectionImage1 from "../assets/images/feature_section_1.png";
import sectionImage2 from "../assets/images/feature_section_2.png";
import sectionImage3 from "../assets/images/feature_section_3.png";
import sectionImage4 from "../assets/images/feature_section_4.png";
import heropic from "../assets/images/hero4.png"
import productImage1 from "../assets/images/clothes1.jpg";
import productImage2 from "../assets/images/clothes2.jpg";
import productImage3 from "../assets/images/clothes3.jpg";
import productImage4 from "../assets/images/clothes4.jpg";
import productImage5 from "../assets/images/clothes5.jpg";
import productImage6 from "../assets/images/clothes6.jpg";
import productImage7 from "../assets/images/clothes7.jpg";
import productImage8 from "../assets/images/clothes8.jpg";
import banner from "../assets/images/banner.avif";
import summer from "../assets/images/summer.jpg"
import logo from "../assets/images/brand.logo.png"
import payPic from "../assets/images/pay.png";
import AppStore from "../assets/images/appstore.jpg";
import TrgPlay from "../assets/images/trgplay.jpg";
import summer1 from "../assets/images/ronald-cuyan-AJgFLjnmSs4-unsplash.jpg";
import summer2 from "../assets/images/bannercollection.jpg";
import summer3 from "../assets/images/liana-mikah-loo1hKZmZ3E-unsplash.jpg";
import summer4 from "../assets/images/bannercollectio4.jpg";
import { useState } from "react";
import Cards from "../Components/HomePageComp/Cards";
import SmallCards from "../Components/HomePageComp/SmallCards";
import Footer from "../Components/HomePageComp/Footer";


function Home() {

    const [value, setValue] = useState("Draškovićeva ul. 44, 10000, Zagreb")

    const fetatureData = [
        {
            id:"1",
            img: sectionImage1,
            h4: "Return Item",
        },
        {
            id:"2",
           img: sectionImage2,
            h4: "Online support",
        },
        {
            id:"3",
           img: sectionImage3,
            h4: "Free Shipping",
        },
        {
            id:"4",
           img: sectionImage4,
            h4: "Online order",
        },
  
    ]

    const featuredProductData = [
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
     
    ]
    const heroBackground = {
       backgroundImage : `url(${heropic})`,
       height: '90vh',
       width: "100%",
       display: 'flex',
       flexDirection: 'column',
       gap: '20px',
       backgroundSize: 'cover',
       backgroundPosition: 'top 25% right: 0%',
       backgroundRepeat: 'no-repeat',
       padding: '0 40px',
       alignItems: 'flex-start',
       justifyContent: 'center',
       color: '#000000',
    }

    const bannerBackground = {
        backgroundImage: `url(${banner})`,
    }
    const bannerImageBackground = {
        backgroundImage: `url(${summer})`
    }
    const bannerImageBackground1 = {
        backgroundImage: `url(${summer1})`
    }
    const bannerImageBackground2 = {
        backgroundImage: `url(${summer2})`
    }
    const bannerImageBackground3 = {
        backgroundImage: `url(${summer3})`
    }
    const bannerImageBackground4 = {
        backgroundImage: `url(${summer4})`
    }
    return (
      <>
      <Hero background={heroBackground}/>
<Fsection data={fetatureData}/>
<Fproducts data={featuredProductData} text={"Istaknuti Proizvodi"} text2={"Some text with 10 long words"}/>
<Banner background={bannerBackground} />
<Novo data={featuredProductData} />
<Cards background={bannerImageBackground} background2={bannerImageBackground1} />
<SmallCards background={bannerImageBackground2} background2={bannerImageBackground3} background3={bannerImageBackground4} />
<Visit />
<Footer logo={logo} store={AppStore} store2={TrgPlay} pay={payPic} />


</>
    )
}

export default Home;