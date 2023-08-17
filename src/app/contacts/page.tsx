import data from "@/staticData/companyInfo.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faBuilding,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

export default function page() {
  return (
    <div className="container mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Dane kontaktowe</h2>
          <p className="text-base mb-2 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-8" />
            Email:{" "}
            <a
              href={`mailto:${data.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline ml-2"
            >
              {data.email}
            </a>
          </p>
          <div className="flex">
            <FontAwesomeIcon icon={faPhone} className="mr-2 w-8" />
            <p className="text-base mb-2">
              {data.phoneNumbers.map((number, index) => (
                <p key={index}>
                  {index > 0}Tel:
                  <a
                    href={`tel:${number}`}
                    className="text-blue-500 hover:underline"
                  >
                    {number}
                  </a>
                </p>
              ))}
            </p>
          </div>
          <div className="flex">
            <FontAwesomeIcon icon={faBuilding} className="mr-2  w-8" />
            <div>
              <p className="text-base mb-2">NIP: {data.nip}</p>
              <p className="text-base mb-2">REGON: {data.regon}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Gdzie działamy?</h2>
          <div className="flex">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 w-8" />
            <p className="text-base mb-4">
              Jesteśmy z Wałbrzycha ale działamy na terenie całej Polski
            </p>
          </div>
          <div className="flex">
            {" "}
            <FontAwesomeIcon icon={faMap} className="mr-2 w-8" />
            <p className="text-base mb-2">Nasz adres:</p>
          </div>
          <address className="text-base mb-4">{data.address}</address>

          <div className="relative h-72">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d157.70527985280842!2d16.276288718640007!3d50.77029988503332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e56c8535fe6ab%3A0xce36bd9920c3c1d6!2sSpec-Rol!5e0!3m2!1spl!2spl!4v1676115441734!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
