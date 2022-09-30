import './Header.scss';

import Top from "./Top";
import {Menu, MenuItems} from "./Menu";

function Header() {
    return (
        <>
            <Top />

            <Menu items={MenuItems} />
        </>
    )
}

export default Header