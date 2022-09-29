import {Box} from "@mui/material";

function SocialNetworkItem({ link, classIcon, ...props }) {
    return (
        <Box component={'a'} href={link} className={'item'} target={'_blank'} {...props} rel="noreferrer">
            <Box component={'i'} className={classIcon} />
        </Box>
    )
}

export default SocialNetworkItem