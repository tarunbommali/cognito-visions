/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, Button } from "../components/ui/components";
import { whyChooseUsData, combinedExpertise } from "../utils/data";
import { scrollToSection } from "../utils/helper";

function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Cognito Visions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-4xl mx-auto">
            As a dynamic startup, we bring fresh perspectives, cutting-edge
            expertise, and unwavering commitment to transforming your digital
            vision into reality.
          </p>
        </motion.div>

        {/* Why Choose Us Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {whyChooseUsData.map((item, index) => {
            const Icon = item.icon;
            const iconColor = item.bgColor
              .replace("bg-", "text-")
              .replace("-100", "-600");
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 ${item.bgColor} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon className={`${iconColor} w-6 h-6`} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Section */}
        <motion.div
          className="p-4 sm:p-6 lg:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              At Cognito Visions, we believe in the power of artificial
              intelligence to transform how we perceive and interact with the
              world. Our mission is to develop cognitive solutions that bridge
              the gap between human intelligence and machine capability,
              creating systems that truly understand and adapt.
            </p>
          </div>
        </motion.div>

        {/* Combined Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl p-4 sm:p-6 lg:p-12"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Our Team's Combined Expertise
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              While Cognito Visions is a new venture, our strength lies in the
              deep, collective experience of our founding team. We've honed our
              skills at leading tech companies and are now united to deliver
              that expertise directly to you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {combinedExpertise.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="hover:shadow-md p-4 sm:p-6 rounded-2xl">
                  <div
                    className={`text-3xl sm:text-4xl font-bold ${stat.color} mb-2`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-slate-800 font-semibold text-base">
                    {stat.label}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-base sm:text-lg text-slate-600 mb-4">
              Ready to leverage our expertise for your next project?
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="shadow-md px-6 py-3"
            >
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
