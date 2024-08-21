import "../Home-page.css";
import image from "../assets/images/hero2.jpeg";
import sectionImage1 from "../assets/images/feature_section_1.png";
import sectionImage2 from "../assets/images/feature_section_2.png";
import sectionImage3 from "../assets/images/feature_section_3.png";
import sectionImage4 from "../assets/images/feature_section_4.png";


import productImage1 from "../assets/images/clothes1.jpg";
import productImage2 from "../assets/images/clothes2.jpg";
import productImage3 from "../assets/images/clothes3.jpg";
import productImage4 from "../assets/images/clothes4.jpg";
import productImage5 from "../assets/images/clothes5.jpg";
import productImage6 from "../assets/images/clothes6.jpg";
import productImage7 from "../assets/images/clothes7.jpg";
import productImage8 from "../assets/images/clothes8.jpg";
import productImage9 from "../assets/images/clothes9.jpg";
function Home() {

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


    return (
      <>
<section class="hero-section">
<h3>Nova Izdanja, Svake Sezone</h3>
<h1>Redefinirajte Svoj Stil Danas</h1>
<p>Istražite našu pažljivo odabranu kolekciju i pronađite komade koji čine svaki outfit nezaboravnim.</p>

<button class="animated-button">
  <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">Shop now</span>
  <span class="circle"></span>
  <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>

</section>
<section className="f-section">
        {fetatureData.map((card) => {
            return (
            <div class="box" key={card.id}>
                <img src={card.img} alt="" />
                <h3>{card.h4}</h3>
            </div>
            )
        })}
</section>
<section className="featured-products">
    <h2>Featured Products</h2>
    <p>Some text with 10 long words</p>
    <div className="prod-box">
        {featuredProductData.map((product) => {
            return (
               <div className="pro" key={product.id}>
                
               <img src={product.img}></img>
               <div className="desc">
                   <span>
                       {product.made}
                   </span>
                   <h4>{product.Title}</h4>
                   <div className="star">
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                       <i class="fa fa-star"></i>
                   </div>
                   <p>{product.price}</p>
               </div>
               <a href="#"><i className="fal-fa-shopping-cart"></i></a>
           </div>
            )
        })}
        </div>
     
</section>
<section className="call-to-action">
         <h2>Usluge popravka</h2>
         <h1>DO <span>70% Popusta</span> na majice i dodatke</h1>
        <button className="banner-explore">Pogledaj više</button>
</section>
<section>NewArrivals</section>
</>
    )
}

export default Home;