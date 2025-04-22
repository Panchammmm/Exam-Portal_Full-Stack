"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconHome,
  IconLayoutDashboard,
  IconUserCog,
  IconLogout2,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function MainSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <IconLayoutDashboard className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <IconUserCog className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconLogout2 className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  // const [open, setOpen] = useState(false);
  // const [activeLink, setActiveLink] = useState("Home");

  return (
    <div
      className={cn(
        "flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen"
      )}
    >
      {/* <Sidebar open={open} setOpen={setOpen} animate={false}> */}
      <Sidebar open={false} setOpen={() => {}} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <>
              <Logo />
            </>
            <div className="mt-6 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className={cn(
                    pathname === link.href
                      ? "bg-neutral-300 dark:bg-neutral-700 text-black dark:text-white rounded-md px-4"
                      : "text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-700/50 hover:rounded-md px-4"
                  )}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Show page content here */}
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 pt-4 pb-8 pl-4 text-sm font-normal text-black border-b border-neutral-700"
    >
      <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        User Name
      </motion.span>
    </a>
  );
};
