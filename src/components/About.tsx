import { motion } from "framer-motion";
import { Target, Users, Award, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower businesses with innovative technology solutions that drive growth and efficiency.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "A dedicated team of professionals with years of experience in cutting-edge technologies.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We deliver excellence in every project, ensuring reliability and outstanding results.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Staying ahead with the latest tech trends to provide future-proof solutions.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Fusion Media IT</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking technology company specializing in comprehensive 
            IT solutions. From enterprise systems to mobile applications, we transform 
            your digital vision into reality.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass glow p-6 rounded-2xl text-center hover:glow-strong transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-glow flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none -z-10" />
    </section>
  );
};

export default About;
