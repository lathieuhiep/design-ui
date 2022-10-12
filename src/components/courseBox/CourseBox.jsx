import {Link} from "react-router-dom";
import {Box} from "@mui/material";

import './CourseBox.scss';
import images from "~/assets/images";

function CourseBox({...propsBox}) {
    return (
        <Box className="element-course-grid" {...propsBox}>
            <figure className="thumbnail">
                <Link to={'/'} >
                    <img src={images.productDetail} alt="khoa-hoc" loading="lazy" />
                </Link>
            </figure>

            <h3 className="title">
                <Link to={'/'} >
                    Khóa học UI Design (Web Design & App mobile)
                </Link>
            </h3>

            <div className="info">
                <ul>
                    <li>
                        <span className="label">Thời gian học:</span>
                        <span className="content">12</span>
                    </li>

                    <li>
                        <span className="label">Hình thức:</span>
                        <span className="content">Học online trực tiếp</span>
                    </li>

                    <li>
                        <span className="label">Số buổi trong tuần:</span>
                        <span className="content">2</span>
                    </li>

                    <li>
                        <span className="label">Học phí:</span>
                        <span className="content price">6.500.000 vnd</span>
                    </li>
                </ul>
            </div>

            <Link to={'/'} className="view-detail">
                Xem chi tiết
            </Link>
        </Box>
    )
}

export default CourseBox