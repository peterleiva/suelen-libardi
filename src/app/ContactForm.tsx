export default function ContactForm() {
  return (
    <div className="flex flex-col gap-4 items-stretch p-6">
      <div className="text-secondary">
        <h1 className="font-bold text-3xl ">Entre em contato</h1>
        <h2>Pelas redes sociais ou formulário abaixo</h2>
      </div>

      <form action="" className="text-secondary flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name">Nome Completo</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-secondary border-2 rounded-xl px-4 py-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cellphone">Celular</label>
          <input
            type="text"
            name="cellphone"
            id="cellphone"
            className="border-secondary border-2 rounded-xl px-4 py-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">E-mail</label>
          <input
            type="text"
            name="email"
            id="email"
            className="border-secondary border-2 rounded-xl px-4 py-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="details">Como podemos te ajudar ?</label>
          <textarea
            name="details"
            id="details"
            className="border-secondary border-2 rounded-xl px-4 py-2"
            rows={5}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={true}
          className="text-white font-bold bg-secondary py-2 rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Enviar mensagem
        </button>
      </form>
    </div>
  );
}
