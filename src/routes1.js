// Class Advisor routes

import Dashboard from "views/Dashboard/Dashboard1.js";
import GeneralInformation from "views/Dashboard/GeneralInformation1";

import InternationalExposure from "views/Dashboard/InternationalExposure1";

import Profile from "views/Dashboard/Profile1.js";
import SignIn from "views/Pages/SignIn.js";

import {
  HomeIcon,
  StatsIcon,
  DocumentIcon,
  RocketIcon,
} from "components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/admin1",
  },
  {
    path: "/GeneralInformation",
    name: "General Information",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformation,
    layout: "/admin1",
  },

  {
    path: "/InternationalExposure",
    name: (
      <p
        style={{
          textAlign: "left",

          whiteSpace: "normal",
          wordWrap: "break-word",
        }}
      >
        International Exposure
      </p>
    ),
    icon: <RocketIcon color="inherit" />,
    component: InternationalExposure,
    layout: "/admin1",
  },

  // {
  //   path: "/profile",
  //   name: "Profile",
  //   icon: <PersonIcon color="inherit" />,
  //   secondaryNavbar: true,
  //   component: Profile,
  //   layout: "/admin1",
  // },
  {
    path: "/signin",
    name: "Log Out",
    icon: <DocumentIcon color="inherit" />,
    component: SignIn,
    layout: "/auth",
  },
];
export default dashRoutes;
