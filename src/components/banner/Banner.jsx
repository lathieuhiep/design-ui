import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Banner.scss';
import { BannerAPI } from "~/api/BannerAPI";
import RegisterCourseModal from "~/components/registerCourseModal";

function Banner() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // call api banner
        const fetchBanner = async () => {
            const result = await BannerAPI()

            setData(result.data)
        }

        fetchBanner()
    }, [])

    return (
        <Box className="banner">
            <Container>
                <Grid
                    className={'banner__warp'}
                    container
                    rowSpacing={2}
                    columnSpacing={{ md: 4 }}
                    alignItems="center"
                >
                    <Grid className="left-box" xs={8}>
                        <Box mb={4} pr={7} width={'80ch'}>
                            <p className="title">
                                {data.text}
                            </p>

                            <h1 className="heading">
                                {data.heading}
                            </h1>

                            <div className="desc">
                                {data.description}
                            </div>
                        </Box>

                        <RegisterCourseModal showNote={true} />
                    </Grid>

                    <Grid className="right-box" xs={4}>
                        { data.gallery && (
                            <>
                                <Swiper
                                    loop={true}
                                    modules={[Pagination]}
                                    pagination={{ clickable: true }}
                                    className="slider-images"
                                >
                                    {data.gallery.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <img src={item} alt={'product'} loading="lazy" />
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>

                                <Box
                                    sx={{
                                        textAlign: 'center',
                                        mt: 2
                                    }}
                                >
                                    <p className="title">
                                        SẢN PHẨM HỌC VIÊN
                                    </p>

                                    <Link className="link" to={'/san-pham-hoc-vien-thiet-ke'}>
                                        Xem thêm
                                    </Link>
                                </Box>
                            </>
                        ) }
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner