"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES, ITEMS, NftItem } from "@/lib/data";
import ProductCard from "../products/ProductCard";

type SortKey = "newest" | "price-asc" | "price-desc";

const Items = () => {
  const [items] = useState<NftItem[]>(() => ITEMS);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [maxPrice, setMaxPrice] = useState<string>("any");
  const [sort, setSort] = useState<SortKey>("newest");

  const filtered = useMemo(() => {
    let list = [...items];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.shortDescription.toLowerCase().includes(q) ||
          i.creator.toLowerCase().includes(q),
      );
    }
    if (category !== "all") list = list.filter((i) => i.category === category);
    if (maxPrice !== "any") {
      const max = Number(maxPrice);
      list = list.filter((i) => i.price <= max);
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "newest")
      list.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    return list;
  }, [items, search, category, maxPrice, sort]);

  return (
    <>
      <div className="mb-8">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-text">Explore</h1>
        <p className="mt-2 text-secondary-text">
          {filtered.length} of {items.length} items in the marketplace
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-[1fr_180px_180px_180px] mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
          <Input
            placeholder="Search by name, creator, or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {CATEGORIES.map((c) => (
              <SelectItem key={c} value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={maxPrice} onValueChange={setMaxPrice}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Max Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any price</SelectItem>
            <SelectItem value="1">Under 1 ETH</SelectItem>
            <SelectItem value="3">Under 3 ETH</SelectItem>
            <SelectItem value="5">Under 5 ETH</SelectItem>
            <SelectItem value="10">Under 10 ETH</SelectItem>
          </SelectContent>
        </Select>
        <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-asc">Price: Low → High</SelectItem>
            <SelectItem value="price-desc">Price: High → Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24 border border-dashed border-border rounded-2xl">
          <p className="text-muted-foreground">No items match your filters.</p>
          <Button
            variant="link"
            onClick={() => {
              setSearch("");
              setCategory("all");
              setMaxPrice("any");
            }}
          >
            Clear filters
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Items;
