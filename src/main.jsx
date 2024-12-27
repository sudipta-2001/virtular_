import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navebar from "./components1/Navebar.jsx";
import HeroSection from "./components1/HeroSection.jsx";
import FeatureSection from "./components1/FeatureSection.jsx";
import Workflow from "./components1/Workflow.jsx";
import Pricing from "./components1/Pricing.jsx";
import Testimonials from "./components1/Testimonials.jsx";
import Footer from "./components1/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navebar />
    <HeroSection />
    <FeatureSection />
    <Workflow />
    <Pricing />
    <Testimonials />
    <Footer/>
    <App />
  </StrictMode>
);
