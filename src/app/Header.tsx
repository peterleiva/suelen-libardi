import React from "react";
import { VscMenu } from "react-icons/vsc";
import Logo from "./components/Logo";

export default function Header() {
  return (
    <div>
      <p className="py-4 text-center">Bem-vindo ao seu espaço!</p>

      <button>
        <VscMenu className="text-4xl" />
      </button>
      <Logo />
    </div>
  );
}
