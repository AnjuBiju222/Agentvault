import { motion } from "framer-motion";
import { Wallet, Shield, Cpu, ArrowLeftRight, Lock, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Agent Wallets",
    description: "Provision isolated wallets for each agent with programmable spending limits and auto-reconciliation.",
  },
  {
    icon: ArrowLeftRight,
    title: "Micro Payments",
    description: "Sub-cent transactions at scale. Pay for API calls, compute, and inter-agent services in real-time.",
  },
  {
    icon: Shield,
    title: "Guardrails Built In",
    description: "Set hard caps, velocity limits, and approval workflows so agents never exceed their mandate.",
  },
  {
    icon: Cpu,
    title: "API-First",
    description: "RESTful and gRPC endpoints designed for machine-to-machine communication. No human UI required.",
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description: "Full audit trails, KYA (Know Your Agent) verification, and regulatory reporting out of the box.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor agent spend, transaction patterns, and anomalies through streaming dashboards.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features = () => {
  return (
    <section className="relative py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            Infrastructure that <em>thinks ahead</em>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Everything your agents need to transact autonomously, safely, and at scale.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group rounded-lg border border-border p-8 hover:border-accent/30 transition-colors duration-300 bg-card/40"
            >
              <feature.icon className="w-5 h-5 text-accent mb-5" strokeWidth={1.5} />
              <h3 className="text-xl font-normal mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm font-body">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
