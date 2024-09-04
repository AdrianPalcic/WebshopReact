
    function Fproducts({data, text, text2, click}) {
        return (
            <section className="featured-products">
    <h2>{text}</h2>
    <p>{text2}</p>
    <div className="prod-box">
        {data.map((product) => {
            return (
               <div className="pro" key={product.id} onClick={() => click(product)}>
                
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

    export default Fproducts;