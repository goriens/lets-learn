"use client";
import { IoLogIn } from "react-icons/io5";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { navLinks } from "@/data/navlinks";
import { usePathname } from "next/navigation";
import { DropdownNav } from "./DropdownNav";

export default function Nav() {
  const pathname = usePathname();
  const session = false;

  return (
    <header className="h-20 top-0 left-0 bg-secondary fixed w-full z-50 flex px-2 md:px-4">
      <ul className="flex justify-between items-center w-full">
        <li>
          <Link href="/">
            <Logo />
          </Link>
        </li>
        <div>
          <div className="gap-7 hidden lg:flex lg:items-center">
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
            {!session ? (
              <Button asChild className="flex gap-1 items-center">
                <Link href="/auth/register">
                  <IoLogIn size={18} />
                  <span>Sign In</span>
                </Link>
              </Button>
            ) : (
              <p className="text-white">Profile</p>
            )}
          </div>
          <div className="gap-7 flex flex-col lg:hidden lg:items-center">
            <DropdownNav />
          </div>
        </div>
      </ul>
    </header>
  );
}
