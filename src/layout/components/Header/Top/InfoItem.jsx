import {Box} from "@mui/material";

function InfoItem({ classIcon, text }) {
    return (
        <Box className="info">
            <Box component="i" className={classIcon} mr={1}></Box>
            <Box component="span" className="text">{text}</Box>
        </Box>
    )
}

export default InfoItem