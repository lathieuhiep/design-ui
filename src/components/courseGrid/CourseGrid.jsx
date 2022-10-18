import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Box} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {LazyLoadImage} from "react-lazy-load-image-component";

import './CourseGrid.scss';
import {CoursesAPI} from "~/api/CoursesAPI";

function CourseGrid() {
    const [data, setData] = useState([])

    useEffect(() => {
        // call api courses
        const fetchCourses = async () => {
            const result = await CoursesAPI()

            setData(result.data)
        }

        fetchCourses()
    }, [])

    return (
        <Grid className="element-course-grid" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data.map((item) => (
                <Grid key={item.id} xs={2} sm={4} md={4}>
                    <Box className="item">
                        <figure className="item__thumbnail">
                            <Link to={'/'}>
                                <LazyLoadImage src={item.thumb} alt={item.title} />
                            </Link>
                        </figure>

                        <h3 className="item__title">
                            <Link to={'/'} dangerouslySetInnerHTML={{__html: item.title}} />
                        </h3>

                        <div className="item__info">
                            <ul>
                                <li>
                                    <span className="label">Thời gian học:</span>
                                    <span className="content">{item.study_time}</span>
                                </li>

                                <li>
                                    <span className="label">Hình thức:</span>
                                    <span className="content">{item.study_form}</span>
                                </li>

                                <li>
                                    <span className="label">Số buổi trong tuần:</span>
                                    <span className="content">{item.number_lessons}</span>
                                </li>

                                <li>
                                    <span className="label">Học phí:</span>
                                    <span className="content price">{item.tuition}</span>
                                </li>
                            </ul>
                        </div>

                        <Link to={'/'} className="item__link">
                            Xem chi tiết
                        </Link>
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}

export default CourseGrid