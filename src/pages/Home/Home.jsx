import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import './Home.scss';
import images from "~/assets/images";
import Banner from "~/components/banner";
import IconList from "~/components/iconList";
import RegisterCourseModal from "~/components/registerCourseModal";
import TextBox from "~/components/textBox";
import CourseGrid from "~/components/courseGrid";
import About from "~/components/about";
import ImageBox from "~/components/imageBox";
import ProductsGrid from "~/components/productsGrid";
import Testimonial from "~/components/testimonial";

function Home() {
    return (
        <div className="container-home">
            <Box className="element-warp">
                <Banner />
            </Box>

            <Box className="element-warp" pt={8} pb={8}>
                <Container>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6}>
                            <Box textAlign={"center"}>
                                <img loading="lazy" alt="" src={images.frame} />
                            </Box>
                        </Grid>

                        <Grid xs={6}>
                            <Box mb={4}>
                                <Box component={'h3'} sx={{ color: '#da0000', fontSize: '1.8rem' }}>
                                    VẤN ĐỀ BẠN ĐANG GẶP PHẢI ?
                                </Box>

                                <IconList />
                            </Box>

                            <Box mb={4}>
                                <Box component={'h3'} sx={{ color: '#2ba94e', fontSize: '1.8rem' }}>
                                    GET DESIGN GIÚP BẠN
                                </Box>

                                <IconList />
                            </Box>

                            <RegisterCourseModal />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box className="element-warp" mb={8}>
                <Container>
                    <Box textAlign={'center'} mb={4}>
                        <TextBox
                            component={'p'}
                            text={'Tham khảo khoá học'}
                            sx={{
                                mb: 1,
                                color: '#ff4f41',
                                fontWeight: 500
                            }}
                        />

                        <TextBox component={'h3'} text={'CÁC KHÓA HỌC TẠI GET DESIGN'} />

                        <TextBox
                            component={'p'}
                            text={'Với phương châm “Chia sẻ” làm nền tảng cho tất cả khoá học, Get Design phát triển chương trình học chính bao gồm : UXUI & Front-end. Tất cả chương trình đều được thiết kế dựa trên sự Chia sẻ, Tư Duy Định Hướng và Kỹ năng giải quyết vấn đề cho học viên.'}
                            sx={{
                                margin: '0 auto',
                                width: '70ch'
                            }}
                        />
                    </Box>

                    <CourseGrid />
                </Container>
            </Box>

            <Box className="element-warp" mb={8}>
                <Container>
                    <TextBox
                        component={'h3'}
                        text={'ĐỐI TƯỢNG THAM GIA KHÓA HỌC'}
                        sx={{
                            marginBottom: '38px',
                            paddingTop: '38px',
                            textAlign: 'center',
                            borderTop: '1px solid #dfdfdf'
                        }}
                    />

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4 }}>
                        <Grid xs={2} sm={4} md={4}>
                            <Box sx={{
                                padding: '35px 12px 20px 16px',
                                border: '1px dashed #a6a6a6',
                                backgroundColor: '#f7f7f7',
                                height: '100%'
                            }}
                            >
                                <Box className="title-default" component={'h6'} mb={2}>
                                    CÁC BẠN BẮT ĐẦU TỪ CON SỐ 0
                                </Box>

                                <IconList generate={[0,1,2,3]} />
                            </Box>
                        </Grid>

                        <Grid xs={2} sm={4} md={4}>
                            <Box sx={{
                                padding: '35px 12px 20px 16px',
                                border: '1px dashed #a6a6a6',
                                backgroundColor: '#f7f7f7',
                                height: '100%'
                            }}
                            >
                                <Box className="title-default" component={'h6'} mb={2}>
                                    CÁC BẠN CHUYỂN NGHỀ
                                </Box>

                                <IconList generate={[0,1,2]} />
                            </Box>
                        </Grid>

                        <Grid xs={2} sm={4} md={4}>
                            <Box sx={{
                                padding: '35px 12px 20px 16px',
                                border: '1px dashed #a6a6a6',
                                backgroundColor: '#f7f7f7',
                                height: '100%'
                            }}
                            >
                                <Box className="title-default" component={'h6'} mb={2}>
                                    HỌC ĐỂ QUẢN LÝ CÔNG VIỆC
                                </Box>

                                <IconList generate={[0,1,2]} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box className="element-warp" mb={8}>
                <Container>
                    <About />
                </Container>
            </Box>

            <Box className="element-warp element-overlay element-benefits" mb={8} pt={8} pb={8}>
                <Container>
                    <Box
                        component="h3"
                        sx={{
                            textAlign: 'center',
                            color: '#ffffff',
                            marginBottom: '36px'
                        }}
                    >
                        LỢI ÍCH KHI THAM GIA KHÓA HỌC
                    </Box>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4 }}>
                        <Grid xs={2} sm={4} md={4}>
                            <Box sx={{
                                padding: '20px 42px',
                                borderRadius: '5px',
                                backgroundColor: '#fff',
                                minHeight: '180px'
                            }}
                            >
                                <ImageBox imageUrl={images.iconLaptop} title={'Được cầm tay chỉ việc'} />
                            </Box>
                        </Grid>

                        <Grid xs={2} sm={4} md={4}>
                            <Box sx={{
                                padding: '20px 42px',
                                borderRadius: '5px',
                                backgroundColor: '#fff',
                                minHeight: '180px'
                            }}
                            >
                                <ImageBox imageUrl={images.iconLaptop} title={'Được hướng dẫn về tool ngay khi bắt đầu từ số 0'} />
                            </Box>
                        </Grid>

                        <Grid xs={2} sm={4} md={4}>
                            <Box sx={{
                                padding: '20px 42px',
                                borderRadius: '5px',
                                backgroundColor: '#fff',
                                minHeight: '180px'
                            }}
                            >
                                <ImageBox imageUrl={images.iconLaptop} title={'Được giới thiệu việc làm sau khóa học'} />
                            </Box>
                        </Grid>
                    </Grid>

                    <RegisterCourseModal sx={{
                        marginTop: '52px',
                        textAlign: 'center'
                    }} />
                </Container>
            </Box>

            <Box className="element-warp" mb={8}>
                <Container>
                    <Box textAlign={'center'} mb={4}>
                        <TextBox
                            component={'p'}
                            text={'Tham khảo sản phẩm'}
                            sx={{
                                mb: 1,
                                color: '#ff4f41',
                                fontWeight: 500
                            }}
                        />

                        <TextBox component={'h3'} text={'SẢN PHẨM HỌC VIÊN SAU KHÓA HỌC'} />
                    </Box>

                    <ProductsGrid />
                </Container>
            </Box>

            <Box className="element-warp" mb={8}>
                <Container>
                    <Box component={'h3'} sx={{
                            marginBottom: '38px',
                            paddingTop: '38px',
                            textAlign: 'center',
                            borderTop: '1px solid #dfdfdf'
                        }}
                    >
                        Ý KIẾN HỌC VIÊN SAU KHÓA HỌC
                    </Box>

                    <Testimonial />

                    <RegisterCourseModal sx={{
                        marginTop: '30px',
                        textAlign: 'center'
                    }} />
                </Container>
            </Box>
        </div>
    )
}

export default Home