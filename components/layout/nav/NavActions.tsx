"use client";

import React, { useState } from "react";
import { Menu, X, Wallet, Plus, LayoutGrid, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCtx } from "@/context/Context";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";
import { usePathname } from "next/navigation";

const NavActions = () => {
  const { user } = useCtx();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname()

  return (
    <section className="relative">
      <div className="hidden md:flex items-center gap-2">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-xs font-bold text-primary-foreground">
                  {user.name[0]?.toUpperCase()}
                </div>
                <span className="max-w-[120px] truncate">{user.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">{user.name}</span>
                  <span className="text-xs text-muted-foreground truncate">
                    {user.email}
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/" className="cursor-pointer">
                  <Plus className="mr-2 h-4 w-4" /> Add Product
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/items/manage" className="cursor-pointer">
                  <LayoutGrid className="mr-2 h-4 w-4" /> Manage Products
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => {}} className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" /> Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Button variant="ghost" asChild className="text-primary-text hover:bg-transparent hover:text-primary-text">
              <Link href="/login">Login</Link>
            </Button>
            <Button
              asChild
            >
              <Link href="/register">Register</Link>
            </Button>
          </>
        )}
      </div>
      <div>
        <Button
          size={"icon"}
          className="md:hidden inline-flex bg-transparent"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="size-6"/>
          ) : (
            <Menu className="size-6" />
          )}
        </Button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border border-border-subtle bg-card fixed top-16.25 right-0 left-0">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium  ${pathname === link.to ? "bg-primary text-primary-text" : "text-secondary-text bg-transparent"}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-3 border-t border-border/40 space-y-2">
              {user ? (
                <>
                  <div className="px-3 py-2 text-sm">
                    <div className="font-medium">{user.name}</div>
                    <div className="text-xs text-muted-foreground truncate">
                      {user.email}
                    </div>
                  </div>
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/30"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Product
                  </Link>
                  <Link
                    href="/items/manage"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/30"
                  >
                    <LayoutGrid className="mr-2 h-4 w-4" /> Manage Products
                  </Link>
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium hover:bg-accent/30"
                  >
                    <LogOut className="mr-2 h-4 w-4" /> Log out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium border border-primary justify-center text-primary"
                  >
                    <User className="mr-2 h-4 w-4" /> Login
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 rounded-md text-sm font-medium  text-primary-text text-center bg-primary hover:opacity-90"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NavActions;
