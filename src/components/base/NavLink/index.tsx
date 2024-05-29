import { useRouter } from "nextjs13-progress";

interface NavLinkProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
}

const NavLink = ({
    children,
    className,
    href
}: NavLinkProps) => {
    const router = useRouter();

    return (
        <span className={`${className} cursor-pointer`} onClick={() => {
            if (href) {
                router.push(href);
            }
        }}>
            {children}
        </span>
    )
}
export default NavLink;
export { NavLink };