import {useState} from "react";
import {Box, Container, FormControl, MenuItem, Pagination, Stack} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from "@mui/material/Unstable_Grid2";

import './Shop.scss';
import HasSidebar from "~/components/hasSidebar";
import { SidebarShop } from "~/layout/components/Sidebar";
import ProductItem from "./components/ProductItem";

function Shop() {
    const columns = 4
    const [ordering, setOrdering] = useState('menu_order')

    // handle change ordering
    const handleChangeOrdering = (event: SelectChangeEvent) => {
        setOrdering(event.target.value)
    }

    return (
        <div className="container-wrap container-shop">
            <Container>
                <HasSidebar sidebarComponent={<SidebarShop />} order={1}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 3
                    }}>
                        <Box className="result-count">
                            <p>Showing all 12 results</p>
                        </Box>

                        <Box className="ordering" sx={{minWidth: 160}}>
                            <FormControl fullWidth>
                                <Select
                                    value={ordering}
                                    onChange={handleChangeOrdering}
                                >
                                    <MenuItem value={'menu_order'}>Default sorting</MenuItem>
                                    <MenuItem value={'popularity'}>Sort by popularity</MenuItem>
                                    <MenuItem value={'rating'}>Sort by average rating</MenuItem>
                                    <MenuItem value={'date'}>Sort by latest</MenuItem>
                                    <MenuItem value={'price'}>Sort by price: low to high</MenuItem>
                                    <MenuItem value={'price-desc'}>Sort by price: high to low</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Grid container className="products" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid xs={columns}>
                            <ProductItem
                                title={'Long Sleeve Tee'}
                                price={'$25'}
                            />
                        </Grid>

                        <Grid xs={columns}>
                            <ProductItem
                                title={'Long Sleeve Tee'}
                                price={'$25'}
                            />
                        </Grid>

                        <Grid xs={columns}>
                            <ProductItem
                                title={'Long Sleeve Tee'}
                                price={'$25'}
                            />
                        </Grid>

                        <Grid xs={columns}>
                            <ProductItem
                                title={'Long Sleeve Tee'}
                                price={'$25'}
                            />
                        </Grid>

                        <Grid xs={columns}>
                            <ProductItem
                                title={'Long Sleeve Tee'}
                                price={'$25'}
                            />
                        </Grid>

                        <Grid xs={columns}>
                            <ProductItem
                                title={'Long Sleeve Tee'}
                                price={'$25'}
                            />
                        </Grid>

                        <Grid xs={columns}>
                            <ProductItem
                                title={'Long Sleeve Tee'}
                                price={'$25'}
                            />
                        </Grid>

                        <Grid xs={columns}>
                            <ProductItem
                                title={'Long Sleeve Tee'}
                                price={'$25'}
                            />
                        </Grid>
                    </Grid>

                    <Stack spacing={2} sx={{alignItems: 'center', mt: 6}}>
                        <Pagination count={10} variant="outlined" shape="rounded" />
                    </Stack>
                </HasSidebar>
            </Container>
        </div>
    )
}

export default Shop