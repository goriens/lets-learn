import { IoLogIn } from "react-icons/io5";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "../ui/button";
import { DropdownNav } from "./DropdownNav";
import { auth } from "@/lib/auth";
import { signInAction } from "@/lib/authActions";
import NavMenu from "./NavMenu";
import { UserButton } from "./UserButton";

export default async function Nav() {
  const session = await auth();

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
            <NavMenu />
            {!session ? (
              <form action={signInAction}>
                <Button className="flex gap-1 items-center">
                  <IoLogIn size={18} />
                  <span>Sign In</span>
                </Button>
              </form>
            ) : (
              <UserButton expires={session.expires} user={session.user} />
            )}
          </div>
          <div className="gap-7 flex flex-col lg:hidden lg:items-center">
            <DropdownNav
              expires={session?.expires ?? ""}
              user={session?.user}
            />
          </div>
        </div>
      </ul>
    </header>
  );
}
