"use client";

import React, { useState } from "react";
import { Menu, X, Plus, LayoutGrid, LogOut, User } from "lucide-react";
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
import { signOut } from "firebase/auth";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { auth } from "@/lib/firebase";

const NavActions = () => {
  const { user, setUser } = useCtx();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <section className="relative">
      <div className="hidden md:flex items-center gap-2">
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 border-border-subtle bg-transparent hover:bg-transparent text-primary-text hover:text-primary-text"
              >
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-primary-text">
                  {user?.name && user.name[0]?.toUpperCase()}
                </div>
                <span className="max-w-[120px] truncate">{user.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-primary-text">
                    {user.name}
                  </span>
                  <span className="text-xs text-muted truncate">
                    {user.email}
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/add-product" className="cursor-pointer">
                  <Plus className="mr-2 h-4 w-4" /> Add Product
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/items/manage" className="cursor-pointer">
                  <LayoutGrid className="mr-2 h-4 w-4" /> Manage Products
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={async () => {
                  await signOut(auth);
                  setUser(null);
                  toast.success("Logged out successfully");
                }}
                className="cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" /> Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Button
              variant="ghost"
              asChild
              className="text-primary-text hover:bg-transparent hover:text-primary-text"
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
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
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
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
                    <div className="font-medium text-primary-text">{user.name}</div>
                    <div className="text-xs text-muted truncate">
                      {user.email}
                    </div>
                  </div>
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-primary-text"
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Product
                  </Link>
                  <Link
                    href="/items/manage"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-primary-text"
                  >
                    <LayoutGrid className="mr-2 h-4 w-4" /> Manage Products
                  </Link>
                  <button
                    onClick={() => {
                      setMobileOpen(false);
                    }}
                    className="flex items-center w-full px-3 py-2 rounded-md text-sm font-medium text-primary-text"
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
