import "./App.css";
import Doctorpage from "./components/doctorpage";
import store from "./components/statemngmt/store";
import Form from "./components/form";
import { useState, useEffect } from "react";

import axios from "axios";
import PageRefresh from "./components/refreshcontext";

function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState();
  const [login, setLogin] = useState();
  // const [currentPage,setCurrentPage]=useState("/");
  const [userdata, setUserData] = useState({});
  useEffect(() => {
    console.log("useeffect", store.getState());
    setLogin(store.getState()["data"]["login"]);
  });
  console.log("render", store.getState());
  const handelsign = () => {
    axios
      .post("http://localhost:9000/clinic/sign-in", { ...userdata })
      .then((response) => {
        if (response.data.signed) {
          setUser(response.data.role);
          setToken(response.data.token);

          store.dispatch({
            type: "login",
            payload: { login: true },
          });
          setLogin(true);
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("user", response.data.role);
          sessionStorage.setItem("login", true);
        }
      })
      .catch((e) => {
        alert(e);
      });
    // console.log("tesssssssssssssssssssssssss");
  };
  const handleUser = (current) => {
    setUser(current);
    alert("current user:", current);
  };
  const handleChange = (e) => {
    //  const temp = userdata;
    userdata[e.currentTarget.name] = e.currentTarget.value;
    // setUserData(temp);
    console.log(userdata);
  };
  return (
    <PageRefresh.Provider>
      <div className="App">
        {/* <Doctorpage /> */}
        {sessionStorage.getItem("login") ? (
          <Doctorpage user={sessionStorage.getItem("user")} />
        ) : (
          <Form
            handelsign={handelsign}
            handleUser={handleUser}
            handleChange={handleChange}
          />
        )}
      </div>
    </PageRefresh.Provider>
  );
}

export default App;
