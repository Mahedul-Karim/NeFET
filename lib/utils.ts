import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ITEMS, NftItem } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getItem(id: string): NftItem | undefined {
  return ITEMS.find((i) => i.id === id);
}

export function addItem(item: Omit<NftItem, "id" | "createdAt">) {
  const newItem: NftItem = {
    ...item,
    id: `${item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now().toString(36)}`,
    createdAt: new Date().toISOString().split("T")[0],
  };
  ITEMS.push(newItem);
}
