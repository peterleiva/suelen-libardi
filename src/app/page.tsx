import Image from "next/image";
import Logo from "./components/Logo";
import { VscMenu } from "react-icons/vsc";


export default function Home() {
  return (
    <div>
      <p className="py-4 text-center">Bem-vindo ao seu espaço!</p>
      <div className="flex items-center justify-center gap-4">
        <button>
          <VscMenu className="text-4xl" />
        </button>
        <Logo />
      </div>
      <Image
        src="/images/profile.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
