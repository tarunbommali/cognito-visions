/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "../components/ui/components";
import { Code as CodeIcon, Brain, Database, Container } from "lucide-react";
import { scrollToSection } from "../utils/helper";

function HeroSection() {
  return (
    <section
      id="home"
      className="pt-10 min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
      <div className="absolute inset-0 opacity-40">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239CA3AF' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Innovating with AI,
              </span>
              <br />
              Full Stack & Cloud Engineering
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              From concept to launch, we deliver intelligent web and cloud
              solutions using React, Node.js, AWS, Docker, and AI — empowering
              startups to scale and innovate faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Button
                onClick={() => {
                  window.open(
                    "https://wa.me/9581193026?text=Hi%20Cognito%20Visions%2C%0AI%27m%20interested%20in%20getting%20a%20quote%20for%20your%20AI%2C%20Full%20Stack%2C%20or%20Cloud%20services.%20Please%20let%20me%20know%20how%20to%20proceed.%0AThank%20you!",
                    "_blank"
                  );
                }}
                className="bg-primary text-white px-6 py-3 sm:px-8 sm:py-4 hover:bg-secondary transition-all transform hover:scale-105 shadow-lg"
              >
                Get a Quote
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection("services")}
                className="border-primary text-primary px-6 py-3 sm:px-8 sm:py-4 hover:bg-primary hover:text-green-400 transition-all"
              >
                Explore Services
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-700 shadow-sm flex items-center">
                <CodeIcon className="text-cyan-500 mr-2 w-4 h-4" /> Full Stack
                Application
              </span>
              <span className="bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-700 shadow-sm flex items-center">
                <Brain className="text-orange-500 mr-2 w-4 h-4" /> AWS
              </span>
              <span className="bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-700 shadow-sm flex items-center">
                <Database className="text-green-500 mr-2 w-4 h-4" /> MongoDB
              </span>
              <span className="bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-700 shadow-sm flex items-center">
                <Container className="text-blue-500 mr-2 w-4 h-4" /> Docker
              </span>
              <span className="bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-slate-700 shadow-sm flex items-center">
                <Brain className="text-purple-500 mr-2 w-4 h-4" /> AI/ML
              </span>
            </div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md mx-auto lg:max-w-full">
              <motion.div
                className="relative"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src="https://placehold.co/800x600/e2e8f0/64748b?text=AI+Workspace"
                  alt="Modern tech workspace"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-accent to-primary rounded-2xl opacity-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-purple-500 rounded-2xl opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
