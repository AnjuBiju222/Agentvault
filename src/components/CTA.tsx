import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-border rounded-lg p-12 md:p-20 text-center bg-card/40"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-6">
            The agentic economy is here.
            <br />
            <em>Bank on it.</em>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 font-body">
            Join the waitlist and be among the first to give your AI agents financial autonomy.
          </p>
          <Button size="lg" className="text-base px-10 h-12">
            Request Access
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
