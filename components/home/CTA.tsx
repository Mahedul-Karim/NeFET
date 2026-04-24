import React from "react";
import Container from "../common/Container";
import { Button } from "../ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <Container className="py-16">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary to-secondary p-10 lg:p-16 text-center">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
        <div className="relative">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-primary-text">
            Ready to mint your first piece?
          </h2>
          <p className="mt-4 text-secondary-text max-w-xl mx-auto">
            Join 240,000+ collectors and creators shaping the next era of
            digital ownership.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-accent-foreground text-primary-text hover:bg-accent-foreground/90">
              <Link href="/register">Create Account</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-subtle text-primary-text hover:bg-transparent hover:text-primary-text"
            >
              <Link href="/items">Browse Items</Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CTA;
