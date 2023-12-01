import { useEffect, useState } from "preact/hooks";

type NavlinkTypes = { label: string; href: string };

const navlinks: Array<NavlinkTypes> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  // TODO: Uncomment the following line after a complete portfolio is availabe {
  // label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const Menu = ({ openMenu, closeMenu, currentPath }: any) => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

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
        <a href="/">
          <p className="text-xl">
            <span className="text-brand-1">&lt;SK/&gt;</span>&nbsp;Sagar Kapoor
          </p>
        </a>

        {/* INFO: Mobile menu button for mobile devices and related small screens */}
        <button
          type="button"
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="md:hidden z-10"
        >
          <span className="sr-only">Close Main Menu</span>

          <div
            className={`text-2xl stroke-white ${isMenuOpen ? "" : "hidden"}`}
          >
            {closeMenu}
          </div>

          <div className={`text-2xl ${isMenuOpen ? "hidden" : ""}`}>
            {openMenu}
          </div>
        </button>

        {/* INFO: Navigation links */}
        <span
          className={`flex md:flex flex-col md:flex-row gap-10 text-4xl
          md:text-lg fixed md:static bg-opacity-95 bg-black md:bg-inherit pt-44
          md:pt-0 inset-0 md:left-0 duration-300
          ${isMenuOpen ? "left-0 items-center" : "left-[100%]"}`}
        >
          {navlinks.map((link) => {
            const isActive = currentPath === link.href;

            return (
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`wb-link ${isActive ? "text-brand-1" : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </span>
      </section>
    </nav>
  );
};

export default Menu;
