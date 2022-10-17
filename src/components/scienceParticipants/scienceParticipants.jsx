import {useEffect, useState} from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {Box} from "@mui/material";

import { ScienceParticipantsAPI } from "~/api/ScienceParticipantsAPI";

function ScienceParticipants() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchScienceParticipants = async () => {
            const result = await ScienceParticipantsAPI()

            setData(result.data)
        }

        fetchScienceParticipants()
    }, [])

    return (
        <Box className="element-science-participants">
            <Box
                component={'h3'}
                sx={{
                    marginBottom: '38px',
                    paddingTop: '38px',
                    textAlign: 'center',
                    borderTop: '1px solid #dfdfdf'
                }}
            >
                {data.heading}
            </Box>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4 }}>
                {data.group && (
                    data.group.map((item, index) => (
                        <Grid key={index} xs={2} sm={4} md={4}>
                            <Box sx={{
                                padding: '35px 12px 20px 16px',
                                border: '1px dashed #a6a6a6',
                                backgroundColor: '#f7f7f7',
                                height: '100%'
                            }}
                            >
                                <Box className="title-default" component={'h6'} mb={2}>
                                    {item.title}
                                </Box>

                                <Box className="content content-list" dangerouslySetInnerHTML={{__html: item.content}} />
                            </Box>
                        </Grid>
                    ))
                )}
            </Grid>
        </Box>
    )
}

export default ScienceParticipants