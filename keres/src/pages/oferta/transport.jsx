import '@/app/globals.css';
import Header from '../../app/components/Header';
import Footer from '@/app/components/Footer';

const Transport = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        logoWidth={30}
        logoHeight={30}
        titleName="Transport"
        subtitleName="niezawodność i efektywność Twoich przewozów"
      />
      <main className="flex-grow flex flex-col items-center justify-center mx-6 md:mx-12 lg:mx-24">
        <div className="w-full md:w-3/5 rounded-lg p-8 bg-white bg-opacity-90 shadow-2xl my-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Transport to kluczowy element każdej działalności logistycznej, zapewniający szybki i bezpieczny przewóz towarów od nadawcy do odbiorcy.
            </h2>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-light to-green-dark rounded-lg shadow-lg lg:px-10">
            <p className='text-center text-xl font-bold mb-4'>
              Nasze usługi transportowe obejmują:
            </p>
            <ol className="list-decimal space-y-4 text-lg">
              <li>
                <p><span className="font-bold">Transport Krajowy:</span> Zapewniamy niezawodne i terminowe dostawy na terenie kraju, obsługując różnorodne rodzaje towarów. Dodatkowo, jako lokalni przewoźnicy, oferujemy kompleksową obsługę logistyczną na najwyższym poziomie.</p>
              </li>
              <li>
                <p><span className="font-bold">Transport Międzynarodowy:</span> Specjalizujemy się w przewozie towarów na obszarze międzynarodowym, zapewniając efektywną i bezpieczną logistykę na każdej trasie.</p>
              </li>
              <li>
                <p><span className="font-bold">Transport Specjalistyczny:</span> Realizujemy przewozy towarów wymagających specjalistycznych rozwiązań, takich jak ładunki ponadgabarytowe czy transport chłodniczy.</p>
              </li>
              <li>
                <p><span className="font-bold">Usługi Dodatkowe:</span> Nasza oferta obejmuje także dodatkowe usługi, takie jak wyposażenie naszej floty w windy, platformy i inne specjalistyczne rozwiązania, które pozwalają nam sprostać różnorodnym potrzebom naszych klientów podczas transportu.</p>
              </li>
              <li>
                <p><span className="font-bold">Monitoring Przesyłek:</span> Zapewniamy system monitorowania przesyłek, umożliwiający śledzenie towarów na każdym etapie podróży, dla pełnej przejrzystości i kontroli.</p>
              </li>
            </ol>
          </div>
          <div className="m-4 text-center">
            <p className="text-lg mb-2">Z naszymi usługami transportowymi, Twoja firma zyska:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Niezawodne i terminowe dostawy</li>
              <li>Elastyczność dzięki różnorodnym opcjom transportu</li>
              <li>Efektywność kosztową dzięki optymalizacji tras i floty pojazdów</li>
              <li>Pełną transparentność i kontrolę nad przesyłkami</li>
              <li>Transport lokalny</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="italic text-center text-lg">
              Skontaktuj się z nami już dziś, aby dowiedzieć się, jak nasze usługi transportowe mogą usprawnić przewóz Twoich towarów i zapewnić Ci pełne wsparcie na każdym etapie logistycznym!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Transport;
