"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

type NavlinkTypes = { label: string; href: string };

const navlinks: Array<NavlinkTypes> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  // TODO: Uncomment the following line after a complete portfolio is availabe {
  // label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  //INFO: Prevent Scroll When Mobile NavBar is open
  useEffect(() => {
    isMenuOpen
      ? document.body.classList.add("overflow-hidden")
      : document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <nav>
      {/* INFO: Section with Navbar components*/}
      <section
        className="wb-container flex justify-between px-4 py-6
    items-center"
      >
        <Link href="/">
          <p>
            <span className="text-brand-1">&lt;SK/&gt;</span>&nbsp;Sagar Kapoor
          </p>
        </Link>

        {/* INFO: Mobile menu button for mobile devices and related small screens */}
        <button
          type="button"
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="md:hidden z-10"
        >
          <span className="sr-only">Open Main Menu</span>
          {isMenuOpen ? (
            <IoMdClose size={35} style={{ strokeWidth: 20 }} />
          ) : (
            <GiHamburgerMenu size={30} />
          )}
        </button>

        {/* INFO: Navigation links */}
        <span
          className={`flex md:flex flex-col md:flex-row gap-10 font-bold text-4xl
      md:text-lg fixed md:static bg-opacity-95 bg-black md:bg-inherit pt-44
      md:pt-0 inset-0 md:left-0 duration-300
      ${isMenuOpen ? "left-0" : "left-[100%]"}`}
        >
          {navlinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`wb-link ${isActive ? "text-yellow-300" : ""} `}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </span>
      </section>
    </nav>
  );
};

export default Navbar;
