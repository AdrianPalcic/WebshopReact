import { Link } from "react-router-dom";

    function Hero({background}) {
        

        return (
        
            <section class="hero-section" style={background}>
<h3>Zamjenite Staro za Novo</h3>
<h1>
        Super popusti<br></br><span> Na sve proizvode</span>
</h1>
<p>Iskoristite priliku i obnovite svoju kolekciju s nevjerojatnim ponudama.<br></br> Pronađite vrhunske proizvode uz značajne uštede.</p>

<Link to="page3"><button class="animated-button">
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
</button></Link>
            </section>
        );
    }

    export default Hero;