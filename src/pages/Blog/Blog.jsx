import {useEffect, useState} from "react";
import {Container, Pagination, Stack} from "@mui/material";
import Grid  from '@mui/material/Unstable_Grid2';

import './Blog.scss';

import * as postAPI from "~/api/postsAPI";
import HasSidebar from "~/components/hasSidebar";
import { SidebarBlog } from "~/layout/components/Sidebar";
import BlogItem from "./BlogItem";

function Blog() {
    const columns = 6;
    const [dataPosts, setDataPosts] = useState([]);

    useEffect(() => {
        // call api posts
        const fetchPosts = async () => {
            const result = await postAPI.posts({
                _limit: 10
            })

            setDataPosts(result.data)
        }

        fetchPosts()

    }, [])

    return (
        <div className="container-wrap container-blog">
            <Container>
                <HasSidebar sidebarComponent={<SidebarBlog />}>
                    {dataPosts.length > 0 && (
                        <>
                            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                {dataPosts.map((result) => (
                                    <Grid xs={columns} key={result.id}>
                                        <BlogItem data={result} />
                                    </Grid>
                                ))}
                            </Grid>

                            <Stack spacing={2} sx={{alignItems: 'center', mt: 6}}>
                                <Pagination count={10} variant="outlined" shape="rounded" />
                            </Stack>
                        </>
                    )}
                </HasSidebar>
            </Container>
        </div>
    )
}

export default Blog