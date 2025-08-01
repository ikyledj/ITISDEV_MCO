"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const headerLinks = [
  { label: "Home", href: "/" },
  { label: "Facilities", href: "/facilities" },
  { label: "Rooms", href: "/rooms" },
  { label: "Contact Us", href: "/contact-us" },
];

const Header = () => {
  const pathname = usePathname();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setAtTop(currentScrollY === 0);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[2000] transition-all duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      } ${
        !atTop
          ? "bg-black/40 backdrop-blur-[5px]"
          : "bg-transparent backdrop-blur-0"
      }`}
    >
      <div className="w-full flex justify-between container mx-auto px-4">
        <Link
          href="/"
          className="text-center font-primary p-5 h-[100px] rounded-b-4xl bg-secondary max-w-[256px] text-blue"
        >
          <h1 className="text-4xl">MARU’S</h1>
          <span className="text-xs leading-0 block tracking-[2px]">
            Beachfront
          </span>
          <span className="text-xs tracking-[2px]">Rooms</span>
        </Link>
        <nav className="list-none flex items-center gap-12 lg:text-lg text-white">
          {headerLinks.map((link, idx) => (
            <li
              key={idx}
              className={`relative ${
                pathname === link.href && "nav-links font-bold"
              }`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
