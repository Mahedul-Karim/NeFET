"use client";

import {  useState, SubmitEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES, type Category } from "@/lib/data";
import { useCtx } from "@/context/Context";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AddItemForm = () => {
  const { setItems, user } = useCtx();

  const router = useRouter()

  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [fullDescription, setFullDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState<Category>("Art");
  const [rarity, setRarity] = useState<
    "Common" | "Rare" | "Epic" | "Legendary"
  >("Rare");
  const [image, setImage] = useState("");

  const onSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const item = {
      id: Date.now().toString(),
      title,
      shortDescription,
      fullDescription,
      price: Number(price) || 0,
      category,
      rarity,
      image:
        image ||
        "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=800&h=800",
      creator: user?.name,
      createdAt:new Date()
    };

    setItems((items: any) => [...items, item]);
    toast.success("NFT minted to your collection!");
    router.push("/items")
  };

  return (
    <section className="mx-auto max-w-2xl px-4">
      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-primary-text">
          Mint a new NFT
        </h1>
        <p className="mt-2 text-muted">
          Add an item to your collection. It&apos;ll appear in the marketplace
          immediately.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="space-y-5 rounded-2xl border border-border-subtle/40 shadow-glow bg-card p-6"
      >
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="short">Short description</Label>
          <Input
            id="short"
            required
            maxLength={120}
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            className="mt-1"
            placeholder="One catchy line for the card..."
          />
        </div>
        <div>
          <Label htmlFor="full">Full description</Label>
          <Textarea
            id="full"
            required
            rows={4}
            value={fullDescription}
            onChange={(e) => setFullDescription(e.target.value)}
            className="mt-1"
          />
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="price">Price (ETH)</Label>
            <Input
              id="price"
              type="number"
              step="0.01"
              min="0"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1"
            />
          </div>
          <div>
            <Label>Category</Label>
            <Select
              value={category}
              onValueChange={(v) => setCategory(v as Category)}
            >
              <SelectTrigger className="mt-1 w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Rarity</Label>
            <Select
              value={rarity}
              onValueChange={(v) => setRarity(v as typeof rarity)}
            >
              <SelectTrigger className="mt-1 w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Common">Common</SelectItem>
                <SelectItem value="Rare">Rare</SelectItem>
                <SelectItem value="Epic">Epic</SelectItem>
                <SelectItem value="Legendary">Legendary</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label htmlFor="image">Image URL (optional)</Label>
          <Input
            id="image"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="mt-1"
            placeholder="https://..."
          />
        </div>
        <div className="flex gap-3 pt-2">
          <Button
            type="submit"
            className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-glow"
          >
            Mint NFT
          </Button>
          <Button
            asChild
            type="button"
            variant="outline"
            className="border-border-subtle bg-transparent text-primary-text hover:bg-transparent hover:text-primary-text"
          >
            <Link href="/items/manage">Cancel</Link>
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddItemForm;
