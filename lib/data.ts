export type Category =
  | "Art"
  | "Avatars"
  | "Photography"
  | "Music"
  | "Gaming"
  | "3D";

export interface NftItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  price: number; // ETH
  category: Category;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  creator: string;
  createdAt: string;
}

export const ITEMS: NftItem[] = [
  {
    id: "nebula-helm-001",
    title: "Nebula Helm #001",
    shortDescription:
      "Cyber astronaut with a holo-visor scanning distant galaxies.",
    fullDescription:
      "Part of the Nebula Pioneers series, this 1/1 piece blends retro space iconography with chromatic neon accents. Each helmet visor contains a unique star map drawn from real telescope data.",
    image: "/assets/nft-1.jpg",
    price: 2.45,
    category: "Avatars",
    rarity: "Legendary",
    creator: "0xVoidArtist",
    createdAt: "2025-08-12",
  },
  {
    id: "prism-shard-014",
    title: "Prism Shard #014",
    shortDescription:
      "An iridescent crystal floating in pure void — ever shifting hues.",
    fullDescription:
      "Generated through a custom raytracing algorithm, every Prism Shard is a one-of-a-kind crystal formation with light refraction patterns no two collectors will ever share.",
    image: "/assets/nft-2.jpg",
    price: 1.2,
    category: "3D",
    rarity: "Epic",
    creator: "0xRefract",
    createdAt: "2025-09-03",
  },
  {
    id: "blue-ape-422",
    title: "Blue Ape #422",
    shortDescription:
      "Iconic pixel ape with gold chain — vintage on-chain royalty.",
    fullDescription:
      "From the original Pixel Primates collection. Sapphire fur trait (5% supply) plus the rare 24k gold chain accessory. A statement piece for any serious avatar collector.",
    image: "/assets/nft-3.jpg",
    price: 8.9,
    category: "Avatars",
    rarity: "Legendary",
    creator: "0xPrimate",
    createdAt: "2024-11-21",
  },
  {
    id: "vapor-horizon-07",
    title: "Vapor Horizon 07",
    shortDescription: "Synthwave landscape with infinite grid sunsets.",
    fullDescription:
      "Hand-crafted vaporwave scene paying homage to 80s aesthetics. Comes with an animated companion file and exclusive lo-fi audio loop.",
    image: "/assets/nft-4.jpg",
    price: 0.65,
    category: "Art",
    rarity: "Rare",
    creator: "0xSunsetDAO",
    createdAt: "2025-10-15",
  },
  {
    id: "neon-ronin-99",
    title: "Neon Ronin #99",
    shortDescription: "Cyber-samurai sentinel guarding the Night City skyline.",
    fullDescription:
      "Limited edition warrior from the Neo-Tokyo Guardians drop. Features animated neon trim, weapon variants, and unlockable lore content for holders.",
    image: "/assets/nft-5.jpg",
    price: 3.4,
    category: "Gaming",
    rarity: "Epic",
    creator: "0xRoninLabs",
    createdAt: "2025-07-30",
  },
  {
    id: "liquid-form-2",
    title: "Liquid Form II",
    shortDescription: "Chrome and sapphire sculpture in suspended motion.",
    fullDescription:
      "A meditative 3D rendered sculpture exploring the boundary between liquid and solid. Part of the artist's Form Studies series — only 25 ever minted.",
    image: "/assets/nft-6.jpg",
    price: 1.85,
    category: "3D",
    rarity: "Rare",
    creator: "0xFormStudio",
    createdAt: "2025-09-28",
  },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/items", label: "Explore" },
  { to: "/about", label: "About" },
] as const;

export const CATEGORIES: Category[] = ["Art", "Avatars", "Photography", "Music", "Gaming", "3D"];