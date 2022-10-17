import {useEffect, useState} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {Box} from "@mui/material";

import './Abouts.scss';
import { AboutsAPI } from "~/api/AboutsAPI";
import RegisterCourseModal from "~/components/registerCourseModal";

function Abouts() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchAbouts = async () => {
            const result = await AboutsAPI()

            setData(result.data)
        }

        fetchAbouts()
    }, [])

    return(
        <Grid container className="element-abouts" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={6}>
                <Box textAlign={"center"}>
                    <img loading="lazy" alt="" src={data.media_url} />
                </Box>
            </Grid>

            <Grid xs={6}>
                {data.group && (
                    data.group.map((item, index) => (
                        <Box key={index} mb={4}>
                            <Box component={'h3'} className="title" sx={{color: item.color_title}}>
                                {item.title}
                            </Box>

                            <Box className="content content-list" dangerouslySetInnerHTML={{__html: item.content}} />
                        </Box>
                    ))
                )}

                <RegisterCourseModal />
            </Grid>
        </Grid>
    )
}

export default Abouts