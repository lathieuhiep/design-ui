import {Link} from "react-router-dom";
import {Box, Container} from "@mui/material";
import config from "~/config";

function NotFound() {
    return (
        <div className="container-wrap container-not-found">
            <Container>
                <Box component="section" sx={{ textAlign: 'center' }}>
                    <Box component="h1">
                        Page Not Found
                    </Box>

                    <Link to={config.routes.home}>
                        Go To Home Page
                    </Link>
                </Box>
            </Container>
        </div>
    )
}

export default NotFound