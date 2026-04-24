import React from "react";
import Container from "../common/Container";

const STATS = [
  { value: "240K+", label: "Collectors" },
  { value: "1.8M", label: "Items minted" },
  { value: "$420M", label: "Trading volume" },
  { value: "12K", label: "Verified artists" },
];

const Stats = () => {
  return (
    <Container className="py-16">
      <div className="relative overflow-hidden rounded-3xl border border-border-subtle/20 bg-linear-to-br from-card via-card to-primary/20 p-10 lg:p-14">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <h2 className="font-display text-4xl lg:text-5xl font-bold bg-linear-to-r from-primary-text to-secondary bg-clip-text text-transparent">
                {s.value}
              </h2>
              <p className="mt-2 text-sm text-secondary-text uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Stats;
