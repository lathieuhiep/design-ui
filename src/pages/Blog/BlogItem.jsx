import {Link} from "react-router-dom";

function BlogItem({ title, to, author, postDate, comment, excerpt, readMore = 'Read more' }) {
    return (
        <div className="post-item">
            <h2 className="title">
                <Link to={to}>
                    {title}
                </Link>
            </h2>

            <div className="meta">
                <p className="meta__item author">
                    <span className="left">Author:</span>
                    <span className="right">{author}</span>
                </p>

                <p className="meta__item date">
                    <span className="left">Post date:</span>
                    <span className="right">{postDate}</span>
                </p>

                <p className="meta__item comment">
                    <span className="left">Comment:</span>
                    <span className="right">{comment}</span>
                </p>
            </div>

            <div className="excerpt">
                <p>{excerpt}</p>
            </div>

            <Link className="read-more" to={to}>
                {readMore}
            </Link>
        </div>
    )
}

export default BlogItem