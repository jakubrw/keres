import Image from 'next/image'

const TitlePage = () => {
	return (
		<div className='flex min-h-screen flex-col items-center rounded-lg p-10 '>
			<div className=''>
				<div className='text-center'>
					Wychodząc naprzeciw potrzebom naszych klientów, którzy wysyłają i odbierają towary do / z Wielkiej
					Brytanii
				</div>
				<div className='block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-green-400 hover:ring-green-400 text-xs px-12 py-5 text-center'>
					<ul className='list-disc'>
						<li>Z pomocą Agencji celnej zgłaszamy towar do odprawy.</li>
						<li>Pomagamy uzyskać niezbędne dokumenty importowo - eksportowe od nadawcy/odbiorcy</li>
						<li>Monitorujemy postępy realizacji obsługiwanych zleceń.</li>
						<li>W przypadku kontroli celnej towaru zapewniamy pomoc w kontakcie z Urzędnikami Celnymi.</li>
						<li>Oferujemy wsparcie poza godzinami pracy przez 7 dni w tygodniu</li>
					</ul>
				</div>
				<div className='text-center'>
					Dla nowych firm wchodzących na rynek usług w transporcie międzynarodowym pomagamy przejść przez
					procedury celne, zgłoszenia, wypełniamy niezbędne dokumenty, upoważnienia. Dzięki temu klient ma
					gwarancję szybkiej i bezpiecznej realizacji zlecenia.
				</div>
			</div>
		</div>
	)
}

export default TitlePage
