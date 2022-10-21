import './App.css';
import './components/HomeScreen/home-screen.css';
import SearchScreen from "./components/Search/search-screen";
import HomeScreen from "./components/HomeScreen/home-screen";
import {BrowserRouter, Link, Switch, Route} from "react-router-dom";
import Profile from "./components/Profile/profile";
import ProfileAdmin from "./components/Profile/profile-admin";
import DetailsScreen from "./components/Details/detail-screen";
import Login from "./components/User/login";
import Privacy from "./components/PrivacyPolicy/privacy"
import Register from "./components/User/register";
import AboutUs from "./components/AboutUs";
import Others from "./components/Others";
import React, {Fragment, useEffect, useState} from 'react';
import userService from "./services/user-service";

function App() {
  const [user, setUser] = useState(undefined)

  const onClickLogout = () => {
    return userService.logout().then(() => setUser(undefined));
  }
  return (
      <div>

      </div>

  );
}

export default App;
