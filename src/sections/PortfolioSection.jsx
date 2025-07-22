/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Card, CardContent, Button, Badge } from "../components/ui/components";
import { Eye, Code as CodeIcon } from "lucide-react";
import { scrollToSection } from "../utils/helper";
import { projects } from "../utils/data";

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Exciting projects in development! As a startup, we're working on
            groundbreaking solutions that will showcase our expertise in
            full-stack development and AI integration.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-slate-50 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={project.statusColor}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <Badge variant="secondary" className="mr-2">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button
                      variant="secondary"
                      disabled
                      className="flex-1 text-slate-500"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button
                      variant="secondary"
                      disabled
                      className="flex-1 text-slate-500"
                    >
                      <CodeIcon className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-slate-600 mb-6">
            Have a project in mind? Let's discuss how we can bring your vision
            to life.
          </p>
          <Button
            onClick={() => {
              window.open(
                "https://wa.me/9581193026?text=Hi%20Cognito%20Visions%2C%0AI%27m%20interested%20in%20discussing%20a%20new%20project%20idea.%20Can%20we%20connect%20to%20explore%20how%20you%20can%20help%20bring%20it%20to%20life%3F%0AThank%20you!",
                "_blank"
              );
            }}
            className="bg-primary text-white px-8 py-3 hover:bg-secondary transition-colors"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default PortfolioSection;
