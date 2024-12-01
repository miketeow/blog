import Link from "next/link";
import React from "react";

import { navLinks } from "@/lib/constants";

import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container flex max-w-3xl items-center justify-between">
        <div>
          <Link href="/" className="font-serif text-2xl font-bold">
            miketeow
          </Link>
        </div>

        <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="transition-all duration-300 ease-in-out hover:text-primary-foreground"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
