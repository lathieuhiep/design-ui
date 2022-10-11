import {Link} from "react-router-dom";
import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Banner.scss';
import images from "~/assets/images";
import RegisterCourseModal from "~/components/registerCourseModal";

const productGallery = [
    images.productDetail,
    images.productDetail,
    images.productDetail,
    images.productDetail,
    images.productDetail,
]

function Banner() {
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
                    <Grid className="left-box" xs={7}>
                        <Box mb={4} pr={6}>
                            <p className="title">
                                CÙNG GET DESIGN
                            </p>

                            <h1 className="heading">
                                Trở thành UXUI Designer
                            </h1>

                            <div className="desc">
                                Get Design – Chuyên đào tạo các khóa học UXUI, Web design và App mobile. Học viên được học trực tiếp kiến thức cơ bản & chuyên sâu bám sát nhu cầu thực tế để đáp ứng công việc cho học viên sau khi hoàn thành khóa học.
                            </div>
                        </Box>

                        <RegisterCourseModal showNote={true} />
                    </Grid>

                    <Grid className="right-box" xs={5}>
                        <Swiper
                            loop={true}
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            className="slider-images"
                        >
                            {productGallery.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <img src={item} alt={'product'} />
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
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner