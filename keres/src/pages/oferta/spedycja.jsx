import '@/app/globals.css';
import Header from '../../app/components/Header';
import Footer from '@/app/components/Footer';

const Spedycja = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        logoWidth={30}
        logoHeight={30}
        titleName="Spedycja"
        subtitleName="Kompleksowa Obsługa Twoich Przesyłek"
      />
      <main className="flex-grow flex flex-col items-center justify-center mx-6 md:mx-12 lg:mx-24">
        <div className="w-full md:w-3/5 rounded-lg p-8 bg-white bg-opacity-90 shadow-2xl my-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Spedycja to serce działalności transportowej, zapewniające kompleksową obsługę przesyłek od nadawcy do odbiorcy.
            </h2>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-light to-green-dark rounded-lg shadow-lg lg:px-10">
		  <p className="text-center text-xl font-bold mb-4">
              Nasze usługi spedycyjne obejmują:
            </p>
            <ol className="list-decimal space-y-4 text-lg">
              <li>
                <p><span className="font-bold">Planowanie transportu:</span> Tworzymy optymalne plany transportowe, uwzględniając najlepsze trasy, środki transportu i harmonogramy, aby Twoje towary dotarły na czas.</p>
              </li>
              <li>
                <p><span className="font-bold">Monitorowanie przesyłek:</span> Śledzimy Twoje przesyłki na każdym etapie podróży, zapewniając pełną transparentność i możliwość bieżącej kontroli statusu transportu.</p>
              </li>
              <li>
                <p><span className="font-bold">Obsługa formalności:</span> Zajmujemy się wszystkimi formalnościami związanymi z transportem, w tym dokumentacją celno-skarbową, umowami transportowymi i ubezpieczeniami.</p>
              </li>
              <li>
                <p><span className="font-bold">Rozwiązania multimodalne:</span> Oferujemy rozwiązania multimodalne, łącząc różne środki transportu (drogowy, kolejowy, morski, lotniczy) dla najefektywniejszego przewozu towarów.</p>
              </li>
              <li>
                <p><span className="font-bold">Doradztwo spedycyjne:</span> Zapewniamy fachowe doradztwo w zakresie spedycji, pomagając w wyborze najlepszych rozwiązań transportowych, optymalizacji kosztów oraz przestrzeganiu przepisów.</p>
              </li>
            </ol>
          </div>
          <div className="m-4 text-center">
            <p className="text-lg mb-2">Z naszymi usługami spedycyjnymi, Twoja firma zyska:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Skuteczne planowanie i realizację transportu</li>
              <li>Redukcję kosztów dzięki konsolidacji przesyłek</li>
              <li>Płynną i niezawodną koordynację logistyczną</li>
              <li>Pełną transparentność dzięki monitorowaniu przesyłek</li>
              <li>Bezproblemową obsługę formalności</li>
              <li>Najefektywniejsze rozwiązania multimodalne</li>
              <li>Profesjonalne doradztwo spedycyjne</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="italic text-center text-lg">
              Skontaktuj się z nami już dziś, aby dowiedzieć się, jak nasze usługi spedycyjne mogą usprawnić transport Twoich towarów i zapewnić Ci pełne wsparcie na każdym etapie logistycznym.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Spedycja;
