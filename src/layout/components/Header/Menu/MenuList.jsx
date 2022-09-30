import config from "~/config";

const MenuItems = [
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

export { MenuItems }