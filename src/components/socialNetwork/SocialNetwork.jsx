import {Box} from "@mui/material";

import './socialNetwork.scss'
import SocialNetworkItem from "./SocialNetworkItem";

function SocialNetwork() {
    return (
        <Box className="social-network">
            <SocialNetworkItem link={'#'} classIcon={'fa-brands fa-facebook-f'} />
            <SocialNetworkItem link={'#'} classIcon={'fa-brands fa-youtube'} />
            <SocialNetworkItem link={'#'} classIcon={'fa-brands fa-twitter'} />
        </Box>
    )
}

export default SocialNetwork