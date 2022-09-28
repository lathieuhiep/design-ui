import config from "~/config";

// Pages
import Home from "~/pages/Home";
import Course from "~/pages/course";

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.course, component: Course },
]

export { publicRoutes }
