import { useState } from "preact/hooks";
import Edit from "~icons/bx/bxs-edit";
import Grid from "~icons/bx/bxs-grid-alt";
import Code from "~icons/bx/code";
import Person from "~icons/bx/user";
import MailIcon from "~icons/ic/round-mail-outline";
import Monitor from "~icons/ic/round-monitor";

type menuIcons = {
  icon: typeof Grid | typeof Person | typeof Code | typeof Edit | typeof Monitor | typeof MailIcon;
  title: "Default" | "About Me" | "Skills" | "Work" | "Blogs" | "Contact";
  link: "#home" | "#about" | "#skills" | "#work" | "#blogs" | "#contact";
};

const menuArray: Array<menuIcons> = [
  {
    icon: Grid,
    title: "Default",
    link: "#home",
  },
  {
    icon: Person,
    title: "About Me",
    link: "#about",
  },
  {
    icon: Code,
    title: "Skills",
    link: "#skills",
  },
  {
    icon: Monitor,
    title: "Work",
    link: "#work",
  },
  {
    icon: Edit,
    title: "Blogs",
    link: "#blogs",
  },
  {
    icon: MailIcon,
    title: "Contact",
    link: "#contact",
  },
];

const MiniMenuInteractive = () => {
  const [isClicked, setClick] = useState<string>("#home");

  return (
    <nav
      class="border-white border rounded-t-full rounded-b-full hidden lg:flex flex-col
          items-center bg-bg-2 fixed gap-6 p-5"
    >
      {menuArray.map((item) => {
        return (
          <a
            onClick={() => setClick(item.link)}
            href={item.link}
            class={`hover:scale-125 text-lg 
                  hover:text-brand-1 ${isClicked === item.link ? "text-brand-1" : ""}`}
          >
            <item.icon />
          </a>
        );
      })}
    </nav>
  );
};

export default MiniMenuInteractive;
