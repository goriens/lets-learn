"use client";

import { navLinks } from "@/data/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((item) => (
        <li
          className={`hover:scale-105 hover:text-secondary-foreground transition-all cursor-pointer ${
            pathname === item.link
              ? "scale-105 border-b-2  border-slate-100"
              : ""
          }`}
          key={item.id}
        >
          <Link href={item.link}> {item.name}</Link>
        </li>
      ))}
    </>
  );
}
