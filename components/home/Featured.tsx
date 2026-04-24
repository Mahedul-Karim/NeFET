import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ITEMS } from "@/lib/data";
import ProductCard from "../products/ProductCard";
import Container from "../common/Container";

const Featured = () => {
  return (
    <Container className="py-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="text-primary-text text-3xl sm:text-4xl font-bold">
            Trending drops
          </h2>
          <p className="mt-2 text-secondary-text">
            The hottest pieces collectors are hunting right now.
          </p>
        </div>
        <Button asChild variant="outline" className="hidden sm:inline-flex text-primary-text hover:text-primary-text hover:bg-transparent">
          <Link href="/items">View all</Link>
        </Button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.slice(0, 3).map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default Featured;
