import React, { lazy, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  ABOUT_ROUTE,
  FINDER_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
} from "../content-management/Landing";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import HospitalDataContext from "../context";
import axios from "axios";

const LandingLayout = lazy(() => import("../layout/LandingLayout"));
const Home = lazy(() => import("../pages/home/Home"));
const About = lazy(() => import("../pages/about/About"));
const Finder = lazy(() => import("../pages/finder/Finder"));
const SignIn = lazy(() => import("../pages/auth/SignIn"));

const LandingRoute = () => {
  const [loading, setLoading] = useState(false);
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
  const url = "https://api.reliancehmo.com/v3/providers";

    const fetchData = async () => {
      setLoading(true);
      const resp = await axios.get(url);
      setHospitals(resp.data.data);
      setTimeout(() =>{
        setLoading(false)
      }, 5000)
    };
    fetchData();
  }, []);
  return (
    <HospitalDataContext.Provider
      value={{ loading, hospitals}}
    >
      <Routes>
        <Route element={<LandingLayout />}>
          <Route index element={<Navigate to="auth" />} />
          <Route path={LOGIN_ROUTE} element={<SignIn />} />
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={FINDER_ROUTE} element={<Finder />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HospitalDataContext.Provider>
  );
};

export default LandingRoute;
