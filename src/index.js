import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout0 from "layouts/Auth0.js";
import AuthLayout1 from "layouts/Auth1.js";
import AuthLayout2 from "layouts/Auth2.js";
import AuthLayout3 from "layouts/Auth3.js";

import AdminLayout0 from "layouts/Admin0.js";
import AdminLayout1 from "layouts/Admin1.js";
import AdminLayout2 from "layouts/Admin2.js";
import AdminLayout3 from "layouts/Admin3.js";

import "./components/Style/Style.scss";

ReactDOM.render(
  <HashRouter name="">
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin0`} component={AdminLayout0} />
      <Route path={`/admin1`} component={AdminLayout1} />
      <Route path={`/admin2`} component={AdminLayout2} />
      <Route path={`/admin3`} component={AdminLayout3} />

      <Redirect from={`/`} to="/auth/SignIn" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
