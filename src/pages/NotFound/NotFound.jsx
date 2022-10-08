import {Box, Container} from "@mui/material";

function NotFound() {
    return (
        <div className="container-wrap container-not-found">
            <Container>
                <Box component="section" sx={{ textAlign: 'center' }}>
                    <Box component="h1">
                        404
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default NotFound