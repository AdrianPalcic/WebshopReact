import heropic from "../assets/images/about-contact_hero.jpg";

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
            className="hero" style={heroBackground}>
                <h1>#Onama</h1>
                <p>Saznajte više o našoj prodavnici</p>
            </section>
            <section className="contact">
                <div className="left">
                    <p>Kontaktiraj nas</p>
                    <h1>Posjeti nas na našoj lokaciji</h1>
                    <div className="info">
                        <p>example@mail.com</p>
                        <p>example@mail.com</p>
                        <p>Draškovićeva ul. 44, 10000, Zagreb</p>
                        <p>Pon - Ned  06:00 - 24:00</p>
                    </div>
                </div>
                <div className="right"></div>
            </section>
        </>
    );
}

export default Contact;