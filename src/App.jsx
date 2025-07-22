import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./sections/HeroSections.jsx";
import ServicesSection from "./sections/ServicesSection.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import PortfolioSection from "./sections/PortfolioSection.jsx";
import TeamSection from "./sections/TeamSection.jsx";
import CareersSection from "./sections/CareersSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

// Floating Go-to-Top Button Component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}

// Main App Component
function App() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <PortfolioSection />
        <TeamSection />
        {/* <CareersSection /> */}
        <ContactSection />
      </main>
      <Footer />

      {/* Floating Go-to-Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
