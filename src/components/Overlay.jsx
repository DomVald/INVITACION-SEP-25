import { useEffect, useState } from 'react';

export default function Overlay() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="relative w-full max-w-md p-8 mx-4 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: 'url(/images/overlay.webp)',
          filter: 'blur(8px)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Tenemos una invitación para ti</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
          >
            Abrir Invitación
          </button>
        </div>
      </div>
    </div>
  );
}