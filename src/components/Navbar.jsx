import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/components";
import { scrollToSection } from "../utils/helper";
import { navItems } from "../utils/data";
import { CognitoLogo } from "../assets/CognitoLogo";

// Navbar Component

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white/90 backdrop-blur-md border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-1 sm:gap-2 max-w-[200px] overflow-hidden">
            <CognitoLogo height={48} />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={() => {
                window.open(
                  "https://wa.me/9581193026?text=Hi%20Cognito%20Visions%2C%0AI'm%20interested%20in%20getting%20a%20quote%20for%20your%20AI%2C%20Full%20Stack%2C%20or%20Cloud%20services.%20Could%20you%20please%20provide%20more%20details%3F%0AThank%20you!",
                  "_blank"
                );
              }}
              className="hidden sm:inline-flex bg-blue-600 text-white hover:bg-blue-700 px-6 py-2"
            >
              Get a Quote
            </Button>

            <button
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="fixed inset-0 z-50 bg-white md:hidden flex flex-col">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b shadow-sm">
              <div className="max-w-[180px] overflow-hidden">
                <CognitoLogo height={48} />
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="h-6 w-6 text-slate-700" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-center justify-center flex-1 min-h-[100vh] bg-white space-y-6 px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="text-xl text-slate-800 font-medium hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => handleLinkClick("contact")}
                className="mt-6 bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg font-semibold w-full max-w-xs"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
