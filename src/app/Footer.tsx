import { capitalize } from "@/lib/utils";
import ContactForm from "./ContactForm";
import Logo from "./components/Logo";
import data from "@/lib/data.json";

export default function Footer() {
  return (
    <div className="text-secondary px-10 py-20">
      <div className="flex flex-col items-center mb-4">
        <Logo />
        <div className="text-center my-4">
          <h1 className="font-bold text-lg">Contato</h1>
          <p>{data.name}</p>
          <p>{data.crp}</p>
        </div>
        <div className="my-4">
          <ul className="flex flex-col">
            {data.contacts.map((contact) => (
              <li key={contact.type}>
                {capitalize(contact.type)}:{" "}
                <a href={contact.link}>{contact.value}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
