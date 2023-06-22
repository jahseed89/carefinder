import React, { lazy, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  ABOUT_ROUTE,
  FINDER_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,

} from "../content-management/Landing";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import UserDataContext from "../context";
import axios from "axios";

const LandingLayout = lazy(() => import("../layout/LandingLayout"));
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Finder = lazy(() => import("../pages/finder/Finder"));
const SignIn = lazy(() => import("../pages/auth/SignIn"));



const LandingRoute = () => {

  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState([])
  const url = "https://api.reliancehmo.com/v3/providers"

  useEffect (() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await axios.get(url);
      setUserData(resp.data.data);
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <UserDataContext.Provider value={{ loading, userData }}>
      <Routes>
        <Route element={<LandingLayout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={FINDER_ROUTE} element={<Finder />} />
          <Route path={LOGIN_ROUTE} element={<SignIn />} />

        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </UserDataContext.Provider>
  );
};

export default LandingRoute;
