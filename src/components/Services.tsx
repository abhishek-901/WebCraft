import { Code, Palette, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Build powerful, scalable web applications with modern technologies and best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Create stunning, user-friendly interfaces that deliver exceptional user experiences.",
  },
  {
    icon: Zap,
    title: "AI Automation",
    description: "Automate workflows and enhance productivity with cutting-edge AI solutions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="card-glass p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group h-full"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
