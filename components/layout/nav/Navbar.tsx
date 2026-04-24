"use client";

import { NAV_LINKS } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-1">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.to}
          href={link.to}
          className={`px-4 py-2 text-sm font-medium  rounded-md transition-colors hover:bg-primary hover:text-primary-text ${pathname === link.to ? "text-primary-text bg-primary" : "text-secondary-text"}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
