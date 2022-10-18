import './ImageBox.scss';
import {LazyLoadImage} from "react-lazy-load-image-component";

function ImageBox({ title, imageUrl }) {
    return (
        <div className="element-box">
            <figure className="element-box__image">
                <LazyLoadImage src={imageUrl} alt={title} />
            </figure>

            <h5 className="element-box__title">
                {title}
            </h5>
        </div>
    )
}

export default ImageBox