/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import ColorsPage from "views/Colors/Colors.js";
import modificarcolor from "views/Colors/ModificarColor.js";
import crearcolor from "views/Colors/CrearColor.js";
import UsuariosPage from "views/Usuarios/Usuarios";



import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import { colors } from "@material-ui/core";
 

const dashboardRoutes = localStorage.getItem('user')==1 ? [
  {
    path: "/colors",
    name: "Listar Colores",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: ColorsPage,
    layout: "/admin"
  },{
    path: "/crearcolor",
    name: "Crear Color",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: crearcolor,
    layout: "/admin"
  },{
    path: "/modificarcolor",
    name: "Modificar/Eliminar Color",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: modificarcolor,
    layout: "/admin"
  }, {
    path: "/Usuarios",
    name: "Usuarios",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: UsuariosPage,
    layout: "/admin"
  }
  
]: [
  {
    path: "/colors",
    name: "Colores",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: ColorsPage,
    layout: "/admin"
  }]
;


export default dashboardRoutes;
