import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faThList,
  faCogs,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <div className="container mx-auto p-8">
      <div className="border-b-2"></div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">O nas</h2>

        <h3 className="text-xl font-semibold mt-4 flex items-center">
          <FontAwesomeIcon icon={faBuilding} className="mr-2 w-8" /> Nasza firma
        </h3>
        <p className="text-base mt-2">
          SPECROLL, założona w 1991 roku, to doświadczona firma specjalizująca
          się w osłonach okiennych i bramach garażowych. Przez ponad 30 lat
          dostarczaliśmy wysokiej jakości produkty i usługi dla klientów
          indywidualnych i firm. Naszą misją jest tworzenie komfortowych,
          bezpiecznych i estetycznych przestrzeni.
        </p>

        <h3 className="text-xl font-semibold mt-4 flex items-center">
          <FontAwesomeIcon icon={faThList} className="mr-2 w-8" /> Oferta
        </h3>
        <p className="text-base mt-2">Nasza oferta:</p>
        <ul className="list-disc pl-5 mt-2 text-base">
          <li>Rolety zewnętrzne</li>
          <li>Roletki materiałowe</li>
          <li>Żaluzje</li>
          <li>Plisy</li>
          <li>Bramy garażowe</li>
          <li>Markizy</li>
          <li>Moskitiery</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 flex items-center">
          <FontAwesomeIcon icon={faCogs} className="mr-2 w-8" /> Realizacja
          zamówienia
        </h3>
        <p className="text-base mt-2">
          Dbamy o każdy etap realizacji zamówienia - od doradztwa, przez
          bezpłatny pomiar i wycenę, aż do montażu i serwisowania.
        </p>

        <h2 className="text-2xl font-semibold mt-4 flex items-center">
          <FontAwesomeIcon icon={faCheck} className="mr-2 w-8" /> Dlaczego SPECROLL
        </h2>
        <p className="text-base mt-2">
          Dzięki doświadczeniu, dostosowujemy rozwiązania do indywidualnych
          potrzeb klientów. Wybierając SPECROLL, wybierają Państwo jakość,
          niezawodność i satysfakcję. Zapraszamy do kontaktu!
        </p>
      </div>
    </div>
  );
}
