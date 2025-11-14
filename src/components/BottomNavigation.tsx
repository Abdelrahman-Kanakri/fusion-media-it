import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Info, Mail } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "About", href: "#about", icon: Info },
  { name: "Contact", href: "#contact", icon: Mail },
];

const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass border-t border-border/50 pb-safe"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0.5rem)' }}
    >
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-around h-16 relative">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.substring(1);
            
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex flex-col items-center justify-center flex-1 h-full relative"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10 flex flex-col items-center gap-1">
                  <Icon 
                    className={`h-5 w-5 transition-colors ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  />
                  <span 
                    className={`text-xs font-medium transition-colors ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default BottomNavigation;
