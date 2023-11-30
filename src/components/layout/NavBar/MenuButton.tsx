import { useEffect, useState } from "preact/hooks";
import OpenMenu from "~icons/ic/outline-menu";
import CloseMenu from "~icons/ic/outline-close";

const MenuButton = () => {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <button>
      <OpenMenu />
      Hi
    </button>
  );
};

export default MenuButton;
