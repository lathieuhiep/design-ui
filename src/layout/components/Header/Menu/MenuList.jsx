import config from "~/config";

const MenuItems = [
    {
        title: 'Home',
        to: config.routes.home,
        end: true
    },
    {
        title: 'Course',
        to: config.routes.course,
    },
    {
        title: 'About',
        to: '/about'
    },
    {
        title: 'Blog',
        to: '/blog'
    },
    {
        title: 'Level 1',
        to: '/level',
        children: [
            {
                title: 'Level 2',
                to: '/level',
                children: [
                    {
                        title: 'Level 3',
                        to: '/level'
                    },
                    {
                        title: 'Level 3A',
                        to: '/level'
                    },
                    {
                        title: 'Level 3B',
                        to: '/level'
                    }
                ]
            },
            {
                title: 'Level 2A',
                to: '/level'
            },
            {
                title: 'Level 2B',
                to: '/level'
            },
        ]
    },
    {
        title: 'Contact',
        to: '/contact'
    },
]

export { MenuItems }