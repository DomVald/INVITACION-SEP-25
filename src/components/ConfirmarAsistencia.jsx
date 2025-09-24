// src/components/ConfirmarAsistencia.jsx
import { useEffect, useState } from "react";
import { getNombreFromUrl } from "../data/data.js";

export default function ConfirmarAsistencia() {
  const [nombre, setNombre] = useState(null);

  useEffect(() => {
    const n = getNombreFromUrl();
    setNombre(n);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "2291877765";
    const message = `Hola!, mi nombre es ${nombre ?? "invitado"} y confirmo mi asistencia a la boda.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  return (
    <section className="w-full bgx-primary py-10 flex flex-col items-center text-center relative">
      <h2 className="text-2xl font-serif block txt-complementary mb-6">
        Confirmar asistencia
      </h2>

      <form
        id="rsvpForm"
        onSubmit={handleSubmit}
        className="w-3/4 max-w-md flex flex-col space-y-4 txt-secondary font-serif"
      >
        <button
          type="submit"
          className="bgx-complementary block text-white font-medium py-3 px-6 rounded-full shadow-md hover:bg-[#8b3e1e] transition mt-4 mb-18"
        >
          Confirmar asistencia
        </button>
      </form>

      <svg
        className="absolute -bottom-1 left-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C360,100 1080,0 1440,100 L1440,150 L0,150 Z"
          className="svg-complementary"
        />
      </svg>
    </section>
  );
}