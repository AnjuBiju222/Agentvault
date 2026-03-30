import logoMark from "@/assets/logo-mark.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoMark} alt="AgentVault" className="w-5 h-5 invert opacity-90" loading="lazy" />
          <span className="font-body font-medium">AgentVault</span>
        </div>
        <p className="text-sm text-muted-foreground font-body">
          © 2026 AgentVault. Banking infrastructure for autonomous agents.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
