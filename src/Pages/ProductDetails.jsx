import { useLocation } from "react-router-dom";

    function ProductDetails() {

        const {state} = useLocation();
        const { Title, img, price, made, desc} = state;

        return (
            <div className="productDetails">
                <h1>{Title}</h1>
                <h1>{price}</h1>
                <h1>{made}</h1>
                <h1>{desc}</h1>
                <img src={img}></img>
            </div>
         );
    }

    export default ProductDetails;