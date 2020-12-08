import device from "../pages/device";
import home from "../pages/home";
import order from "../pages/order";
import person from "../pages/person";
import login from "../loginpage/login";


export const mainRoutes = [{
    path: "/pages/person",
    component: person
}, {
    path: "/pages/order",
    component: order
}, {
    path: "/pages/device",
    component: device
}, {
    path: "/pages/home",
    component: home
}]

export const loginRoutes = [
    {
        path: "/loginpage/login",
        component: login
    }
]