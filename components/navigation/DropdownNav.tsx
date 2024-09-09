"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/navlinks";
import Link from "next/link";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { IoLogIn } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function DropdownNav({ user }: Session) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"}>{<RiMenuUnfoldFill size={22} />}</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Lets Learn</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          {navLinks.map((item) => (
            <Link
              className={`hover:text-secondary-foreground transition-all cursor-pointer ${
                pathname === item.link ? "border-b-2 border-slate-100" : ""
              }`}
              key={item.id}
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            {!user ? (
              <Button asChild className="flex gap-1 items-center">
                <Link href="/auth/register">
                  <IoLogIn size={18} />
                  <span>Sign In</span>
                </Link>
              </Button>
            ) : (
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={user.image!} />
                  <AvatarFallback>{user.name?.toString()[0]}</AvatarFallback>
                </Avatar>
                <p className="text-white font-semibold">{user.name}</p>
              </div>
            )}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
