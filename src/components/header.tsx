import Link from "next/link";
import React from "react";

import { navLinks } from "@/lib/constants";

import MobileNav from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <header className="bg-background/75 fixed inset-x-0 top-0 z-50 py-6 backdrop-blur-sm">
      <nav className="container flex max-w-5xl items-center justify-between">
        <div>
          <Link href="/" className="font-serif text-2xl font-bold">
            miketeow
          </Link>
        </div>

        <ul className="text-muted-foreground hidden items-center gap-6 text-sm font-bold sm:gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-secondary-foreground transition-all duration-300 ease-in-out"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <ThemeToggle />
          <MobileNav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
