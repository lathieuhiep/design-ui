import {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import {Box, Button, Container, TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import './SingleProduct.scss';
import images from "~/assets/images";

const productGallery = [
    images.productDetail,
    images.productDetail,
    images.productDetail,
    images.productDetail,
    images.productDetail,
]

function SingleProduct() {
    const [thumbsSwiper, setThumbsSwiper] = useState();

    return (
        <div className="container-wrap container-product">
            <Container>
                <Grid Grid container className="products" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid className="gallery-box" xs={6}>
                        <Swiper
                            loop={true}
                            navigation={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            thumbs={{ swiper: thumbsSwiper }}
                            className="mySwiper2"
                        >
                            {productGallery.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={item} alt={'product'} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            {productGallery.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={item} alt={'product'} />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Grid>

                    <Grid className="entry-summary" xs={6}>
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

                        <div className="cart">
                            <Box className="quantity" sx={{ display: 'flex' }}>
                                <Button variant="outlined">
                                    <i className="fa-solid fa-minus"></i>
                                </Button>

                                <TextField defaultValue="1" />

                                <Button variant="outlined">
                                    <i className="fa-solid fa-plus"></i>
                                </Button>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default SingleProduct