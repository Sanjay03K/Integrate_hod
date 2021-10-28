// import
import GeneralInformationdata1 from "views/Pages/GeneralInformationdata1";
import GeneralInformationdata2 from "views/Pages/GeneralInformationdata2";
import GeneralInformationdata3 from "views/Pages/GeneralInformationdata3";

import GeneralInformationDataEdit from "views/Pages/Edit/GeneralInformationDataEdit";

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
    path: "/GeneralInformationdata",
    name: "General Information",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformationdata1,
    layout: "/admin1",
  },
  {
    path: "/GeneralInformationdata",
    name: "General Information Data",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformationdata2,
    layout: "/admin2",
  },
  {
    path: "/GeneralInformationdata",
    name: "General Information",
    icon: <StatsIcon color="inherit" />,
    component: GeneralInformationdata3,
    layout: "/admin3",
  },

  {
    path: "/GeneralInformationDataEdit",
    name: "General Information Data Edit",
    component: GeneralInformationDataEdit,
    icon: <StatsIcon color="inherit" />,
    layout: "/admin1",
  },
];
export default dashRoutes;
