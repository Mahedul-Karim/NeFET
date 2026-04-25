import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ITEMS, NftItem } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getItem(id: string): NftItem | undefined {
  return ITEMS.find((i) => i.id === id);
}

