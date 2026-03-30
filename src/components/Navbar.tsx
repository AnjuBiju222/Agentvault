import { Button } from "@/components/ui/button";
import logoMark from "@/assets/logo-mark.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <img src={logoMark} alt="AgentVault" className="w-6 h-6 invert opacity-90" />
          <span className="text-base font-body font-medium tracking-wide">AgentVault</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-body">
          <a href="#" className="hover:text-foreground transition-colors">Features</a>
          <a href="#" className="hover:text-foreground transition-colors">Docs</a>
          <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
        </div>
        <Button size="sm">Get Access</Button>
      </div>
    </nav>
  );
};

export default Navbar;
