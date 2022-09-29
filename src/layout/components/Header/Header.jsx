import './Header.scss';

import config from "~/config";
import Menu from "./Menu";
import Top from "./Top";

const MenuItem = [
    {
        title: 'Trang chủ',
        to: config.routes.home
    },
    {
        title: 'Khoá học',
        to: config.routes.course,
        children: [
            {
                title: 'Ux/Ui',
                to: config.routes.course,
                children: [
                    {
                        title: 'Ux/Ui 2',
                        to: config.routes.course
                    }
                ]
            },
            {
                title: 'Design',
                to: config.routes.course
            },
        ]
    }
]

function Header() {
    return (
        <>
            <Top />

            <Menu items={MenuItem} />
        </>
    )
}

export default Header