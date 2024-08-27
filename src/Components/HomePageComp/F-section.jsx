
    function Fsection({data}) {
        return (
        <section className="f-section sec-pad">
            {data.map((card) => {
                return (
                <div class="box" key={card.id}>
                    <img src={card.img} alt="" />
                    <h3>{card.h4}</h3>
                </div>
                )
            })}
    </section>
    );
}

    export default Fsection;