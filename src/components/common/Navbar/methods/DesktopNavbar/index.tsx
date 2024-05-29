"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useAuth } from "@/providers/AuthProvider";
// Custom Components
import Logo from "@components/base/Logo";
import { Button, IconButton } from "@mui/material";
import NavItemContainer from "../NavItemContainer";
import { DesktopNavbarProps } from "../../types";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from '@mui/material/Tooltip';
import { usePathname } from "next/navigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "../../style.module.css";

const DesktopNavbar = ({
  navItems,
  router,
  handleDrawerToggle,
  bgWhite,
  userNotVerified
}: DesktopNavbarProps) => {
  // const { data: session, status, update } = useSession();
  const auth = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    console.log("Auth user is equal to : ", auth.user)
  }, [auth.user])

  useEffect(() => {
    const debounce = (fn: (...args: any[]) => void) => {
      let frame: number;
      return (...params: any[]) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };
    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true,
    });
    storeScroll();
  });

  return (
    <div
      className={`${bgWhite ? "bg-white" : ""} 
      ${styles.navContainer}
      fixed
      h-auto
      p-0
      sm:h-28
      ${!userNotVerified && (`
      `)}
      sm:px-0
      sm:w-full
      font-montserrat
      border-none
    text-black
      transition duration-150 ease-in-out
      sm:flex items-center flex-col justify-center 
       z-10
      `}
    >
      <section className="w-full">
        <div className="w-full hidden sm:flex justify-between px-4 sm:px-5">
          <div className="ml-0 h-fit cursor-pointer" onClick={() => router.push('/')}>
            <Logo />
          </div>
          {
            !userNotVerified &&
            (
              <div className="w-fit h-full flex flex-col justify-center my-auto">
                <NavItemContainer navItems={navItems} router={router} />
              </div>
            )
          }
          <div className="w-fit h-fit my-auto">
            {(auth.user !== null) ? (
              <div className="flex gap-4">
                {auth?.user?.image ? (
                  <Image
                    src={auth.user.image}
                    alt="User Image"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded-full">
                    <AccountCircleIcon className="text-gray-500 w-10 h-10" />
                  </div>
                )}
                <Button
                  variant="contained"
                  color="error"
                  className="bg-transparent hover:bg-transparent focus:bg-transparent font-semibold text-red-500 rounded-lg normal-case text-lg"
                  onClick={() => auth.logOut()}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex">
                <Button
                  color="primary"
                  className="bg-transparent hover:bg-transparent focus:bg-transparent font-semibold text-primary rounded-lg normal-case text-lg"
                  onClick={() => router.push("/auth/login")}
                >
                  Login
                </Button>
                <Button
                  color="info"
                  className="border-2 border-solid border-primary hover:border-2 hover:border-solid hover:border-primary focus:border-2 focus:border-solid focus:border-primary hover:text-primary focus:text-white bg-primary focus:primary font-semibold text-white hover:bg-transparent focus:bg-primary rounded-lg ml-3 normal-case text-lg px-5 py-2"
                  onClick={() => router.push("/auth/register")}
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full h-fit rounded-none flex justify-between items-center mt-4 mb-2 px-4 sm:px-5 sm:hidden">
          <Logo />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className="w-auto h-auto rounded-none"
            onClick={handleDrawerToggle}
          >
            <MenuIcon className="text-3xl rounded-none sm:text-[45px] text-primary" />
          </IconButton>
        </div>
      </section>
    </div>
  );
};
export default DesktopNavbar;
