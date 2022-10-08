import config from "~/config";

// Pages
import Home from "~/pages/Home";
import Course from "~/pages/Course";
import Blog from "~/pages/Blog";
import Single from "~/pages/Single";
import Shop from "~/pages/Shop/Shop";
import SingleProduct from "~/pages/Shop/SingleProduct";
import NotFound from "~/pages/NotFound";

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