"use client";

import { VscMenu } from "react-icons/vsc";
import Logo from "./components/Logo";

export default function Header() {
  const handleMenu = () => {
    alert("Não implementado");
  };

  return (
    <div className="flex flex-col gap-4">
      <p className="py-2 text-center bg-secondary text-white">
        Bem-vindo ao seu espaço!
      </p>

      <div className="flex gap-4 items-center px-10">
        <button
          className="text-4xl text-secondary"
          onClick={() => handleMenu()}
        >
          <VscMenu />
        </button>
        <div className="flex-grow justify-center">
          <Logo />
        </div>
      </div>
    </div>
  );
}
