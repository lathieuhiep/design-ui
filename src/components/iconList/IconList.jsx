import {Box, List, ListItem} from "@mui/material";
import './IconList.scss';

function IconList({ title, titleColor = '#da0000', ...propsBox }) {
    const generate = [0, 1, 2, 3, 4, 5]

    return (
        <Box className="icon-list" {...propsBox}>
            {title && (
                <Box className="title" component="h2" color={titleColor}>
                    {title}
                </Box>
            )}

            <List>
                {generate.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <i className="fa-solid fa-circle"></i>

                            <span className="text">Bạn đang không biết định hướng của mình như nào ?</span>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )
}

export default IconList