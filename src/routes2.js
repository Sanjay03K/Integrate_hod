// import
import Dashboard from "views/Dashboard/Dashboard.js";
import GeneralInformation2 from "views/Dashboard/GeneralInformation2";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import GeneralInformationdata from "views/Pages/GeneralInformationdata";
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
    component: GeneralInformation2,
    layout: "/admin2",
  },
  {
    name: "TEST PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/GeneralInformationdata",
        name: (
          <p
            style={{
              textAlign: "left",
              lineHeight: "1.2rem",
              whiteSpace: "normal",
              wordWrap: "break-word",
            }}
          >
            General Information Data
          </p>
        ),
        icon: <StatsIcon color="inherit" />,
        component: GeneralInformationdata,
        layout: "/admin2",
      },
    ],
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
        layout: "/admin2",
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
];
export default dashRoutes;
