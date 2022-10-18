import { lazy } from "react";

import config from "~/config";

// Pages
const Home = lazy(() => import('~/pages/Home'));
const Course = lazy(() => import('~/pages/Course'));
const Blog = lazy(() => import('~/pages/Blog'));
const Single = lazy(() => import('~/pages/Single'));
const Shop = lazy(() => import('~/pages/Shop/Shop'));
const SingleProduct = lazy(() => import('~/pages/Shop/SingleProduct'));
const NotFound = lazy(() => import('~/pages/NotFound'));

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home, classPage: 'template-home' },
    { path: config.routes.course, component: Course, classPage: 'template-course' },
    { path: config.routes.blog, component: Blog, classPage: 'template-blog' },
    { path: config.routes.single, component: Single, classPage: 'template-single' },
    { path: config.routes.shop, component: Shop, classPage: 'template-shop' },
    { path: config.routes.singleProduct, component: SingleProduct, classPage: 'template-single-product' },
    { path: config.routes.notFound, component: NotFound, classPage: 'template-not-found' },
]

export { publicRoutes }