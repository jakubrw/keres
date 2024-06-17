import '@/app/globals.css';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const Kontakt = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header logoWidth={30} logoHeight={30} titleName="Kontakt" />
      <main className="flex-grow flex flex-col items-center justify-center mx-6 md:mx-12 lg:mx-24">
		
        <div className="h-full text-center m-6 p-6 bg-white bg-opacity-90 rounded-lg shadow-2xl md:aspect-[3.370/2.125]">
          <p className="font-bold text-2xl text-gray-800 mb-4">Keres Serafin Majchrzak</p>
          <p className="text-lg text-gray-700">Grunwaldzka 219/9, 80-266 Gdańsk</p>
          <p className="text-lg text-gray-700">keres@keres.pl</p>
          <p className="text-lg text-gray-700">NIP: 839-292-43-40</p>
          <p className="text-lg text-gray-700">Regon: 221008128</p>
          <p className="text-lg text-gray-700 mb-4">tel. +48 667 701 046</p>
          <p className="font-semibold text-xl text-gray-800">Księgowość:</p>
          <p className="text-lg text-gray-700">tel. +48 58 345 43 04</p>
        </div>
      </main>
      <Footer className="w-full" />
    </div>
  );
};

export default Kontakt;
