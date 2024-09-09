"use client";

import { Session } from "next-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Award, Book, LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { signOutAction } from "@/lib/authActions";

export const UserButton = ({ user }: Session) => {
  const router = useRouter();

  if (!user) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer font-semibold bg-secondary">
          {user?.image && <AvatarImage src={user?.image} />}
          {!user.image && (
            <AvatarFallback className="bg-primary/25">
              {user.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 font-medium px-2">
        <DropdownMenuLabel>
          <div className="flex flex-col gap-1 items-center justify-center bg-primary/10 py-3 rounded-sm">
            <Avatar className="cursor-pointer font-semibold bg-secondary w-12 h-12 text-2xl">
              {user?.image && <AvatarImage src={user?.image} />}
              {!user.image && (
                <AvatarFallback className="cursor-pointer bg-secondary text-2xl w-12 h-12">
                  {user.name?.charAt(0).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            <p>{user?.name}</p>
            <p className="text-xm opacity-75">{user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="group py-3 cursor-pointer transition-all duration-500"
          onClick={() => router.push("/final-grade")}
        >
          <Award
            className="mr-2 group-hover:translate-x-1 transition-all ease-in-out"
            size={20}
          />
          Final Grade
        </DropdownMenuItem>
        <DropdownMenuItem
          className="group py-3 cursor-pointer transition-all duration-500"
          onClick={() => router.push("/notes")}
        >
          <Book className="mr-2 group-hover:translate-x-1" size={20} />
          Notes
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="py-3 cursor-pointer transition-all duration-500 hover:scale-105 focus:bg-destructive/20"
          onClick={() => signOutAction()}
        >
          <LogOutIcon className="mr-2" size={20} />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
