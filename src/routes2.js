// import
import Dashboard from "views/Dashboard/Dashboard.js";
import GeneralInformationCA from "views/Dashboard/GeneralInformationCA";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import GeneralInformationDataEdit from "views/Pages/Edit/GeneralInformationDataEdit";
import GeneralInformationdata from "views/Pages/GeneralInformationdata1";

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
    layout: "/admin2",
  },
  {
    path: "/Class-Advisor/GeneralInformation",
    name: "General Information",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformationCA,
    layout: "/admin2",
  },
  {
    path: "/Class-Advisor/GeneralInformationdata",
    name: "General Information Data",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformationdata,
    layout: "/admin2",
  },
      {
        path: "/Class-Advisor/GeneralInformationDataEdit",
        name: "General Information Data Edit",
        component: GeneralInformationDataEdit,
        icon: <StatsIcon color="inherit" />,
        layout: "/admin2",
      },    
      {
        path: "/profile",
        name: "Profile",
        icon: <PersonIcon color="inherit" />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin2",
      },
      {
        path: "/signin",
        name: "Sign In",
        icon: <DocumentIcon color="inherit" />,
        component: SignIn,
        layout: "/auth",
      },

];
export default dashRoutes;
