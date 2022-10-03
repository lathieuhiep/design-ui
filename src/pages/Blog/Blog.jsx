import {Container, Pagination, Stack} from "@mui/material";
import Grid  from '@mui/material/Unstable_Grid2';

import config from "~/config";
import './Blog.scss';

import HasSidebar from "~/components/hasSidebar";
import { SidebarBlog } from "~/layout/components/Sidebar";
import BlogItem from "./BlogItem";

function Blog() {
    const columns = 6;

    return (
        <div className="container-wrap container-blog">
            <Container>
                <HasSidebar sidebarComponent={<SidebarBlog />}>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid xs={columns}>
                            <BlogItem
                                title={'Hello world!'}
                                to={config.routes.single}
                                author={'Admin'}
                                postDate={'June 28, 2021'}
                                comment={1}
                                excerpt={'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!'}
                            />
                        </Grid>

                        <Grid xs={columns}>
                            <BlogItem
                                title={'Hello world!'}
                                to={config.routes.single}
                                author={'Admin'}
                                postDate={'June 28, 2021'}
                                comment={1}
                                excerpt={'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!'}
                            />
                        </Grid>

                        <Grid xs={columns}>
                            <BlogItem
                                title={'Hello world!'}
                                to={config.routes.single}
                                author={'Admin'}
                                postDate={'June 28, 2021'}
                                comment={1}
                                excerpt={'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!'}
                            />
                        </Grid>

                        <Grid xs={columns}>
                            <BlogItem
                                title={'Hello world!'}
                                to={config.routes.single}
                                author={'Admin'}
                                postDate={'June 28, 2021'}
                                comment={1}
                                excerpt={'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!'}
                            />
                        </Grid>

                        <Grid xs={columns}>
                            <BlogItem
                                title={'Hello world!'}
                                to={config.routes.single}
                                author={'Admin'}
                                postDate={'June 28, 2021'}
                                comment={1}
                                excerpt={'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!'}
                            />
                        </Grid>

                        <Grid xs={columns}>
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
                </HasSidebar>
            </Container>
        </div>
    )
}

export default Blog