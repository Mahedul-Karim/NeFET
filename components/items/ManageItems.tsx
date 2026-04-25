"use client";

import { toast } from "sonner";
import { Eye, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCtx } from "@/context/Context";
import Link from "next/link";

const ManageItems = () => {
  const { items, isLoggedIn, setItems } = useCtx();

  const handleDelete = (id: string, title: string) => {
    const filteredItems = [...items].filter((item) => item.id !== id);
    setItems(filteredItems);
    toast.success(`Removed "${title}"`);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold text-primary-text">My Collection</h1>
          <p className="mt-2 text-muted">
            {items.length} {items.length === 1 ? "item" : "items"} in your
            portfolio.
          </p>
        </div>
        <Button
          asChild
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-glow"
        >
          <Link href="/add-product">
            <Plus className="mr-2 h-4 w-4" /> Mint NFT
          </Link>
        </Button>
      </div>

      <div className="rounded-2xl border border-border-subtle bg-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="[&_th]:text-primary-text">
              <TableHead>Item</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Rarity</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center py-12 text-muted-foreground"
                >
                  No items yet. Mint your first NFT to get started.
                </TableCell>
              </TableRow>
            ) : (
              items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-12 w-12 rounded-lg object-cover border border-border-subtle"
                      />
                      <div>
                        <div className="font-medium text-secondary-text">{item.title}</div>
                        <div className="text-xs text-muted line-clamp-1 max-w-xs">
                          {item.shortDescription}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge variant="outline" className="border-border-subtle bg-transparent text-primary-text hover:bg-transparent hover:text-primary-text">{item.category}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Badge className="text-primary-text">{item.rarity}</Badge>
                  </TableCell>
                  <TableCell className="text-right font-display font-semibold text-primary-text">
                    {item.price} ETH
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button asChild size="icon">
                        <Link href={`/items/${item.id}`} >
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        size="icon"
                        variant={"destructive"}
                        onClick={() => handleDelete(item.id, item.title)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default ManageItems;
