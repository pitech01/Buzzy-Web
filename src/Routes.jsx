import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { ProtectedRoute } from "components";
const RegisterPageFour = React.lazy(() => import("pages/RegisterPageFour"));
const RegisterPageTwo = React.lazy(() => import("pages/RegisterPageTwo"));
const RegisterPage = React.lazy(() => import("pages/RegisterPage"));
const AdvertisingPage = React.lazy(() => import("pages/AdvertisingPage"));
const RegisterPageFive = React.lazy(() => import("pages/RegisterPageFive"));
const Marketplace = React.lazy(() => import("pages/Marketplace"));
const LoginPageOne = React.lazy(() => import("pages/LoginPageOne"));
const SupportPage = React.lazy(() => import("pages/SupportPage"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const LoginPage = React.lazy(() => import("pages/LoginPage"));
const RegisterPageThree = React.lazy(() => import("pages/RegisterPageThree"));
const EarnPage = React.lazy(() => import("pages/EarnPage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/earnpage" element={<EarnPage />} />
          <Route path="/registerpagethree" element={<RegisterPageThree />} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/supportpage" element={<SupportPage />} />
          <Route path="/loginpageone" element={<LoginPageOne />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route
            path="/registerpagefive"
            element={<ProtectedRoute element={RegisterPageFive} />}
          />
          <Route path="/advertisingpage" element={<AdvertisingPage />} />
          <Route
            path="/registerpage"
            element={<ProtectedRoute element={RegisterPage} />}
          />
          <Route
            path="/registerpagetwo"
            element={<ProtectedRoute element={RegisterPageTwo} />}
          />
          <Route
            path="/registerpagefour"
            element={<ProtectedRoute element={RegisterPageFour} />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
