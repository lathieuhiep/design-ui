import {Link} from "react-router-dom";
import {Button, Container} from "@mui/material";

import config from "~/config";
import images from "~/assets/images";
import MenuItem from "./MenuItem";

function Menu({ items }) {
    const renderSubmenu = (data) => {
        return (
            <>
                <span className="icon-sub">
                    <i className="fa-solid fa-chevron-down"></i>
                </span>

                <ul className="sub-menu">
                    {data.map((item, index) => {
                        const isParent = !!item.children;

                        return (
                            <li key={index} className={`menu-item${isParent ? ' menu-item-has-children' : ''}`}>
                                <MenuItem title={item.title} to={item.to} />

                                {isParent && (
                                    renderSubmenu(item.children)
                                )}
                            </li>
                        )
                    })}
                </ul>
            </>
        )
    }

    return (
        <nav className="main-nav">
            <Container>
                <div className="main-nav__warp">
                    <Link className="logo" to={config.routes.home}>
                        <img src={images.logo} alt="logo"/>
                    </Link>

                    <div className="main-menu">
                        <ul className="menu-primary">
                            {items.map((item, index) => {
                                const isParent = !!item.children;

                                return (
                                    <li key={index} className={`menu-item${isParent ? ' menu-item-has-children' : ''}`}>
                                        <MenuItem title={item.title} to={item.to} />

                                        {isParent && (
                                            renderSubmenu(item.children)
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className="btn-support">
                        <Button variant="contained" color="primary">
                            <img src={images.phone} alt="support" />
                            <span>Tôi cần tư vấn</span>
                        </Button>
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Menu