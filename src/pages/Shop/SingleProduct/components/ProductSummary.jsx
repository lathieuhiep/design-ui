import {useState} from "react";
import {Link} from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import {Button, TextField} from "@mui/material";

function ProductSummary() {
    const [quantity, setQuantity] = useState(1);

    // handle change quantity
    const handleChangeQuantity = (e) => {
        let value = e.target.value.replace(/[^0-9]/, '');
        value = (value === '' ? 1 : value);
        value = parseInt(value);

        setQuantity(value)
    }

    // handle plus quantity
    const handleMinusQuantity = () => {
        if ( quantity > 1 ) {
            setQuantity(quantity - 1)
        }
    }

    // handle plus quantity
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1)
    }

    return (
        <>
            <h1 className="product-title">
                Logo Collection
            </h1>

            <div className="product-price">
                <p className="amount">
                    <span className="currency">$</span>
                    <span className="number">18</span>
                </p>
            </div>

            <div className="product-excerpt">
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
            </div>

            <Grid className="cart" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid className="quantity" sx={{ display: 'flex' }} xs={4}>
                    <Button variant="outlined" onClick={handleMinusQuantity}>
                        <i className="fa-solid fa-minus"></i>
                    </Button>

                    <TextField value={quantity} size="small" onChange={(e) => handleChangeQuantity(e)} />

                    <Button variant="outlined" disableRipple onClick={handlePlusQuantity}>
                        <i className="fa-solid fa-plus"></i>
                    </Button>
                </Grid>

                <Grid xs={8} className="action-box">
                    <Button className="add-to-cart" variant="outlined">
                        Add To Cart
                    </Button>
                </Grid>
            </Grid>

            <div className="product-meta">
                <div className="sku-wrapper">
                    <span className="meta-label">SKU:</span>
                    <span className="sku">N/A</span>
                </div>

                <div className="posted-in">
                    <span className="meta-label">Categories:</span>

                    <Link to={'#'} rel={'tag'}>
                        Accessories
                    </Link>

                    <span className="meta-sep">,</span>

                    <Link to={'#'} rel={'tag'}>
                        Clocks
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProductSummary