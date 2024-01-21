import Link from "next/link";

export default function Banner() {
  return (
    <div className="text-secondary">
      <p>
        <span className="font-bold">Nosso ambiente,</span>
        <br />
        seguro e acolhedor, proporcionando a oportunidade de compartilhamento e
        troca. Aqui, se encontra liberdade para falar, permitindo-se ouvir e ser
        ouvido. Através de uma abordagem colaborativa, almejo que este espaço
        viabilize a construção de uma nova perspectiva diante dos desafios.
      </p>
      <Link
        href=""
        className="bg-secondary text-white px-10 py-3 rounded-lg mt-4"
      >
        Agende pelo WhatsApp
      </Link>
    </div>
  );
}
