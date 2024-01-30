import React, { useRef, useEffect, useState } from 'react';

const InViewComponent = () => {
  const [isInView, setIsInView] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jeśli komponent jest widoczny w oknie przeglądarki
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.5 } // Ustaw próg widoczności na 50%
    );

    // Obserwuj komponent
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Zwolnij obserwator, gdy komponent jest odmontowywany
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []); // Pusta zależność oznacza, że useEffect zostanie uruchomiony tylko raz po zamontowaniu komponentu

  return (
    <div ref={componentRef}>
      {isInView && <p>Komponent jest widoczny!</p>}
    </div>
  );
};

export default InViewComponent;