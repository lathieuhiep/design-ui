import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";

import './SingleProduct.scss';
import images from "~/assets/images";

function SingleProduct() {
    return (
        <div className="container-wrap container-product">
            <Container>
                <Grid Grid container className="products" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={6}>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <img src={images.productDefault} alt={'product'} />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={images.productDefault} alt={'product'} />
                            </SwiperSlide>
                        </Swiper>
                    </Grid>

                    <Grid xs={6}>
                        Content
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default SingleProduct