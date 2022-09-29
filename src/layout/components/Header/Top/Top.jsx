import {Box, Container} from "@mui/material";

import SocialNetwork from "~/components/socialNetwork";
import InfoItem from "./InfoItem";

function Top() {
    return (
        <Box component="header" className="main-header">
            <Container>
                <Box className="grid">
                    <Box className="grid__item">
                        <InfoItem classIcon={'fa-solid fa-location-dot'} text={'988782, Our Street, S State'} />
                        <InfoItem classIcon={'fa-solid fa-envelope'} text={'info@domain.com'} />
                        <InfoItem classIcon={'fa-solid fa-mobile-screen'} text={'+1 234 567 18'} />
                    </Box>

                    <Box className="grid__item">
                        <SocialNetwork />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Top