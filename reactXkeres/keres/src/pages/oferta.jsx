import Header from '../app/components/Header'

const Oferta = () => {
	return (
		<card className='min-h-screen'>
			<Header logoWidth={30} logoHeight={30} />
			<div className='bg-white mx-10 my-5 px-2 py-8 rounded text-center border-2 border-gray-600'>
				<div className='text-xl uppercase font-bold pb-4'>oferta</div>
				<div className='text-lg'>
					Zajmujemy się organizacją transportów międzynarodowych, krajowych, całopojazdowych, drobnicowych
					oraz ponadgabarytowych.
				</div>
				<div className='text-sm py-4 px-6 text-center'>
					Kompleksowo obsługujemy firmy z różnych gałęzi handlu i przemysłu. Oferujemy nasze sprawdzone
					rozwiązania z zakresu logistyki oraz spedycji, dopasujemy najlepsze oferty transportowe, usprawnimy
					proces logistyczny, dostarczymy towar na czas. Współpracujemy z wiarygodnymi podwykonawcami na
					zasadach umów stałych lub pojedynczych zleceń co zapewnia bezpieczeństwo przewożonych towarów oraz
					wysoką jakość obsługi. Działając w głównej mierze jako spedycja, możemy w dogodnym terminie
					podstawić auto, przy czym nie ma konieczności zgłaszania z wyprzedzeniem (np. miesięcznym) gotowości
					towaru do odbioru. Każdy transport traktujemy indywidualnie, nasze stawki zawsze są konkurencyjne,
					ponieważ korzystamy z różnych przewoźników znajdujących się możliwie najbliżej załadunku, by pominąć
					koszty dojazdu i powrotu co daje nam zoptymalizować koszty samego transportu. Przewozy realizujemy
					zgodnie z wymogami konwencji CMR oraz instrukcji zleceniodawcy.
				</div>
			</div>
		</card>
	)
}

export default Oferta
