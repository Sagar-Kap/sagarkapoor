"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaGithub, FaLinkedin, FaTwitter, FaHome } from "react-icons/fa";

type FooterLinks = {
  label: string;
  href: string;
};

type FooterLinkCategories = {
  explore: Array<FooterLinks>;
  company: Array<FooterLinks>;
};

type SocialIconTypes = {
  href:
    | "https://twitter.com/SagarKapr"
    | "https://github.com/Sagar-Kap/"
    | "https://www.linkedin.com/in/sagarkapr/"
    | "https://weburz.com";
  title: "Twitter" | "GitHub" | "LinkedIn" | "Site";
  icon: typeof FaTwitter | typeof FaGithub | typeof FaHome;
};

const footerlinks: FooterLinkCategories = {
  explore: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    // TODO: Uncomment the following line after a complete portfolio is availabe
    // { label: "Portfolio", href: "/portfolio" },
  ],
  company: [
    { label: "Contact", href: "/contact" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

const socialIcons: Array<SocialIconTypes> = [
  {
    title: "Twitter",
    href: "https://twitter.com/SagarKapr",
    icon: FaTwitter,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sagarkapr/",
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    href: "https://github.com/Sagar-Kap/",
    icon: FaGithub,
  },
  {
    title: "Site",
    href: "https://weburz.com",
    icon: FaHome,
  },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer>
      {/* INFO: Section for the logo and the all the links*/}
      {/* TODO: Refactor using Grids instead of Flexbox to improve code quality
      & add some vertical spacing to each section */}
      <div
        className="wb-container md:flex px-4 justify-between py-12 space-y-8
        sm:space-y-0"
      >
        {/* INFO: Section for the Logo */}
        <section className="flex flex-col items-center gap-4 pb-4">
          <Link href="/">
            <p className="text-xl">
              <span className="text-brand-1">&lt;SK/&gt;</span>&nbsp;Sagar
              Kapoor
            </p>
          </Link>
          <a
            href="mailto:sagar.kapoor@weburz.com"
            className="underline underline-offset-2 hover:text-brand-1"
          >
            sagar.kapoor@weburz.com
          </a>
        </section>

        {/* INFO: Section for Social Media Links */}
        <section>
          <span className="font-bold text-xl">
            <span className="text-brand-1">Fo</span>llow Me
          </span>

          <span className="flex space-x-4 justify-center my-8">
            {socialIcons.map((icon) => (
              <a
                key={icon.href}
                href={icon.href}
                target="_blank"
                rel="noreferrer"
              >
                <icon.icon size={30} className="hover:scale-125" />
              </a>
            ))}
          </span>
        </section>

        {/* INFO: Section for the navigation links */}
        <section>
          <span className="font-bold text-xl">
            <span className=" text-brand-1">Ex</span>plore
          </span>

          {footerlinks.explore.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block py-2 wb-link ${
                  isActive ? "text-brand-1" : ""
                } `}
              >
                {link.label}
              </Link>
            );
          })}
        </section>

        {/* INFO: A section for and contact legal links */}
        <section>
          <span className="text-xl">
            <span className="font-bold text-brand-1">Us</span>eful Links
          </span>
          {footerlinks.company.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block py-2 wb-link ${
                  isActive ? "text-brand-1" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </section>
      </div>

      {/* INFO: Section for the copyright notice */}
      <section className="mb-8 text-center text-white container mx-auto px-4">
        {/* INFO: A simple divider to distinguish the two sections */}
        <hr className="mb-8" />
        <small>
          Copyright &copy; 2021-{new Date().getFullYear()} | Weburz LLC | All
          Rights Reserved
        </small>
      </section>
    </footer>
  );
};

export default Footer;
