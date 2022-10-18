import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Box, Button} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import './ProductsGrid.scss';
import {StudentProductsAPI} from "~/api/StudentProductsAPI";

function ProductsGrid() {
    const [data, setData] = useState([])

    useEffect(() => {
        // call api student products
        const fetchStudentProducts = async () => {
            const result = await StudentProductsAPI()

            setData(result.data)
        }

        fetchStudentProducts()
    }, [])

    return (
        <>
            <Grid
                className="element-student-product-grid"
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {data.map((item) => (
                    <Grid item xs={2} sm={4} md={3} key={item.id}>
                        <div className="item">
                            <div className="item__thumbnail">
                                <Link to={'/'} >
                                    <img src={item.thumb} alt={item.title} loading="lazy" />
                                </Link>
                            </div>

                            <h2 className="item__title">
                                <Link to={'/'}>
                                    <strong>Học Viên:</strong>
                                    <span>{item.title}</span>
                                </Link>
                            </h2>

                            <div className="item__info">
                                <div className="info-student">
                                    <i className="fas fa-user"></i>
                                    <span>{item.title}</span>
                                </div>

                                <div className="info-student">
                                    <i className="fas fa-laptop"></i>
                                    <span>{item.course}</span>
                                </div>
                            </div>
                        </div>
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