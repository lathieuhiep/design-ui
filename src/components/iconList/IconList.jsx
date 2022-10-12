import {List, ListItem} from "@mui/material";
import './IconList.scss';

function IconList({ title, titleColor = '#da0000', generate = [0, 1, 2, 3, 4, 5], ...propsBox }) {

    return (
        <List className="element-icon-list" sx={{padding: 0}} {...propsBox}>
            {generate.map((item, index) => {
                return (
                    <ListItem key={index} className="item">
                        <i className="fa-solid fa-circle"></i>

                        <span className="text">Bạn đang không biết định hướng của mình như nào ?</span>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default IconList