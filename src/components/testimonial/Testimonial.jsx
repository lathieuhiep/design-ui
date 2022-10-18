import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import {LazyLoadImage} from "react-lazy-load-image-component";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonial.scss';
import { TestimonialAPI } from "~/api/TestimonialAPI";


function Testimonial() {
    const [data, setData] = useState([])

    useEffect(() => {
        // call api testimonial
        const fetchTestimonial = async () => {
            const result = await TestimonialAPI()

            setData(result.data)
        }

        fetchTestimonial()
    }, [])

    return(
        <Box className="element-testimonial">
            <Swiper
                loop={false}
                spaceBetween={20}
                slidesPerView={4}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="slider-testimonial"
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className="item">
                        <div className="item__info">
                            <div className="avatar">
                                <LazyLoadImage src={item.avatar} alt={item.title} />
                            </div>

                            <div className="student">
                                <h5 className="name">{item.title}</h5>
                                <p className="course">{item.course}</p>
                            </div>
                        </div>

                        <div className="item__desc" dangerouslySetInnerHTML={{__html: item.content}} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    )
}

export default Testimonial