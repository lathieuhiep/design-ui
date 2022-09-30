import {Box, Container} from "@mui/material";
import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <Box sx={{ textAlign: 'center' }} className="copyright">
                <Container>
                    <p>Copyright & DiepLK</p>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer