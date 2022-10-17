import {Box} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ImageBox from "~/components/imageBox";
import images from "~/assets/images";
import {useEffect, useState} from "react";
import {BenefitsAPI} from "~/api/BenefitsAPI";

function Benefits() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchBenefits = async () => {
            const result = await BenefitsAPI()

            setData(result.data)
        }

        fetchBenefits()
    }, [])

    return (
        <>
            <Box
                component="h3"
                sx={{
                    textAlign: 'center',
                    color: '#ffffff',
                    marginBottom: '36px'
                }}
            >
                {data.heading}
            </Box>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 4 }}>
                {data.group && (
                    data.group.map((item, index) => (
                        <Grid key={index} xs={2} sm={4} md={4}>
                            <Box sx={{
                                padding: '20px 42px',
                                borderRadius: '5px',
                                backgroundColor: '#fff',
                                minHeight: '180px'
                            }}
                            >
                                <ImageBox imageUrl={item.image} title={item.title} />
                            </Box>
                        </Grid>
                    ))
                )}
            </Grid>
        </>
    )
}

export default Benefits