// Invicible Routes

import GeneralInformationdata1 from "views/Pages/GeneralInformationdata1";
import GeneralInformationdata2 from "views/Pages/GeneralInformationdata2";
import GeneralInformationdata3 from "views/Pages/GeneralInformationdata3";

import GeneralInformationDataEdit from "views/Pages/Edit/GeneralInformationDataEdit";
import GeneralInformationdata from "views/Pages/Edit/GeneralInformationdata";

var dashRoutes = [
  {
    path: "/GeneralInformationdata",
    component: GeneralInformationdata1,
    layout: "/admin1",
  },
  {
    path: "/GeneralInformationdata",
    component: GeneralInformationdata2,
    layout: "/admin2",
  },
  {
    path: "/GeneralInformationdata",
    component: GeneralInformationdata3,
    layout: "/admin3",
  },

  {
    path: "/GeneralInformationDataEdit",
    component: GeneralInformationDataEdit,
    layout: "/admin1",
  },

  {
    path: "/GeneralInformationdata",
    component: GeneralInformationdata,
    layout: "/auth",
  },
];
export default dashRoutes;
