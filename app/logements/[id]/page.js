
import ButtonAlert from "@/app/components/ButtonAlert";
import logements from "@/app/data/logements";

export async function generateMetadata({ params }) {
  const logementId = parseInt(params.id, 10);
  const logement = logements.find((a) => a.id === logementId);
  return {
    title: logement ? logement.nom: "Annonce Not Found",
    description: logement
      ? `Details for ${logement.nom} - ${logement.categorie}`
      : "Annonce not found",
  };
}

const DetailsLogementCard = async ({ params }) => {
  const logementId = parseInt(params.id, 10);
  const logement = logements.find((a) => a.id === logementId);

  if (!logement) {
    return (
      <div className="text-center mt-10 text-red-500">logement not found.</div>
    );
  }

  return (
    <main className="flex flex-wrap items-start justify-start min-h-screen bg-gray-50 lg:px-[120px] sm:px-[60px] px-4  py-[100px] ">
      <img
        src={logement.image}
        alt={logement.nom}
        className=" max-h-[600px] object-cover rounded-xl mb-6"
      />
      <article className="px-6">
        <span className="inline-block  text-gray-500  px-3 py-1 rounded-full mb-4">
          {logement.categorie}
        </span>
        <h1 className="text-2xl font-bold mb-2">{logement.nom}</h1>

        <p className="text-lg text-primary font-bold mb-4">${logement.prix}</p>
        <p className="text-gray-700 mb-6">{logement.description}</p>
        <div className="flex gap-4 items-center">
          <ButtonAlert logementId={logementId} />
          <a href="/logements" className="text-primary hover:underline">
            Back to annonces
          </a>
        </div>
      </article>
    </main>
  );
};

export default DetailsLogementCard;