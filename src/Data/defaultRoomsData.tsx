
import hotel_room_1 from "../assets/hotel-room-1.jpeg";
import hotel_room_2 from "../assets/hotel-room-2.jpg";
import hotel_room_3 from "../assets/hotel-room-3.jpeg";
import hotel_room_4 from "../assets/hotel-room-4.jpeg";
import hotel_room_5 from "../assets/hotel-room-5.jpg";
import hotel_room_hd from "../assets/hotel-room-hd-1.jpg";

import { LanguageType } from './../Hooks/LanguageProvider'

export type Room = {
  id: string;
  name: Record<LanguageType, string>;
  description: Record<LanguageType, string>;
  price: number;
  roomSize: number; // in square meters
  capacity: string; // Example: "2 Adults 1 Child"
  technologies: string; // Example: "TV and Free Wi-Fi"
  img: string;
  img_hd: string;
};

export const DefaultRooms: Room[] = [
  {
    id: "1",
    name: {
      EN: "Classic Single Room",
      FR: "Chambre Simple Classique",
      IT: "Camera Singola Classica",
      DE: "Klassisches Einzelzimmer",
    },
    description: {
      EN:
        "Experience comfort and elegance in our Classic Single Room. Enjoy a cozy stay with a view of Locarno's charming surroundings. Perfect for solo travelers.",
      FR:
        "Vivez le confort et l'élégance dans notre Chambre Simple Classique. Profitez d'un séjour confortable avec vue sur les environs charmants de Locarno. Idéal pour les voyageurs en solo.",
      IT:
        "Vivi il comfort e l'eleganza nella nostra Camera Singola Classica. Goditi un soggiorno accogliente con vista sui dintorni affascinanti di Locarno. Perfetto per i viaggiatori solitari.",
      DE:
        "Erleben Sie Komfort und Eleganz in unserem Klassischen Einzelzimmer. Genießen Sie einen gemütlichen Aufenthalt mit Blick auf die charmante Umgebung von Locarno. Perfekt für Alleinreisende.",
    },
    price: 150,
    roomSize: 18, // in square meters
    capacity: "1 Adult",
    technologies: "TV and Free Wi-Fi",
    img: hotel_room_1,
    img_hd: hotel_room_hd,
  },
  {
    id: "2",
    name: {
      EN: "Deluxe Double Room",
      FR: "Chambre Double Deluxe",
      IT: "Camera Matrimoniale Deluxe",
      DE: "Deluxe Doppelzimmer",
    },
    description: {
      EN:
        "Indulge in the luxury of our Deluxe Double Room. This spacious and beautifully decorated room offers a relaxing atmosphere for couples.",
      FR:
        "Laissez-vous tenter par le luxe de notre Chambre Double Deluxe. Cette chambre spacieuse et magnifiquement décorée offre une atmosphère relaxante pour les couples.",
      IT:
        "Concediti il lusso della nostra Camera Matrimoniale Deluxe. Questa stanza spaziosa e splendidamente decorata offre un'atmosfera rilassante per le coppie.",
      DE:
        "Genießen Sie den Luxus unseres Deluxe Doppelzimmers. Dieses geräumige und wunderschön eingerichtete Zimmer bietet eine entspannte Atmosphäre für Paare.",
    },
    price: 300,
    roomSize: 30, // in square meters
    capacity: "2 Adults",
    technologies: "TV and Free Wi-Fi",
    img: hotel_room_3,
    img_hd: hotel_room_hd,
  },
  {
    id: "3",
    name: {
      EN: "Family Suite",
      FR: "Suite Familiale",
      IT: "Suite Familiare",
      DE: "Familiensuite",
    },
    description: {
      EN:
        "Our Family Suite is designed for families seeking comfort and togetherness. With its spacious layout, it's an ideal choice for your family vacation.",
      FR:
        "Notre Suite Familiale est conçue pour les familles en quête de confort et de convivialité. Avec son agencement spacieux, c'est un choix idéal pour vos vacances en famille.",
      IT:
        "La nostra Suite Familiare è pensata per le famiglie che cercano comfort e unione. Con il suo ampio spazio, è la scelta ideale per la vostra vacanza in famiglia.",
      DE:
        "Unsere Familiensuite ist für Familien konzipiert, die Komfort und Gemeinschaft suchen. Mit ihrer großzügigen Gestaltung ist sie die ideale Wahl für Ihren Familienurlaub.",
    },
    price: 450,
    roomSize: 45, // in square meters
    capacity: "2 Adults 2 Children",
    technologies: "TV and Free Wi-Fi",
    img: hotel_room_2,
    img_hd: hotel_room_hd,
  },
  {
    id: "4",
    name: {
      EN: "Luxury Suite with Lake View",
      FR: "Suite de Luxe avec Vue sur le Lac",
      IT: "Suite di Lusso con Vista sul Lago",
      DE: "Luxussuite mit Seeblick",
    },
    description: {
      EN:
        "Elevate your stay with our Luxury Suite, featuring breathtaking views of Lake Maggiore. This opulent suite offers a private heated pool and the finest amenities.",
      FR:
        "Rehaussez votre séjour avec notre Suite de Luxe, offrant une vue imprenable sur le lac Majeur. Cette suite somptueuse dispose d'une piscine privée chauffée et des meilleures commodités.",
      IT:
        "Eleva il tuo soggiorno con la nostra Suite di Lusso, con una vista mozzafiato sul Lago Maggiore. Questa sontuosa suite offre una piscina privata riscaldata e i migliori comfort.",
      DE:
        "Erhöhen Sie Ihren Aufenthalt mit unserer Luxussuite, die einen atemberaubenden Blick auf den Lago Maggiore bietet. Diese opulente Suite verfügt über einen beheizten Privatpool und die besten Annehmlichkeiten.",
    },
    price: 600,
    roomSize: 60, // in square meters
    capacity: "2 Adults",
    technologies: "TV, Free Wi-Fi, and Private Heated Pool",
    img: hotel_room_4,
    img_hd: hotel_room_hd,
  },
  {
    id: "5",
    name: {
      EN: "Panoramic Junior Suite",
      FR: "Suite Junior Panoramique",
      IT: "Suite Junior Panoramica",
      DE: "Panorama Juniorsuite",
    },
    description: {
      EN:
        "Enjoy panoramic views of Locarno's picturesque landscape in our Panoramic Junior Suite. The spacious room and elegant decor provide a truly luxurious experience.",
      FR:
        "Profitez de vues panoramiques sur le paysage pittoresque de Locarno dans notre Suite Junior Panoramique. La chambre spacieuse et la décoration élégante offrent une expérience vraiment luxueuse.",
      IT:
        "Goditi viste panoramiche sul paesaggio pittoresco di Locarno nella nostra Suite Junior Panoramica. La spaziosa stanza e l'elegante arredamento offrono un'esperienza veramente lussuosa.",
      DE:
        "Genießen Sie Panoramablicke auf die malerische Landschaft von Locarno in unserer Panorama Juniorsuite. Das geräumige Zimmer und die elegante Einrichtung bieten ein wirklich luxuriöses Erlebnis.",
    },
    price: 400,
    roomSize: 40, // in square meters
    capacity: "2 Adults",
    technologies: "TV and Free Wi-Fi",
    img: hotel_room_1,
    img_hd: hotel_room_hd,
  },
  {
    id: "6",
    name: {
      EN: "Executive Twin Room with Balcony",
      FR: "Chambre Exécutive avec Balcon",
      IT: "Camera Executive con Balcone",
      DE: "Executive Zweibettzimmer mit Balkon",
    },
    description: {
      EN:
        "Our Executive Twin Room offers a comfortable stay with a private balcony overlooking the Swiss Alps. Ideal for friends or business travelers seeking style and convenience.",
      FR:
        "Notre Chambre Exécutive avec Balcon offre un séjour confortable avec un balcon privé donnant sur les Alpes suisses. Idéal pour les amis ou les voyageurs d'affaires en quête de style et de commodité.",
      IT:
        "La nostra Camera Executive con Balcone offre un soggiorno confortevole con un balcone privato con vista sulle Alpi svizzere. Ideale per gli amici o i viaggiatori d'affari in cerca di stile e comodità.",
      DE:
        "Unser Executive Zweibettzimmer mit Balkon bietet einen komfortablen Aufenthalt mit einem privaten Balkon mit Blick auf die Schweizer Alpen. Ideal für Freunde oder Geschäftsreisende, die Stil und Bequemlichkeit suchen.",
    },
    price: 280,
    roomSize: 32, // in square meters
    capacity: "2 Adults",
    technologies: "TV and Free Wi-Fi",
    img: hotel_room_3,
    img_hd: hotel_room_hd,
  },
];
