import Image from "next/image";
import logo from "../../../public/imgs/Logosinfondo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
  {
    label: "Productos",
    href: "/productos",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

const Header = () => {
 
   const path = usePathname()

  return (
    <>
      <header className="w-full bg-teal-400 shadow-lg">
        <div className="container m-auto py-6 flex justify-between items-center">
          <Link href={"/"}>
            <Image alt="Logo" src={logo} width={200} height={50} />
          </Link>
          <nav className="flex justify-between gap-2">
            {links.map((link) => {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${path === link.href ? 'font-bold': ''} text-base text-slate-100 p-3`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
