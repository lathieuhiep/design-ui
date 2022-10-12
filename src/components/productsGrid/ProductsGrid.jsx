import {Box, Button} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import './ProductsGrid.scss';

function ProductsGrid() {
    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(8)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={3} key={index}>
                        <Box
                            sx={{
                                height: 300,
                                backgroundColor: 'primary.dark'
                            }}
                        />
                    </Grid>
                ))}
            </Grid>

            <Box
                sx={{
                    marginTop: '42px',
                    textAlign: 'center'
                }}
            >
                <Button variant="outlined">
                    Xem thêm sản phẩm khác
                </Button>
            </Box>
        </>
    )
}

export default ProductsGrid