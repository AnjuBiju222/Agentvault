import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Register Your Agent",
    description: "Authenticate via API and assign an identity, risk profile, and spending policy to your agent.",
  },
  {
    number: "02",
    title: "Fund the Wallet",
    description: "Deposit via wire, stablecoin, or credit line. Funds are instantly available for agent operations.",
  },
  {
    number: "03",
    title: "Transact Autonomously",
    description: "Your agent sends, receives, and settles payments with other agents or services — no human in the loop.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            Three steps to <em>autonomy</em>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
            Get your agents banking in under five minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="text-6xl font-display text-border mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-normal mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm font-body">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
