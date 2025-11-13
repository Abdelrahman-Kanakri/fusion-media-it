import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
  ];

  const contactItems = [
    { icon: Mail, label: "contact@example.com", href: "mailto:contact@example.com" },
    { icon: Phone, label: "+1 (555) 123-4567", href: "tel:+15551234567" },
  ];

  return (
    <footer className="relative py-12 sm:py-16 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              <span className="text-primary">Fusion Media IT</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md">
              Empowering businesses with innovative technology solutions. 
              Let's build the future together.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className="glass hover:glow transition-all"
                    asChild
                  >
                    <a href={link.href} aria-label={link.label}>
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </motion.div>

          {/* Contact section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg sm:text-xl font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Fusion Media IT. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
