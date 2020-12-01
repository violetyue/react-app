import device from "../pages/device";
import home from "../pages/home";
import order from "../pages/order";
import person from "../pages/person";


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