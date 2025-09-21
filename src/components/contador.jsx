import { useEffect, useState } from "react";

export default function Contador({ targetDate }) {
  const weddingDate = new Date(targetDate);

  const calculateTimeLeft = () => {
    const difference = weddingDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-6 bgx-secondary text-white">
      <h2 className="text-3xl block sm:text-4xl font-serif mb-6 text-center">
        Fecha: <br /> 1 de Diciembre de 2025
      </h2>
      <h2 className="text-3xl block sm:text-4xl font-serif mb-6 text-center">
        Solamente faltan:
      </h2>

      <div className="flex flex-row gap-4 sm:gap-8 text-center pb-10">
        <div className="flex flex-col block">
          <span className="text-4xl sm:text-5xl font-serif font-bold">{timeLeft.days}</span>
          <span className="text-sm sm:text-base font-serif">Días</span>
        </div>
        <div className="flex flex-col block">
          <span className="text-4xl sm:text-5xl font-serif font-bold">{timeLeft.hours}</span>
          <span className="text-sm sm:text-base font-serif">Horas</span>
        </div>
        <div className="flex flex-col block">
          <span className="text-4xl sm:text-5xl font-serif font-bold">{timeLeft.minutes}</span>
          <span className="text-sm sm:text-base font-serif">Minutos</span>
        </div>
      </div>
    </section>
  );
}
