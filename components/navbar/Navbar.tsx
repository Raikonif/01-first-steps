import Link from "next/link";
import ActiveLink from "@/components/active-link/ActiveLink";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Pricing", href: "/pricing" },
];

export const Navbar = () => {
  return (
    <nav className="flex flex-1 justify-between bg-slate-800 p-4">
      <span>Navbar</span>
      <ul className="flex gap-4 px-2">
        {navItems.map((item) => (
          <li key={item.title}>
            <ActiveLink path={item.href} text={item.title} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
