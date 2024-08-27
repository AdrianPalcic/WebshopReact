
    function Novo({data}) {
        return (
            <section className="featured-products novo">
    <h2>Novo!</h2>
    <p>Some text with 10 long words</p>
    <div className="prod-box">
        {data.map((product) => {
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
        );
    }

    export default Novo;