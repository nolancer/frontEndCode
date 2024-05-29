import NavLink from "@/components/base/NavLink";

interface LinkerProps {
  href: string;
  value: string;
}

const Linker = ({ href, value }: LinkerProps) => {
  return (
    <NavLink href={href} className="text-blue-700 hover:underline dark:text-blue-500">
      {value}
    </NavLink>
  );
};
export default Linker;
