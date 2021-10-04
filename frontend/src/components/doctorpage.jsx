import React from "react";
import SideNav from "./sidenavbar";
import { Route, Switch, Redirect } from "react-router-dom";
import TopNavBar from "./navBar";
import {
  doctorRoute,
  receptionistRoute,
  labtechnicianRoute,
} from "../routes/routes";
// import Notfound from "./notfound";
// import Wellcome from "./wellcome";

export default function Doctorpage({ user }) {
  const users =
    user === "doctor"
      ? doctorRoute
      : user == "receptionist"
      ? receptionistRoute
      : user == receptionistRoute
      ? labtechnicianRoute
      :user == "labtechnicianRoute"
      
      
  return (
    <div className="big-card">
      <TopNavBar />
      <div className="content">
        <div className="side">
          <SideNav doctorRoute={users} />
        </div>
        <div className="main">
          <Switch>
            {/* <Route path="/paitient" component={Paitient} />
            <Route path="/tesform" component={TestForm} />
            <Route path="/labresult" component={LabResult} />
            <Route path="/treatment" component={Treatment} />
            <Route path="/adduser" component={AddUser} />
            <Route path="/profile" component={EditProfile} /> */}
            {/* <Route path="/not-found" component={Notfound} /> */}
            {users.map((el) => {
              return <Route path={el.path} component={el.page} />;
            })}
            {/* <Route path="/" exact component={Wellcome} /> */}
            {/* <Redirect to="not-found" /> */}
          </Switch>
        </div>
      </div>
    </div>
  );
}
