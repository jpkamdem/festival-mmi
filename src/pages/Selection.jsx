import project1 from '../../public/projet-1.png';
import project2 from '../../public/projet-2.png';
import project3 from '../../public/projet-3.png';
import project4 from '../../public/projet-4.png';

// Carte projet
function Project({ auteurs, oeuvre, catégorie, image }) {
	return (
		<div className="p-4 bg-white rounded-lg shadow border">
			<h2 className="text-lg">
				<span className="font-semibold">Titre :</span> {oeuvre}
			</h2>
			<h4 className="text-sm text-gray-600">
				<span className="font-semibold text-gray-800">Catégorie :</span>{' '}
				{catégorie}
			</h4>
			<p className="mt-1 text-sm">
				<span className="font-semibold">Auteur(s) :</span>{' '}
				{auteurs.map((auteur, i) => (
					<span key={i}>
						{auteur}
						{i < auteurs.length - 1 ? ', ' : ''}
					</span>
				))}
			</p>
			<img
				src={image}
				alt={oeuvre}
				className="mt-3 w-full h-48 object-cover rounded"
			/>
		</div>
	);
}

// Carousel horizontal avec scroll-snap
export default function Selection() {
	const items = [
		{
			auteurs: ['Maxime', 'Derènes'],
			oeuvre: 'Affiche Astérix & Obélix : le combat des chefs',
			catégorie: 'Création graphique',
			image: project1,
		},
		{
			auteurs: ['Mailys', 'Borel'],
			oeuvre: 'Affiche match aller PSG vs Liverpool ligue des champions',
			catégorie: 'Création graphique',
			image: project2,
		},
		{
			auteurs: [
				'Oscar Baer',
				'Alexandre Herrera',
				'Ylan Tchugomtseu',
				'Milan Wiastesheim',
			],
			oeuvre: "Webdocumentaire 'Une longue histoire de moteur'",
			catégorie: 'Grand Prix Multimédia',
			image: project3,
		},
		{
			auteurs: [
				'Aathavan THEVAKUMAR',
				'Abeeschan KRISHNAKUMAR',
				'Nicolas RANNOU',
				'Trystan KECKET-BAKER',
			],
			oeuvre: 'INFOCHOKO - Webdoc sur le Salon Du Chocolat',
			catégorie: 'Site web ou application web',
			image: project4,
		},
	];

	return (
		<div className="w-full">
			<div
				className="flex w-full gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 py-6
                   [-ms-overflow-style:none] [scrollbar-width:none]"
				aria-label="Carousel de projets"
			>
				{/* Masque scrollbar WebKit */}
				<style>{`div::-webkit-scrollbar { display: none; }`}</style>

				{items.map((item, idx) => (
					<div
						key={idx}
						className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[33%] xl:w-[28%]"
					>
						<Project {...item} />
					</div>
				))}
			</div>
		</div>
	);
}
