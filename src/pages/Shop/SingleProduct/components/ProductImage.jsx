import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import images from "~/assets/images";

const productGallery = [
    images.productDetail,
    images.productDetail,
    images.productDetail,
    images.productDetail,
    images.productDetail,
]

function ProductImage() {
    const [thumbsSwiper, setThumbsSwiper] = useState();

    return (
        <>
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
        </>
    )
}

export default ProductImage