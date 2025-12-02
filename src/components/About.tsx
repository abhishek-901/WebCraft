import { motion } from "framer-motion";
import { Sparkles, Rocket, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
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
            About <span className="text-gradient">WebCraft</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolutionizing web development through artificial intelligence
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-bold">
              Empowering Creators with AI
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At WebCraft, we believe that creating stunning websites should be accessible to everyone. 
              Our AI-powered platform combines cutting-edge technology with intuitive design to help you 
              bring your digital vision to life.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're a startup launching your first product, a business looking to expand your 
              online presence, or a creative professional showcasing your portfolio, we provide the tools 
              and expertise to make it happen.
            </p>
            
            {/* Stats or Features */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <div className="text-4xl font-display font-bold text-gradient">500+</div>
                <p className="text-muted-foreground">Projects Launched</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-display font-bold text-gradient">98%</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Value Props */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="card-glass p-6 rounded-2xl border border-border/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-2">AI-Powered Design</h4>
                  <p className="text-muted-foreground">
                    Leverage machine learning to create unique, personalized designs that stand out.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass p-6 rounded-2xl border border-border/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-2">Lightning Fast</h4>
                  <p className="text-muted-foreground">
                    Build and deploy your website in record time with our streamlined workflow.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-glass p-6 rounded-2xl border border-border/50">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-2">Goal-Oriented</h4>
                  <p className="text-muted-foreground">
                    Every design decision is backed by data and focused on achieving your business goals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
