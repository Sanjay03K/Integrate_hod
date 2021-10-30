// Student routes

import Dashboard from "views/Dashboard/Dashboard0.js";
import GeneralInformation from "views/Dashboard/GeneralInformation0";

import InternationalData from "views/Pages/InternationalData0";
import ExtraCurricularData from "views/Pages/ExtraCurricularData0";

import Profile from "views/Dashboard/Profile0.js";
import SignIn from "views/Pages/SignIn.js";

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
    layout: "/admin0",
  },
  {
    path: "/GeneralInformation",
    name: "General Information",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformation,
    layout: "/admin0",
  },

  {
    path: "/InternationalData",
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
    icon: <StatsIcon color="inherit" />,
    component: InternationalData,
    layout: "/admin0",
  },
  {
    path: "/ExtracurricularData",
    name: "ExtraCurricular",
    icon: <StatsIcon color="inherit" />,
    component: ExtraCurricularData,
    layout: "/admin0",
  },

  {
    path: "/profile",
    name: "Profile",
    icon: <PersonIcon color="inherit" />,
    secondaryNavbar: true,
    component: Profile,
    layout: "/admin0",
  },
  {
    path: "/signin",
    name: "Log Out",
    icon: <DocumentIcon color="inherit" />,
    component: SignIn,
    layout: "/auth",
  },
];
export default dashRoutes;
