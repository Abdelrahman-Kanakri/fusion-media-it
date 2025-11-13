import { motion } from "framer-motion";
import { 
  Server, 
  Cpu, 
  Globe, 
  Smartphone, 
  Headphones, 
  HardDrive 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Server,
    title: "ERP Systems",
    description: "Comprehensive enterprise resource planning solutions tailored to your business needs.",
  },
  {
    icon: Cpu,
    title: "AI Integrations",
    description: "Cutting-edge artificial intelligence implementations to automate and optimize workflows.",
  },
  {
    icon: Globe,
    title: "Desktop & Mobile Websites",
    description: "Responsive, high-performance websites that deliver exceptional user experiences.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps built with modern technologies.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "24/7 dedicated support to keep your systems running smoothly.",
  },
  {
    icon: HardDrive,
    title: "Hardware Services",
    description: "Complete hardware solutions from procurement to maintenance.",
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology solutions to elevate your business to the next level
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass glow h-full group hover:glow-strong transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-gradient-glow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
