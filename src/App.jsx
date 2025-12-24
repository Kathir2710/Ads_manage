import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardLayout from "./layout/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import Facebook from "./pages/Facebook";
import Instagram from "./pages/Instagram";
import YouTube from "./pages/YouTube";

import { isAuth } from "./utils/auth";

/* LAYOUT CONTROLLER */
function Layout({ children }) {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname.startsWith("/dashboard");

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* PUBLIC */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* DASHBOARD (PROTECTED + NESTED) */}
          <Route
            path="/dashboard"
            element={isAuth() ? <DashboardLayout /> : <Navigate to="/login" />}
          >
            <Route index element={<DashboardHome />} />
            <Route path="facebook" element={<Facebook />} />
            <Route path="instagram" element={<Instagram />} />
            <Route path="youtube" element={<YouTube />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
