import './ImageBox.scss';

function ImageBox({ title, imageUrl }) {
    return (
        <div className="element-box">
            <figure className="element-box__image">
                <img src={imageUrl} alt={title} loading="lazy" />
            </figure>

            <h5 className="element-box__title">
                {title}
            </h5>
        </div>
    )
}

export default ImageBox