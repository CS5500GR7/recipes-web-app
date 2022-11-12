import "./App.css";
import "./components/HomeScreen/home-screen.css";
import SearchScreen from "./components/Search/search-screen";
import HomeScreen from "./components/HomeScreen/home-screen";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile/profile";
import ProfileAdmin from "./components/Profile/profile-admin";
import DetailsScreen from "./components/Details/detail-screen";
import Login from "./components/User/login";
import Privacy from "./components/PrivacyPolicy/privacy";
import Register from "./components/User/register";
import AboutUs from "./components/AboutUs";
import Others from "./components/Others";
import React, { Fragment, useEffect, useState } from "react";
import userService from "./services/user-service";

function App() {
  const [user, setUser] = useState(undefined);

  const onClickLogout = () => {
    console.log("Log out success");
    return userService.logout().then(() => setUser(undefined));
  };
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link
            className="navbar-brand homeScreen-cocktail homeScreen-title"
            to="/"
          >
            {" "}
            Drink Masters{" "}
          </Link>

          <div className="collapse navbar-collapse"></div>

          {user && (
            <>
              <div className="welcome-sign">Welcome: {user.username}</div>
              <button className="btn btn-outline-none" onClickCapture={onClickLogout}>
                Logout
              </button>
            </>
          )}
          {!user && (
            <Fragment>
              <Link className="btn btn-warning" to="/login">
                Login
              </Link>
            </Fragment>
          )}
        </nav>

        <Switch>
          <Route path="/" exact={true}>
            <HomeScreen />
          </Route>

          <Route path="/login" exact={true}>
            <Login user={user} setUser={setUser} />
          </Route>

          <Route path="/register" exact={true}>
            <Register user={user} />
          </Route>

          <Route path={["/search", "/search/:cocktailParams"]} exact={true}>
            <SearchScreen />
          </Route>

          <Route path="/privacy" exact={true}>
            <Privacy />
          </Route>

          <Route path="/details/:cocktailId" exact={true}>
            <DetailsScreen user={user} />
          </Route>

          <Route path="/profiles" exact={true}>
            <ProfileAdmin />
          </Route>

          <Route path="/about" exact={true}>
            <AboutUs />
          </Route>

          <Route path="/others" exact={true}>
            <Others user={user} />
          </Route>

          <Route path={["/profile", "/profiles/:uid"]} exact={true}>
            <Profile user={user} setUser={setUser} />
          </Route>
        </Switch>
        <div></div>
        <div className="text-center content-wrap page-container main-footer footer-separation-padding">
          <div>
            <h4 className="rose-red">What is cocktail?</h4>
          </div>
          <div style={{ color: "darkgray" }}>
            An alcoholic drink consisting of a spirit or spirits mixed with
            other ingredients, such as fruit juice or cream.
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
