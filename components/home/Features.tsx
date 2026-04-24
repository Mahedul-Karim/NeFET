import React from "react";
import Container from "../common/Container";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Globe2,
  Star,
} from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Verified Creators",
    desc: "Every listing is signed by a verified on-chain creator wallet.",
  },
  {
    icon: Zap,
    title: "Instant Mint",
    desc: "Gas-optimized minting under 30 seconds with rollup batching.",
  },
  {
    icon: Globe2,
    title: "Multi-chain",
    desc: "Trade across Ethereum, Base, Polygon and Solana from one wallet.",
  },
  {
    icon: Sparkles,
    title: "AI Discovery",
    desc: "Personalised drops curated to your taste and on-chain history.",
  },
];

const Features = () => {
  return (
    <Container className="py-16">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-text">
          Built for serious collectors
        </h2>
        <p className="mt-3 text-secondary-text">
          Everything you need to discover, mint, and trade — without the
          friction.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-border-subtle/50 bg-card p-6 transition-all  hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient mb-4">
              <f.icon className="h-6 w-6 text-primary-text" />
            </div>
            <h3 className="font-semibold text-lg text-primary-text">{f.title}</h3>
            <p className="mt-2 text-sm text-secondary-text">{f.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Features;
