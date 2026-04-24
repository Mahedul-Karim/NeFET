import React from "react";
import { Wallet } from "lucide-react";
import Link from "next/link";
import Logo from "../common/Logo";
import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="border-t border-border-subtle/40 bg-foreground/20 mt-24">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-secondary-text max-w-sm">
              The marketplace for the next generation of digital collectibles.
              Discover, collect, and create rare NFTs from artists across the
              multiverse.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-primary-text text-sm uppercase tracking-wider">
              Marketplace
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/items"
                  className="text-muted"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href="/items/add"
                  className="text-muted"
                >
                  Mint NFT
                </Link>
              </li>
              <li>
                <Link
                  href="/items/manage"
                  className="text-muted"
                >
                  My Collection
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-primary-text text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NeFET. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#">
              Privacy
            </a>
            <a href="#">
              Terms
            </a>
            <a href="#">
              Cookies
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
