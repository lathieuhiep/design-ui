import {Box} from "@mui/material";

function TextBox({ text, ...propsBox}) {
    return (
        <Box className="element-text-box" {...propsBox}>
            {text}
        </Box>
    )
}

export default TextBox