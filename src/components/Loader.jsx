import { useEffect, useState } from 'react';

//se crea el elemento Loader con estilosCSS se harcodea a 3segundos la carga y impiador del temporizador si el componente se desmonta antes de que expire

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    showLoader && (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    )
  );
};

export default Loader;

