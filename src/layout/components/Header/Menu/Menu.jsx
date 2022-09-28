import {Container} from "@mui/material";

import config from "~/config";
import MenuItem from "./MenuItem";

function Menu() {
    return (
        <nav className="main-nav">
            <Container>
                <div className="main-nav__warp">
                    <div className="logo"></div>

                    <ul className="menu-primary">
                        <li>
                            <MenuItem title={'Trang chủ'} to={config.routes.home} />
                        </li>

                        <li>
                            <MenuItem title={'Khoá học'} to={config.routes.course} />
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}

export default Menu