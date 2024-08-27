
    function Footer({logo, store, store2, pay}) {
        return (
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
            <img src={store} alt="App Store"></img>
            <img src={store2} alt="Google Store"></img>
        </div>
        <p>Nacini placanja</p>
        <img src={pay} alt="Nacini placanja"></img>
    </div>

    <div className="cr">
        <p>&copy; 2024. All rights reserved.</p>
    </div>
</footer>
        );
    }

    export default Footer;