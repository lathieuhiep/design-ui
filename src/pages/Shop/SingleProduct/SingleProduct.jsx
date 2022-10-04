import {useState} from "react";
import {Container, Tab, Box} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import Grid from "@mui/material/Unstable_Grid2";

import './SingleProduct.scss';
import { ProductImage, ProductSummary } from "~/pages/Shop/SingleProduct/components";

function SingleProduct() {
    const [value, setValue] = useState('tab-description')

    const handChangeTabList = (index) => {
        setValue(index)
    }

    return (
        <div className="container-wrap container-product">
            <Container>
                <Grid container className="product-image-summary-wrap" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{mb: 2}}>
                    <Grid className="gallery-box" xs={6}>
                        <ProductImage />
                    </Grid>

                    <Grid className="entry-summary" xs={6}>
                        <ProductSummary />
                    </Grid>
                </Grid>

                <Box className="product-tabs-wrapper">
                    <TabContext value={value}>
                        <Box className="tabs">
                            <TabList onChange={(e, index) => handChangeTabList(index)}>
                                <Tab label="Description" value="tab-description" />
                                <Tab label="Reviews" value="tab-reviews" />
                            </TabList>
                        </Box>

                        <Box className="tab-panels">
                            <TabPanel value="tab-description">
                                <p>
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
                                </p>
                            </TabPanel>

                            <TabPanel value="tab-reviews">Reviews</TabPanel>
                        </Box>
                    </TabContext>
                </Box>
            </Container>
        </div>
    )
}

export default SingleProduct