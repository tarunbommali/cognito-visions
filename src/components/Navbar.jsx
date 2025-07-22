import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GoArrowDownRight } from "react-icons/go";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import { Button } from "./ui/components";
import { scrollToSection } from "../utils/helper";
import { navItems } from "../utils/data";
import { CognitoLogo } from "../assets/CognitoLogo";

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up in case component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const handleLinkClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-white/90 backdrop-blur-md border-b border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-1 sm:gap-2 max-w-[200px] overflow-hidden">
              <CognitoLogo height={48} />
            </div>

            {/* Desktop Nav */}
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

            {/* Right Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/9581193026?text=Hi%20Cognito%20Visions%2C%0AI'm%20interested%20in%20getting%20a%20quote%20for%20your%20AI%2C%20Full%20Stack%2C%20or%20Cloud%20services.%20Could%20you%20please%20provide%20more%20details%3F%0AThank%20you!",
                    "_blank"
                  )
                }
                className="hidden md:block rounded-2xl bg-blue-600 text-white hover:bg-blue-700 px-6 py-2"
              >
                Get a Quote
              </button>
              {/* Mobile Chat Icon Button */}
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/9581193026?text=Hi%20Cognito%20Visions%2C%0AI'm%20interested%20in%20getting%20a%20quote%20for%20your%20AI%2C%20Full%20Stack%2C%20or%20Cloud%20services.%20Could%20you%20please%20provide%20more%20details%3F%0AThank%20you!",
                    "_blank"
                  )
                }
                className="bg-transparent mx-auto rounded-2xl md:hidden w-[56px] h-[56px] flex items-center justify-center text-[#3b3a41]  transition-colors"
              >
                <BsFillChatRightQuoteFill className="w-6 h-6" />
              </button>

              {/* Mobile Menu Icon */}
              <button
                className="md:hidden p-2 rounded-lg transition-colors "
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="h-6 w-6 text-[#3b3a41]" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for Mobile Sidebar */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[100vw]  bg-white z-50 shadow-md transform transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <CognitoLogo height={40} />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X className="h-6 w-6 text-slate-700" />
          </button>
        </div>

        {/* Sidebar Nav Items */}
        <nav className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className="flex items-center justify-between w-full group"
            >
              <div className="flex items-end gap-2">
                {item.icon && <item.icon className="w-5 h-5 text-blue-600" />}
                <div className="text-left">
                  <p className="text-lg font-semibold text-slate-800 group-hover:text-blue-600">
                    {item.name}
                  </p>
                  {item.subTitle && (
                    <p className="text-sm text-slate-500">({item.subTitle})</p>
                  )}
                </div>
              </div>
              <div className="w-[36px] h-[36px] border-2 border-slate-300 rounded-full flex items-center justify-center group-hover:border-blue-600">
                <GoArrowDownRight className="text-slate-500 group-hover:text-blue-600" />
              </div>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
