import type { NftItem } from "@/lib/data";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";
import Image from "next/image";

const ProductCard = ({ item }: { item: NftItem }) => {
  return (
    <article
      className="group rounded-2xl border border-border-subtle/20 bg-card overflow-hidden flex flex-col transition-all hover:-translate-y-1  hover:shadow-glow"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <Image
          src={item.image || ""}
          alt={item.title}
          loading="lazy"
          width={768}
          height={768}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold leading-tight text-primary-text">{item.title}</h3>
          <Badge variant="outline" className="text-xs shrink-0 text-secondary-text">
            {item.category}
          </Badge>
        </div>
        <p className="mt-2 text-sm text-muted line-clamp-2 flex-1">
          {item.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-muted">Price</div>
            <div className="font-display font-bold text-primary-text">{item.price} ETH</div>
          </div>
          <Button asChild size="sm" >
            <Link href={`/items/${item.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
