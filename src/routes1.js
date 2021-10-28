// import
import Dashboard from "views/Dashboard/Dashboard.js";
import GeneralInformationHOD from "views/Dashboard/GeneralInformationHOD";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import GeneralInformationdata from "views/Pages/GeneralInformationdata";

import GeneralInformationDataEdit from "views/Pages/Edit/GeneralInformationDataEdit";
import GeneralInformationdata1 from "views/Pages/GeneralInformationdata1";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/GeneralInformationdata",
    name: "General Information",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformationdata,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },
    ],
  },
  {
    path: "/Class-Advisor/GeneralInformationdata",
    name: "General Information Data",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformationdata1,
    layout: "/admin2",
  },
  {
    path: "/Class-Advisor/GeneralInformationDataEdit",
    name: "General Information Data Edit",
    component: GeneralInformationDataEdit,
    icon: <StatsIcon color="inherit" />,
    layout: "/admin2",
  },
];
export default dashRoutes;
