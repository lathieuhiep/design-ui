import {Link} from "react-router-dom";
import {Button} from "@mui/material";

import images from "~/assets/images";

function ProductItem({ title, to = '#', price, addToCart = 'Add to cart' }) {
    return (
        <div className="product-item">
            <div className="thumbnail">
                <img src={images.productDefault} alt="product" />
            </div>

            <h2 className="name">
                <Link to={to}>
                    {title}
                </Link>
            </h2>

            <div className="price">
                {price}
            </div>

            <div className="add-to-cart">
                <Button variant="text" sx={{p: 0}}>{addToCart}</Button>
            </div>
        </div>
    )
}

export default ProductItem