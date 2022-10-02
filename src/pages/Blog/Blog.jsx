import {Container, Pagination, Stack} from "@mui/material";
import Grid  from '@mui/material/Unstable_Grid2';

import config from "~/config";
import './Blog.scss';
import BlogItem from "./BlogItem";

function Blog() {
    return (
        <div className="page-default page-blog">
            <Container>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={4}>
                        <BlogItem
                            title={'Hello world!'}
                            to={config.routes.single}
                            author={'Admin'}
                            postDate={'June 28, 2021'}
                            comment={1}
                            excerpt={'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!'}
                        />
                    </Grid>

                    <Grid xs={4}>
                        <BlogItem
                            title={'Hello world!'}
                            to={config.routes.single}
                            author={'Admin'}
                            postDate={'June 28, 2021'}
                            comment={1}
                            excerpt={'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!'}
                        />
                    </Grid>

                    <Grid xs={4}>
                        <BlogItem
                            title={'Hello world!'}
                            to={config.routes.single}
                            author={'Admin'}
                            postDate={'June 28, 2021'}
                            comment={1}
                            excerpt={'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!'}
                        />
                    </Grid>

                    <Grid xs={4}>
                        <BlogItem
                            title={'Hello world!'}
                            to={config.routes.single}
                            author={'Admin'}
                            postDate={'June 28, 2021'}
                            comment={1}
                            excerpt={'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!'}
                        />
                    </Grid>

                    <Grid xs={4}>
                        <BlogItem
                            title={'Hello world!'}
                            to={config.routes.single}
                            author={'Admin'}
                            postDate={'June 28, 2021'}
                            comment={1}
                            excerpt={'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!'}
                        />
                    </Grid>

                    <Grid xs={4}>
                        <BlogItem
                            title={'Hello world!'}
                            to={config.routes.single}
                            author={'Admin'}
                            postDate={'June 28, 2021'}
                            comment={1}
                            excerpt={'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!'}
                        />
                    </Grid>
                </Grid>

                <Stack spacing={2} sx={{alignItems: 'center', mt: 6}}>
                    <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
            </Container>
        </div>
    )
}

export default Blog