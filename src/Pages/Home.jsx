import "../Home-page.css";
import "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.min.css';
import cart from "../assets/images/shopping_cart_24dp_088178_FILL0_wght400_GRAD0_opsz24.svg"
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
<section class="hero-section" style={heroBackground}>
<h3>Zamjenite Staro za Novo</h3>
<h1>
        Super popusti<br></br><span> Na sve proizvode</span>
</h1>
<p>Iskoristite priliku i obnovite svoju kolekciju s nevjerojatnim ponudama.<br></br> Pronađite vrhunske proizvode uz značajne uštede.</p>


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
<section className="f-section sec-pad">
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
    <h2>Istaknuti Proizvodi</h2>
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
               <a href="#"><i class="fa-solid fa-cart-shopping cart-btn" ></i></a>
           </div>
            )
        })}
        </div>
     
</section>
<section className="call-to-action" style={bannerBackground}>
         <h2>Usluge popravka</h2>
         <h1>DO <span>70% Popusta</span> na majice i dodatke</h1>
        <button className="banner-explore">Pogledaj više</button>
</section>
<section className="featured-products novo">
    <h2>Novo!</h2>
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
               <a href="#"><i class="fa-solid fa-cart-shopping cart-btn" ></i></a>
           </div>
            )
        })}
        </div>
     
</section>
<section className="sec-pad bimbo">
    <div className="banner-box" style={bannerImageBackground}>
    <h2>Lorem ipsum</h2>
    <h1>Lorem ipsum dolor sit</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <button className="box-btn">Pogledaj</button>
    </div>

    <div className="banner-box" style={bannerImageBackground1}>
    <h2>Lorem ipsum</h2>
    <h1>Lorem ipsum dolor sit</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <button className="box-btn">Pogledaj</button>
    </div>
</section>
<section className=" bombi">
    <div className="banner-box small-box" style={bannerImageBackground2}>
    <h2>Lorem ipsum</h2>
    
    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
    </div>

    <div className="banner-box small-box" style={bannerImageBackground3}>
    <h2>Lorem ipsum</h2>
  
    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
    </div>

    <div className="banner-box small-box" style={bannerImageBackground4}>
    <h2>Lorem ipsum</h2>

    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
    </div>
</section>
<section className="comeandvisit sec-pad">
    <div className="posjeti-text">
        <h2>Posjeti nas</h2>
        <p>Dođi uživo pregledati <span>artikle</span></p>
    </div>
    <div className="adresa">
        <i><svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#BB271A">
    <path d="M480.09-490q28.91 0 49.41-20.59 20.5-20.59 20.5-49.5t-20.59-49.41q-20.59-20.5-49.5-20.5t-49.41 20.59q-20.5 20.59-20.5 49.5t20.59 49.41q20.59 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.29-192.9Q589.42-820 480-820t-184.71 75.1Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
</svg></i>
        <input type="text" disabled  placeholder="Draškovićeva ul. 44, 10000, Zagreb"/>
    </div>
</section>
<footer className="sec-pad">
    <div className="col">
    <img className="logo" src={logo} alt="brand_logo" />
    <h2>Kontakt</h2>
    <p><strong>Adresa:</strong> Draškovićeva ul. 44, 10000, Zagreb</p>
    <p><strong>Mobitel:</strong> 0957482199</p>
    <p><strong>Sati:</strong> 06:00 - 24:00 Pon - Ned </p>
    <div className="follow">
        <h4>Pratite nas</h4>
        <div className="icon">
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-x-twitter"></i>
        <i class="fa-brands fa-pinterest"></i>
        </div>
    </div>
    </div>

    <div className="col">
        <h2>Informacije</h2>
        <a href="#">O nama</a>
        <a href="#">Dostava</a>
        <a href="#">Uvjeti i Odredbe</a>
        <a href="#">Kako Štitimo Vašu Privatnost</a>
        <a href="#">Kontaktiraj nas</a>
    </div>

    <div className="col">
        <h2>Moj Racun</h2>
        <a href="#">Login</a>
        <a href="#">Kolica</a>
        <a href="#">Lista želja</a>
        <a href="#">Prati moj paket</a>
        <a href="#">Pomoc</a>
    </div>

    <div className="col npm-i">
        <h2>Instaliraj aplikaciju</h2>
        <p>Sa App storea ili Google Play</p>
        <div className="row">
            <img src={AppStore} alt="App Store"></img>
            <img src={TrgPlay} alt="Google Store"></img>
        </div>
        <p>Nacini placanja</p>
        <img src={payPic} alt="Nacini placanja"></img>
    </div>

    <div className="cr">
        <p>&copy; 2024. All rights reserved.</p>
    </div>
</footer>
</>
    )
}

export default Home;