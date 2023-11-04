import { Flexbox } from "../pages/Flexbox/Flexbox";
import { Contact } from "../pages/Contact/Contact";
import { Products } from "../pages/Products/Products";
import { Home } from "../pages/Home/Home";
import {Privacy} from "../pages/Privacy/Privacy";

const GeneralRoutes = [
    { path: "/", component: Home},
    { path: "/flexbox", component: Flexbox},
    { path: "/contact", component: Contact},
    { path: "/products", component: Products},
    {path: "/privacy", component: Privacy}
]

const allRoutes = [...GeneralRoutes];
export default allRoutes;
