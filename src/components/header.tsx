"use client";
import Link from "next/link";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  //   Input,
  //   Button,
  //   Avatar,
  //   Popover,
  //   PopoverTrigger,
  //   PopoverContent,
} from "@nextui-org/react";

// import { auth } from "@/auth";
// import * as actions from "@/actions";
import HeaderAuth from "@/components/header-auth";
import SearchInput from "./search-input";
import { Suspense } from "react";

export default function Header() {
  //   const session = await auth();

  //   let authContent: React.ReactNode;

  //   if (session?.user) {
  //     authContent = (
  //       <Popover placement="left">
  //         <PopoverTrigger>
  //           <Avatar src={session.user.image || ""} />
  //         </PopoverTrigger>
  //         <PopoverContent>
  //           <div className="p-4">
  //             <form action={actions.singnOut}>
  //               <Button type="submit">Sign out</Button>
  //             </form>
  //           </div>
  //         </PopoverContent>
  //       </Popover>
  //     );
  //   } else {
  //     authContent = (
  //       <>
  //         <NavbarItem>
  //           <form action={actions.singnIn}>
  //             <Button type="submit" color="secondary" variant="bordered">
  //               Sign In
  //             </Button>
  //           </form>
  //         </NavbarItem>
  //         <NavbarItem>
  //           <form action={actions.singnIn}>
  //             <Button type="submit" color="primary" variant="flat">
  //               Sign Up
  //             </Button>
  //           </form>
  //         </NavbarItem>
  //       </>
  //     );
  //   }

  return (
    <Navbar className="shodow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
        {/* {authContent} */}
      </NavbarContent>
    </Navbar>
  );
}
