import Container from "@/components/common/Container";
import { Sparkles, Users, Code2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <Container className="py-16">
      <div className="text-center">
        <h1 className="font-display text-5xl sm:text-6xl font-bold text-primary-text">
          Where digital ownership
          <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            feels effortless.
          </span>
        </h1>
        <p className="mt-6 text-lg text-muted max-w-2xl mx-auto">
          NeFT was founded in 2024 by a team of artists and engineers who were
          tired of clunky NFT marketplaces. We rebuilt the experience from
          scratch around three principles: speed, taste, and trust.
        </p>
      </div>

      <div className="mt-12 relative">
        <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl opacity-40" />
        <Image
          src={"/assets/hero-img.png"}
          alt="NeFT brand visual"
          width={1536}
          height={1024}
          className="relative w-full rounded-2xl border border-border-subtle/40 shadow-glow aspect-16/15 object-cover"
        />
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {[
          {
            icon: Sparkles,
            title: "Curation first",
            text: "Every collection is reviewed before it lands on our front page.",
          },
          {
            icon: Users,
            title: "Creator economy",
            text: "Royalties enforced on-chain so artists keep earning forever.",
          },
          {
            icon: Code2,
            title: "Open source",
            text: "Our smart contracts are public, audited, and forkable.",
          },
        ].map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-border-subtle bg-card p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-glow">
              <b.icon className="h-6 w-6 text-primary-text" />
            </div>
            <h3 className="mt-4 font-semibold text-lg text-secondary-text">{b.title}</h3>
            <p className="mt-2 text-sm text-muted">{b.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 prose prose-invert max-w-none">
        <h2 className="font-display text-3xl font-bold text-primary-text">Our mission</h2>
        <p className="text-muted leading-relaxed">
          Digital art deserves a marketplace that respects both the work and the
          wallet behind it. We&apos;re building NeFT to be the most beloved
          place to discover, mint, and trade NFTs — without the noise. Whether
          you&apos;re a first-time collector or a seasoned trader, you&apos;ll
          find a clean, performant experience that puts the art front and
          center.
        </p>
      </div>
    </Container>
  );
};

export default Page;
