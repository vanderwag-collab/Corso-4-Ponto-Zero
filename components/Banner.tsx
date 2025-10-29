
import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold p-4 rounded-lg text-center shadow-lg mb-8">
      <p className="text-lg">
        ✨ Acesso Gratuito por Tempo Limitado! Aproveite o curso completo sem custos.
      </p>
      <p className="text-sm opacity-90">Em breve, o acesso será R$69,00.</p>
    </div>
  );
};

export default Banner;
