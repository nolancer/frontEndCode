"use client";
import { useState } from "react";
import { useRouter } from "nextjs13-progress";
import DesktopNavbar from "./methods/DesktopNavbar";
import MobileNavbar from "./methods/MobileNavbar";
import { CssBaseline } from "@mui/material";
import { NavbarProps } from "./types";
import ScrollTopProgressBar from "@/components/base/ScrollTopProgressBar";

/* const navItems = [
  { name: "Find Talent", link: "/about" },
  { name: "Find Work", link: "/find-work" },
  { name: "Career", link: "/career" },
  { name: "Contact us", link: "/contact" },
  { name: "Blog", link: "/blog" },
]; */

const navItems = [
  { name: "Find Work", link: "/find-work" },
  { name: "My Jobs", link: "/my-jobs" },
  { name: "Reports", link: "/reports" },
  { name: "Messages", link: "/messages" },
];

function Navbar({
  bgWhite,
  userNotVerified
}: Readonly<NavbarProps>) {
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <div>
      <CssBaseline />
      <DesktopNavbar
        navItems={navItems}
        router={router}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        bgWhite={bgWhite}
        userNotVerified={userNotVerified}
      />
      <MobileNavbar
        navItems={navItems}
        router={router}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <ScrollTopProgressBar />
    </div>
  );
}

export default Navbar;
