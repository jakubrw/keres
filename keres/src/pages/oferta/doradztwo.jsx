import '@/app/globals.css';
import Header from '../../app/components/Header';
import Footer from '@/app/components/Footer';

const Doradztwo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        logoWidth={30}
        logoHeight={30}
        titleName="Doradztwo Transportowe"
        subtitleName="Twoja Droga do Sukcesu"
      />
      <main className="flex-grow flex flex-col items-center justify-center mx-6 md:mx-12 lg:mx-24">
        <div className="w-full md:w-3/5 rounded-lg p-8 bg-white bg-opacity-90 shadow-2xl my-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Jako firma spedycyjno-transportowa, oferujemy kompleksowe doradztwo transportowe, które pomoże Ci zoptymalizować operacje logistyczne i zwiększyć efektywność Twojej działalności.
            </h2>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-light  to-green-dark rounded-lg shadow-lg lg:px-10">
            <p className="text-center text-xl font-bold mb-4">Nasze usługi obejmują:</p>
            <ol className="list-decimal space-y-4 text-lg">
              <li>
                <p><span className="font-bold">Optymalizacja tras:</span> Dzięki analizie i planowaniu tras dostaw, skracamy czas przejazdów i obniżamy koszty paliwa.</p>
              </li>
              <li>
                <p><span className="font-bold">Zarządzanie flotą:</span> Pomagamy w zarządzaniu flotą pojazdów, dbając o konserwację, efektywność paliwową i monitorowanie stanu technicznego.</p>
              </li>
              <li>
                <p><span className="font-bold">Przestrzeganie przepisów:</span> Zapewniamy wsparcie w spełnianiu wszelkich wymogów prawnych, w tym norm dotyczących czasu pracy kierowców i bezpieczeństwa transportu.</p>
              </li>
              <li>
                <p><span className="font-bold">Nowoczesne technologie:</span> Wdrażamy zaawansowane systemy zarządzania transportem (TMS), telematykę i GPS, co umożliwia lepsze monitorowanie i kontrolę operacji.</p>
              </li>
              <li>
                <p><span className="font-bold">Zarządzanie Przywozem i Odbiorem:</span> Dbamy o kompleksową kontrolę nad procesem przywozu i odbioru towarów, śledząc i koordynując każdy etap, aby zapewnić, że towar jest gotowy do odbioru w odpowiednim czasie.</p>
              </li>
            </ol>
          </div>
          <div className="m-4 text-center">
            <p className="text-lg mb-2">Z naszym doradztwem transportowym, Twoja firma zyska:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Lepszą wydajność operacyjną</li>
              <li>Niższe koszty transportu</li>
              <li>Wyższy poziom zgodności z przepisami</li>
              <li>Wyższą konkurencyjność na rynku</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="italic text-center text-lg">
              Skontaktuj się z nami już dziś i odkryj, jak nasze doradztwo transportowe może pomóc Ci osiągnąć sukces!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Doradztwo;
