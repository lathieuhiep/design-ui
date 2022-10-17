import {Box, Container} from "@mui/material";

import './Home.scss';
import Banner from "~/components/banner";
import Abouts from "~/components/abouts";
import RegisterCourseModal from "~/components/registerCourseModal";
import TextBox from "~/components/textBox";
import CourseGrid from "~/components/courseGrid";
import ScienceParticipants from "~/components/scienceParticipants";
import Regulations from "~/components/regulations";
import Benefits from "~/components/benefits/Benefits";
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
                    <Abouts />
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
                    <ScienceParticipants />
                </Container>
            </Box>

            <Box className="element-warp" mb={8}>
                <Container>
                    <Regulations />
                </Container>
            </Box>

            <Box className="element-warp element-overlay element-benefits" mb={8} pt={8} pb={8}>
                <Container>
                   <Benefits />

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