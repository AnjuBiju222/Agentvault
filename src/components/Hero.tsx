import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>

      <div className="absolute inset-0 z-[1] bg-background/70" />

      <div className="container relative z-10 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-8 font-body">
            Now in Private Beta
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] mb-6">
            Banking for
            <br />
            <em>AI Agents</em>
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-12 leading-relaxed font-body">
            Give your autonomous agents their own wallets, credit lines, and payment rails.
            Purpose-built micro-banking for the agentic economy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 h-12">
              Get Early Access
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 h-12">
              Read the Docs
            </Button>
          </div>

          <div className="mt-14 flex items-center gap-8 text-xs tracking-[0.15em] uppercase text-muted-foreground justify-center font-body">
            <span>SOC 2 Compliant</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>Sub-second Settlements</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
