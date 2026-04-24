"use client";

import { NftItem } from "@/lib/data";
import { ArrowLeft, Award, Calendar, Tag, User } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Badge } from "../ui/badge";
import Image from "next/image";

interface Props {
  item: NftItem;
}

const ItemDetails: React.FC<Props> = ({ item }) => {
  const router = useRouter();

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => router.push("/items")}
        className="mb-6 -ml-3 text-primary-text hover:bg-transparent hover:text-primary-text"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Items
      </Button>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/20 rounded-3xl blur-3xl opacity-40" />
          <Image
            src={item.image}
            alt={item.title}
            width={768}
            height={768}
            className="relative w-full aspect-square object-cover rounded-2xl  shadow-glow"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="border border-border-subtle text-secondary-text">{item.category}</Badge>
            <Badge className="bg-gradient-to-r from-primary to-secondary border-0 text-primary-text">
              {item.rarity}
            </Badge>
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold text-primary-text">
            {item.title}
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm text-muted">
            <User className="h-4 w-4" />
            <span>by</span>
            <span className="font-medium text-secondary-text">{item.creator}</span>
          </div>

          <div className="mt-8 rounded-2xl border border-border-subtle bg-card p-6">
            <div className="text-sm text-muted-foreground">Current price</div>
            <div className="mt-1 font-display text-4xl font-bold bg-gradient-to-r from-primary-text to-secondary bg-clip-text text-transparent">
              {item.price} ETH
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              ≈ ${(item.price * 3200).toLocaleString()}
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary sm:grow"
              >
                Buy Now
              </Button>
              <Button size="lg" variant="outline" className=" border-border-subtle text-primary-text bg-transparent hover:bg-transparent hover:text-primary-text sm:grow">
                Place Bid
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-semibold text-primary-text">Description</h2>
            <p className="mt-3 text-secondary-text leading-relaxed">
              {item.fullDescription}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="font-display text-xl font-semibold text-primary-text">
              Specifications
            </h2>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-border-subtle p-4">
                <dt className="flex items-center gap-2 text-muted">
                  <Tag className="h-3 w-3" /> Category
                </dt>
                <dd className="mt-1 font-medium text-secondary-text">{item.category}</dd>
              </div>
              <div className="rounded-lg border border-border-subtle p-4">
                <dt className="flex items-center gap-2 text-muted">
                  <Award className="h-3 w-3" /> Rarity
                </dt>
                <dd className="mt-1 font-medium text-secondary-text">{item.rarity}</dd>
              </div>
              <div className="rounded-lg border border-border-subtle p-4">
                <dt className="flex items-center gap-2 text-muted">
                  <Calendar className="h-3 w-3" /> Minted
                </dt>
                <dd className="mt-1 font-medium text-secondary-text">{item.createdAt}</dd>
              </div>
              <div className="rounded-lg border border-border-subtle p-4">
                <dt className="flex items-center gap-2 text-muted">
                  <User className="h-3 w-3" /> Creator
                </dt>
                <dd className="mt-1 font-medium truncate text-secondary-text">{item.creator}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
