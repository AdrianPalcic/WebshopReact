import { useState } from "react";

    function Visit() {

        const [value, setValue] = useState("Draškovićeva ul. 44, 10000, Zagreb")

        return (
            <section className="comeandvisit">
            <div className="visit">
               <h2>Posjeti nas!</h2>
               <p><span>Uzivo</span> pregledaj artikle</p>
            </div>
            <div className="location">

          <a href="https://www.google.com/maps/place/Dra%C5%A1kovi%C4%87eva+ul.+44,+10000,+Zagreb/@45.809363,15.9809917,17z/data=!3m1!4b1!4m6!3m5!1s0x4765d655f06027e9:0x86902899170be4e2!8m2!3d45.809363!4d15.9835666!16s%2Fg%2F11c2bf7vcq?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"><i class="fa-solid fa-location-dot"></i></a>
            <input type="text" disabled value={value}></input>
            </div>
           </section>
        );
    }

    export default Visit;