import {Box, Container} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import images from "~/assets/images";
import Banner from "~/components/banner";
import IconList from "~/components/iconList";
import RegisterCourseModal from "~/components/registerCourseModal";

function Home() {
    return (
        <div className="container-home">
            <Banner />

            <Box className="element-warp" pt={8} pb={8}>
                <Container>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={6}>
                            <Box textAlign={"center"}>
                                <img loading="lazy" alt="" src={images.frame} />
                            </Box>
                        </Grid>

                        <Grid xs={6}>
                           <IconList title={'VẤN ĐỀ BẠN ĐANG GẶP PHẢI ?'} />
                           <IconList title={'GET DESIGN GIÚP BẠN'} titleColor={'#2ba94e'} mt={4} />

                            <RegisterCourseModal mt={4} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Home