import {generatePath, Link} from "react-router-dom";
import config from "~/config";

function BlogItem({ data, readMore = 'Read more' }) {
    const linkPostSingle = generatePath(config.routes.single, {
        postId: data.id
    })

    return (
        <div className="post-item">
            <h2 className="title">
                <Link to={linkPostSingle}>
                    {data.title}
                </Link>
            </h2>

            <div className="meta">
                <p className="meta__item author">
                    <span className="left">Author:</span>
                    <span className="right">Admin</span>
                </p>

                <p className="meta__item date">
                    <span className="left">Post date:</span>
                    <span className="right">10/7/2022</span>
                </p>

                <p className="meta__item comment">
                    <span className="left">Comment:</span>
                    <span className="right">1</span>
                </p>
            </div>

            <div className="excerpt">
                <p>{data.body}</p>
            </div>

            <Link className="read-more" to={linkPostSingle}>
                {readMore}
            </Link>
        </div>
    )
}

export default BlogItem