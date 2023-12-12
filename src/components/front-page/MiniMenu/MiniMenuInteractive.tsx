import { useState } from "preact/hooks";

const MiniMenuInteractive = ({ grid, person, code, monitor, edit, mail }: any) => {
  type menuIcons = {
    icon: typeof grid | typeof person | typeof code | typeof edit | typeof monitor | typeof mail;
    title: "Default" | "About Me" | "Skills" | "Work" | "Blogs" | "Contact";
    link: "#" | "#about" | "#skills" | "#work" | "#blogs" | "#contact";
  };

  const menuArray: Array<menuIcons> = [
    {
      icon: grid,
      title: "Default",
      link: "#",
    },
    {
      icon: person,
      title: "About Me",
      link: "#about",
    },
    {
      icon: code,
      title: "Skills",
      link: "#skills",
    },
    {
      icon: monitor,
      title: "Work",
      link: "#work",
    },
    {
      icon: edit,
      title: "Blogs",
      link: "#blogs",
    },
    {
      icon: mail,
      title: "Contact",
      link: "#contact",
    },
  ];

  return (
    <nav
      class="border-white border rounded-t-full rounded-b-full hidden lg:flex flex-col
          items-center bg-bg-2 fixed gap-6 p-5"
    >
      {menuArray.map((item) => {
        return (
          <a href={item.link} class="hover:scale-125 text-lg hover:text-brand-1">
            {item.icon}
          </a>
        );
      })}
    </nav>
  );
};

export default MiniMenuInteractive;
