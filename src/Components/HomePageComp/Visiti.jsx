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
            <i class="fa-solid fa-location-dot"></i>
            <input type="text" disabled value={value}></input>
            </div>
           </section>
        );
    }

    export default Visit;