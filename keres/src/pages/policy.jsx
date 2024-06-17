import Header from '@/app/components/Header'

const Policy = () => {
	return (
		<>
			<Header />
			<div className='[*>p]text-justify px-4 pb-20'>
				<div>
					<h2 className='text-2xl font-bold'> Zgoda na przetwarzanie danych osobowych</h2>
					<p>
						Aby móc odpowiedzieć na Twoje zapytanie i udzielić niezbędnych informacji, prosimy o wyrażenie
						zgody na przetwarzanie Twoich danych osobowych. Twoje dane będą przetwarzane zgodnie z
						przepisami RODO (Rozporządzenia o Ochronie Danych Osobowych).
					</p>
				</div>
				<div>
					<ul>
						<h3 className='text-lg font-bold'>Administrator danych:</h3>
						<li>Keres Serafin Majchrzak </li>
						<li>Grunwaldzka 219/9, 80-266 Gdańsk</li>
						<li>NIP: 839-292-43-40</li>
						<li>Regon: 221008128</li>
					</ul>
				</div>
				<div>
					<h3 className='text-lg font-bold'>Cel przetwarzania danych:</h3>
					<p>
						Twoje dane osobowe będą przetwarzane w celu udzielenia odpowiedzi na Twoje zapytanie złożone za
						pośrednictwem formularza kontaktowego. Zakres przetwarzanych danych: Imię i nazwisko Adres
						e-mail Numer telefonu
					</p>
				</div>
				<div>
					<h3 className='text-lg font-bold'>Podstawa prawna przetwarzania:</h3>
					<p>
						Podstawą prawną przetwarzania danych jest Twoja zgoda (art. 6 ust. 1 lit. a RODO). Okres
						przechowywania danych: Twoje dane będą przechowywane przez okres niezbędny do udzielenia
						odpowiedzi na Twoje zapytanie oraz w celach archiwalnych, przez okres nie dłuższy niż rok.
						Prawa osoby, której dane dotyczą: Masz prawo do: Dostępu do swoich danych oraz otrzymania ich
						kopii Sprostowania swoich danych Usunięcia danych Ograniczenia przetwarzania danych Przenoszenia
						danych Wycofania zgody na przetwarzanie danych w dowolnym momencie Wniesienia skargi do organu
						nadzorczego W celu skorzystania z powyższych praw, prosimy o kontakt pod adresem: rodo@keres.pl
					</p>
				</div>
			</div>
		</>
	)
}

export default Policy
