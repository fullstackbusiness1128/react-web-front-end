/**
=========================================================
* Soft UI Dashboard PRO React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/


// Soft UI Dashboard PRO React icons
import MainKpis from "./layouts/dashboards/mainKpis";
import Sales from "layouts/dashboards/sales/Sales";
import Operations from "layouts/dashboards/operations";
import Inventory from "layouts/dashboards/inventory";
import Clients from "layouts/dashboards/clients";
import {ShoppingCart, Attractions, Inventory as Inv, Person} from "@mui/icons-material";
import Shop from "./opeta/Icons/Shop";

const routes = [
    {
    type: "collapse",
    name: "Main KPIs",
    key: "main-kpis",
    route: "/dashboards/main-kpis",
    icon: <Shop size="12px" />,
    noCollapse: true,
    component: <MainKpis />,
  },
  {
    type: "collapse",
    name: "Sales",
    key: "sales",
    route: "/dashboards/sales",
    icon: <ShoppingCart size="12px" />,
    noCollapse: true,
    component: <Sales />,
  },
  {
    type: "collapse",
    name: "Operations",
    key: "operations",
    route: "/dashboards/operations",
    icon: <Attractions size="12px" />,
    noCollapse: true,
    component: <Operations />,
  },
  {
    type: "collapse",
    name: "Inventory",
    key: "inventory",
    route: "/dashboards/inventory",
    icon: <Inv size="12px" />,
    noCollapse: true,
    component: <Inventory />
  },
  {
    type: "collapse",
    name: "Clients",
    key: "clients",
    route: "/dashboards/clients",
    icon: <Person size="12px" />,
    noCollapse: true,
    component: <Clients />
  },
];

export default routes;
