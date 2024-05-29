import { NavItemContainerProps } from "../../types";
import { menuClick } from "../../methods";

import { Link } from "@mui/material";

import { usePathname } from "next/navigation";

const NavItemContainer = ({ navItems, router }: NavItemContainerProps) => {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex">
      {navItems.map((item) => (
        <Link
          key={item.name}
          className={`
          text-navText
          hover:text-primary
          ${pathname === item.link ? 'text-primary underline' : ""}
          text-xl
          normal-case
          block
          cursor-pointer
          transition
          duration-200
          ease-linear
          no-underline
          hover:no-underline
          pl-10
          `}
          onClick={() => menuClick(item.link, router)}
        >
          <div className="normal-case hover-underline-animation">
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};
export default NavItemContainer;
