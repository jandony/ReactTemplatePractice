/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
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
import Language from "@material-ui/icons/Language";
import People from "@material-ui/icons/People";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import Forum from "@material-ui/icons/Forum";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import AllUsers from "views/AllUsers/AllUsers.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import WPBlog from "views/WPBlog/WPBlog.js";
import Tutorials from "views/Tutorials/Tutorials.js";
import UXLayoutBuilder from "views/UXLayoutBuilder/UXLayoutBuilder.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/tutorials",
    name: "Tutorials",
    icon: CollectionsBookmarkIcon,
    component: Tutorials,
    layout: "/admin",
  },
  {
    path: "/wp-blog",
    name: "WP Blog",
    icon: Forum,
    component: WPBlog,
    layout: "/admin",
  },
  {
    path: "/layout-build",
    name: "UX Layout Builder",
    icon: AspectRatioIcon,
    component: UXLayoutBuilder,
    layout: "/ux",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
    invisible: true,
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
    invisible: true,
  },
  {
    path: "/all-users",
    name: "All Users",
    icon: People,
    component: AllUsers,
    layout: "/admin",
    invisible: true,
  },
];

export default dashboardRoutes;
