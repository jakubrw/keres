import '@/app/globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const Ubezpieczenia = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header
        logoWidth={30}
        logoHeight={30}
        titleName="Ubezpieczenia"
        subtitleName="Bezpieczeństwo i Ochrona Twojego Biznesu"
      />
      <main className="flex-grow flex flex-col items-center justify-center mx-6 md:mx-12 lg:mx-24">
        <div className="w-full md:w-3/5 rounded-lg p-8 bg-white bg-opacity-90 shadow-2xl my-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ubezpieczenia są kluczowym elementem ochrony Twojego biznesu przed ryzykiem i nieprzewidywalnymi sytuacjami.
            </h2>
          </div>
          <div className="p-6 bg-gradient-to-r from-yellow-light to-green-dark rounded-lg shadow-lg lg:px-10">
            <p className='text-center text-xl font-bold mb-4'>
              Nasze usługi ubezpieczeniowe obejmują:
            </p>
            <ol className="list-decimal space-y-4 text-lg">
              <li>
                <p><span className="font-bold">Doradztwo ubezpieczeniowe:</span> Oferujemy kompleksowe doradztwo w zakresie doboru odpowiednich polis ubezpieczeniowych, dostosowanych do specyfiki Twojego biznesu i potrzeb.</p>
              </li>
              <li>
                <p><span className="font-bold">Polisy ubezpieczeniowe:</span> Zapewniamy szeroki zakres polis ubezpieczeniowych, obejmujących m.in. ubezpieczenia mienia, odpowiedzialności cywilnej, transportu towarów i floty pojazdów.</p>
              </li>
              <li>
                <p><span className="font-bold">Ubezpieczenia dla firm transportowych:</span> Specjalizujemy się w ubezpieczeniach dla firm transportowych, oferując ochronę przed ryzykiem związanym z działalnością logistyczną i transportową.</p>
              </li>
              <li>
                <p><span className="font-bold">Szybka likwidacja szkód:</span> Gwarantujemy szybką i profesjonalną likwidację szkód, zapewniając Ci spokój i bezpieczeństwo w przypadku nieprzewidzianych zdarzeń.</p>
              </li>
              <li>
                <p><span className="font-bold">Dostosowanie oferty do potrzeb:</span> Dostosowujemy naszą ofertę ubezpieczeń do indywidualnych potrzeb i wymagań Twojego biznesu, zapewniając kompleksową ochronę na każdym etapie działalności.</p>
              </li>
            </ol>
          </div>
          <div className="m-4 text-center">
            <p className="text-lg mb-2">Z naszymi usługami ubezpieczeniowymi, Twój biznes zyska:</p>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>Bezpieczeństwo i ochronę przed ryzykiem</li>
              <li>Spokój w przypadku nieprzewidzianych zdarzeń</li>
              <li>Dostosowane polisy do specyfiki działalności</li>
              <li>Profesjonalną obsługę i szybką likwidację szkód</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="italic text-center text-lg">
              Skontaktuj się z nami już dziś, aby dowiedzieć się, jak nasze usługi ubezpieczeniowe mogą zapewnić ochronę Twojego biznesu i zminimalizować ryzyko finansowe!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Ubezpieczenia;
