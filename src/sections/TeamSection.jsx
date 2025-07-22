/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Card, CardContent, Button, Badge } from "../components/ui/components";
import { scrollToSection } from "../utils/helper";
import { teamMembers, teamBenefits } from "../utils/data";

function TeamSection() {
  const benefitIconColors = [
    "text-primary",
    "text-green-600",
    "text-purple-600",
    "text-orange-600",
  ];

  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A passionate team of innovators, developers, and problem-solvers
            dedicated to transforming ideas into cutting-edge digital solutions.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white text-center hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={`Professional portrait of ${member.name}`}
                        className="w-24 h-24 rounded-full mx-auto object-cover"
                      />
                      <div
                        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 ${member.iconBg} rounded-full flex items-center justify-center`}
                      >
                        <Icon className="text-white text-sm" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {member.name}
                    </h3>
                    <p className={`${member.roleColor} font-medium mb-3`}>
                      {member.role}
                    </p>
                    <p className="text-slate-600 text-sm mb-4">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* 🔗 Social Links */}
                    <div className="flex justify-center gap-4">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="LinkedIn"
                        >
                          <svg
                            className="w-5 h-5 text-blue-600 hover:text-blue-800 transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.6v2.2h.1c.5-.9 1.8-2.2 3.9-2.2 4.1 0 4.9 2.6 4.9 6.1V24h-4v-7.8c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4V24h-4V8.5z" />
                          </svg>
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Twitter"
                        >
                          <svg
                            className="w-5 h-5 text-sky-500 hover:text-sky-700 transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.959-2.178-1.559-3.594-1.559-2.72 0-4.924 2.204-4.924 4.922 0 .39.045.765.127 1.124-4.094-.205-7.725-2.164-10.152-5.144-.424.729-.666 1.577-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.809 2.105-6.102 2.105-.395 0-.786-.023-1.17-.067 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.637.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                          </svg>
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub"
                        >
                          <svg
                            className="w-5 h-5 text-gray-700 hover:text-black transition-colors"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 .5C5.65.5.5 5.64.5 12c0 5.08 3.29 9.38 7.84 10.9.57.1.78-.24.78-.55v-2.17c-3.19.7-3.86-1.53-3.86-1.53-.52-1.32-1.28-1.68-1.28-1.68-1.04-.7.08-.68.08-.68 1.15.08 1.75 1.18 1.75 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.26.72-1.55-2.54-.3-5.22-1.27-5.22-5.64 0-1.25.44-2.28 1.16-3.08-.12-.28-.5-1.42.1-2.95 0 0 .95-.3 3.1 1.17.9-.25 1.86-.37 2.82-.37.96 0 1.92.13 2.82.37 2.14-1.47 3.1-1.17 3.1-1.17.6 1.53.22 2.67.1 2.95.72.8 1.16 1.83 1.16 3.08 0 4.39-2.68 5.34-5.23 5.62.42.36.78 1.1.78 2.23v3.3c0 .31.21.66.8.55 4.55-1.52 7.84-5.82 7.84-10.9 0-6.36-5.15-11.5-11.5-11.5z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Join Our Team Card */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-none mx-auto">
            <CardContent className="p-4 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Join Our Growing Team
              </h3>
              <div className="mx-auto">
                <div className="text-center">
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    We're always on the lookout for exceptional talent. If
                    you're passionate about technology and innovation, we'd love
                    to hear from you.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => {
                        window.open(
                          "https://wa.me/9581193026?text=Hi%20Cognito%20Visions%20Team%2C%0AI'm%20interested%20in%20joining%20your%20team.%20Please%20let%20me%20know%20how%20I%20can%20share%20my%20resume.%0AThank%20you!",
                          "_blank"
                        );
                      }}
                      className="gradient-primary hover:shadow-glow transition-smooth"
                    >
                      Send Your Resume
                    </Button>
                    <Button variant="outline">
                      careers@cognitovisions.com
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TeamSection;
