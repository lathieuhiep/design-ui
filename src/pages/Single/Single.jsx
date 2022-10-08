import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Box, Container} from "@mui/material";

import './Single.scss';
import { postSingle } from "~/api/postsAPI";
import images from "~/assets/images";

function Single() {
    const { postId } = useParams();
    const [dataPost, setDataPost] = useState({});

    useEffect(() => {
        if ( postId ) {
            const fetchPostSingle = async () => {
                const result = await postSingle(postId)

                setDataPost(result.data)
            }

            fetchPostSingle()
        }

    }, [postId])

    return (
        <div className="container-wrap container-single">
            <Container>
                { Object.keys(dataPost).length > 0 && (
                    <article className="post-single-item">
                        <h1 className="title">
                            {dataPost.title}
                        </h1>

                        <Box component="figure" sx={{ mb: 2 }} className="featured-image">
                            <img src={images.noImage} alt={'post'} />
                        </Box>

                        <div className="post-content">
                            <p>{dataPost.body}</p>
                        </div>
                    </article>
                ) }
            </Container>
        </div>
    )
}

export default Single