import ShopHero from "../Components/shopComp/ShopHero";
import heropic from "../assets/images/about-contact_hero.jpg";
import AboutUs from "../assets/images/who are we.jpg";
import "../CSS/Aboutus.css"
import sectionImage1 from "../assets/images/Feature_maybe.jpg";
import sectionImage2 from "../assets/images/Feature_maybe2.jpg";
import sectionImage3 from "../assets/images/Feature_maybe3.jpg";
import sectionImage4 from "../assets/images/Feature_maybe4.jpg";
import Fsection from "../Components/HomePageComp/F-section";
import Footer from "../Components/HomePageComp/Footer";
import Visit from "../Components/HomePageComp/Visiti";
import logo from "../assets/images/brand.logo.png"
import payPic from "../assets/images/pay.png";
import AppStore from "../assets/images/appstore.jpg";
import TrgPlay from "../assets/images/trgplay.jpg";

    function About() {

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


        return (
            <>
            <section 
            className="hero" style={heroBackground}>
                <h1>#Onama</h1>
                <p>Saznajte više o našoj prodavnici</p>
            </section>
            <section className="onama">
                <div className="left">
                    <img src={AboutUs} alt="About Us" />
                </div>
                <div className="right">
                    <h2>Tko smo mi?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque obcaecati repellat quis eaque placeat. Minima, omnis rem perferendis voluptatum sapiente dolorem explicabo dignissimos cumque suscipit voluptate, excepturi architecto tempora deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquid exercitationem natus repellat iusto quia explicabo beatae voluptatem voluptatum cupiditate et nesciunt voluptas, voluptatibus eum asperiores, aut vero architecto eaque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam iusto suscipit, obcaecati totam ea ad maiores ipsa quidem corrupti eaque magni deserunt laudantium, laborum praesentium quam, deleniti quos cupiditate corporis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero suscipit reiciendis recusandae illo ea? Pariatur, nihil. Quos tenetur nobis cum magni quidem alias repudiandae commodi. Magni sequi consequuntur unde aut?</p>

                </div>
            </section>
            <Fsection data={fetatureData}/>
            <Visit />
            <Footer logo={logo} store={AppStore} store2={TrgPlay} pay={payPic} />
            </>
        );
    }

    export default About;