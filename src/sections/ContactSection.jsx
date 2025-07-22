/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  Button,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  Input,
  Textarea,
} from "../components/ui/components";
import { contactInfo } from "../utils/data";

function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully! (This is a demo)");
      e.target.reset();
    }, 1500);
  };

  const iconColorMap = {
    "bg-primary/10": "text-primary",
    "bg-green-100": "text-green-600",
    "bg-orange-100": "text-orange-600",
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your next project? We'd love to hear from you. Let's
            discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-slate-600 mb-8 text-base sm:text-lg">
                Whether you have a specific project in mind or just want to
                explore possibilities, we're here to help. Our team is ready to
                discuss your requirements and provide tailored solutions.
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const iconColor = iconColorMap[info.bgColor];
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className={`${iconColor} text-xl`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">
                          {info.title}
                        </h4>
                        <p className="text-slate-700 font-medium text-sm sm:text-base">
                          {info.value}
                        </p>
                        <p className="text-slate-600 text-xs sm:text-sm">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-900 mb-2">
                  Quick Response Guarantee
                </h4>
                <p className="text-slate-600 text-sm">
                  We typically respond to all inquiries within 24 hours. For
                  urgent matters, please call us directly.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 sm:mb-6">
                  Send us a Message
                </h3>
                <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>
                <Form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" required />
                      </FormControl>
                    </FormItem>
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          required
                        />
                      </FormControl>
                    </FormItem>
                  </div>
                  <FormItem>
                    <FormLabel>Subject *</FormLabel>
                    <FormControl>
                      <Input placeholder="What's this about?" required />
                    </FormControl>
                  </FormItem>
                  <FormItem>
                    <FormLabel>Message *</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={6}
                        placeholder="Tell us about your project or requirements..."
                        required
                      />
                    </FormControl>
                  </FormItem>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-semibold text-sm sm:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
