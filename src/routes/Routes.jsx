import config from "~/config";

// Pages
import Home from "~/pages/Home";
import Course from "~/pages/Course";
import Blog from "~/pages/Blog";
import Single from "~/pages/Single";

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.course, component: Course },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.single, component: Single },
]

export { publicRoutes }
