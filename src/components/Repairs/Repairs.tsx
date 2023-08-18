import Card from "../Card/Card";
import {
  faWrench,
  faCogs,
  faCheck,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function Repairs() {
  return (
    <div className="container p-4 mx-auto text-center mb-8">
      <h2 className="mb-4">Naprawy</h2>

      <div className="flex justify-center items-center flex-col lg:flex-row">
        <Card
          icon={faWrench}
          header="Rodzaje produktów, które naprawiamy"
          description="
              Rolety
              Żaluzje
              Plisy
              Bramy garażowe
              Markizy
              Moskitiery
              Inne produkty"
          height={80}
        />

        <Card
          icon={faCogs}
          header="Jak to działa"
          description="
              W Specroll, nasze umiejętności sięgają dalej niż montaż i serwis. Jesteśmy również specjalistami w dziedzinie naprawy szerokiej gamy produktów. Nasza wiedza i doświadczenie sprawiają, że jesteśmy wyjątkowym miejscem na naprawy, od drobnych napraw po duże prace remontowe."
          height={80}
        />

        <Card
          icon={faQuestion}
          header="Gwarancja na naprawy"
          description="
              Jesteśmy pewni jakości naszych usług naprawczych i oferujemy gwarancję na wszystkie wykonane przez nas naprawy. Jeśli napotkasz problemy po naprawie, skontaktuj się z nami, a my rozwiążemy problem bezpłatnie."
          height={80}
        />

        <Card
          icon={faCheck}
          header="Dlaczego warto wybrać nasze usługi naprawcze"
          description="
              Bezpieczeństwo i zadowolenie klienta są dla nas priorytetem. Wybierając nasze usługi, możesz być pewien profesjonalizmu i jakości."
          height={80}
        />
      </div>
    </div>
  );
}
