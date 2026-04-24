import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "../common/Container";

const Hero = () => {
  return (
    <Container className="relative overflow-hidden gradient-hero py-16 flex flex-col items-center justify-center">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border-strong bg-muted/20 px-4 py-2 text-sm text-secondary-text">
        <Sparkles className="h-4 w-4" />
        <span>The Future of Digital Ownership</span>
      </div>

      <h1 className="text-balance text-4xl font-bold tracking-tight  sm:text-5xl lg:text-6xl text-center text-primary-text">
        Discover, Collect & Sell{" "}
        <span className="text-primary">Extraordinary NFTs</span>
      </h1>
      <p className="text-center mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
        NeTFET is the world&apos;s most innovative marketplace for unique
        digital assets. Buy, sell, and discover rare digital items from creators
        worldwide.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button size="lg" asChild className="w-full sm:w-auto">
          <Link href="/items">
            Explore Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="w-full sm:w-auto text-secondary-text hover:bg-transparent hover:text-secondary-text"
        >
          <Link href="/register">Start Creating</Link>
        </Button>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span>Secure Transactions</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-500" />
          <span>Verified Creators</span>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
