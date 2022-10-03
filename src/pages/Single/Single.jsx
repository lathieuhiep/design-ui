import {Box, Container} from "@mui/material";

import images from "~/assets/images";
import './Single.scss';

function Single() {
    return (
        <div className="container-wrap container-single">
            <Container>
                <article className="post-single-item">
                    <h1 className="title">
                        Hello world!
                    </h1>

                    <Box component="figure" sx={{ mb: 2 }} className="featured-image">
                        <img src={images.noImage} alt={'post'} />
                    </Box>

                    <div className="post-content">
                        <p>
                            All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a garden, and she plucked another flower and ran with it to her mother. I suppose she must have looked rather delightful, for Mrs. Darling put her hand to her heart and cried, “Oh, why can’t you remain like this for ever!” This was all that passed between them on the subject, but henceforth Wendy knew that she must grow up. You always know after you are two. Two is the beginning of the end.
                        </p>

                        <p>
                            Mrs. Darling first heard of Peter when she was tidying up her children’s minds. It is the nightly custom of every good mother after her children are asleep to rummage in their minds and put things straight for next morning, repacking into their proper places the many articles that have wandered during the day.
                        </p>
                    </div>
                </article>
            </Container>
        </div>
    )
}

export default Single