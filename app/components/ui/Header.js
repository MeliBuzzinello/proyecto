"use client";
import Image from "next/image";
import logo from "../../../public/imgs/Logosinfondo.png";
import avatar from "../../../public/imgs/avatar.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartContext } from "@/app/context/cartContext";

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
    href: "/productos/all",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

const Header = () => {
  const path = usePathname();
  const { totalQty, totalPrice } = useCartContext()


  return (
    <>
      <header>
        <div className="navbar bg-tiffanyblue shadow-lg">
          <div className="flex-1">
            <Link href={"/"}>
              <Image alt="Logo" src={logo} width={200} height="auto" />
            </Link>
          </div>

          
          <nav className="flex justify-between gap-2">
            {links.map((link) => {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${path === link.href ? 'font-bold': ''} text-base text-text p-3`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {/* <span className="badge badge-sm indicator-item">9</span> */}
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg text-tiffanyblue">{totalQty()} Productos</span>
                  <span className="text-hotpink">Subtotal: {totalPrice()}</span>
                  <div className="card-actions">
                    <Link href={'/carrito'}>
                    <button className="btn btn-primary btn-block">
                      Ver compra
                    </button></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image alt="avatar" src={avatar} width={200} height="auto" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link href={'/login'}>
                <li>
                  <a>Administrar stock</a>
                </li>
                </Link>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
