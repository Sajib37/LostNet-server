import { Router } from "express";
import { userRoutes } from "../modules/User/user.route.js";
import { itemRoutes } from "../modules/Item/item.route.js";
import { itemRequestRoutes } from "../modules/calimRequest/claimRequest.route.js";

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: userRoutes
    },
    {
        path: '/item',
        route: itemRoutes
    },
    {
        path: '/item-request',
        route: itemRequestRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))
export default router;