import {
  PropertiesVillaFiveImg,
  PropertiesVillaFourImg,
  PropertiesVillaOneImg,
  PropertiesVillaThreeImg,
  PropertiesVillaTwoImg,
} from "@/assets/images";
import { IProperty } from "@/interfaces/properties";
import {
  PropertiesBedIcon,
  PropertiesLocationIcon,
  PropertiesStatusIcon,
} from "@/assets/icons";

export const propertiesData: IProperty[] = [
  {
    id: 1,
    imageSrc: PropertiesVillaOneImg,
    interiorDetails: [
      {
        interiorId: 11,
        icon: PropertiesBedIcon,
        info: "3 Bedrooms Apartment",
      },
      {
        interiorId: 12,
        icon: PropertiesStatusIcon,
        info: "3 floors",
      },
      {
        interiorId: 13,
        icon: PropertiesLocationIcon,
        info: "Seseh, Bali",
      },
    ],
    title: "THE COCO MANSION",
    description: "Cash-back through development period 8% ",
    price: "$145,000 USD",
    investors: 482,
    detailsPublic: [
      {
        detailsId: 11,
        title: "Annual ROI Estimate",
        detail: "10-14%",
      },
      {
        detailsId: 12,
        title: "Completion Date",
        detail: "Feb 28, 2026",
      },
      {
        detailsId: 13,
        title: "Investment From",
        detail: "$1000 USD",
      },
    ],
    progress: 98,
    sharesLeft: 6663,
  },
  {
    id: 2,
    imageSrc: PropertiesVillaTwoImg,
    interiorDetails: [
      {
        interiorId: 11,
        icon: PropertiesBedIcon,
        info: "14 Apartments",
      },
      {
        interiorId: 12,
        icon: PropertiesStatusIcon,
        info: "3 floors",
      },
      {
        interiorId: 13,
        icon: PropertiesLocationIcon,
        info: "Seseh, Badung, Bali",
      },
    ],
    title: "COCO RESIDENTIAL LIVING",
    description: "Cash-back through development period 8% ",
    price: "$145,000 USD",
    investors: 482,
    detailsPublic: [
      {
        detailsId: 11,
        title: "Annual ROI Estimate",
        detail: "10-14%",
      },
      {
        detailsId: 12,
        title: "Completion Date",
        detail: "Feb 28, 2026",
      },
      {
        detailsId: 13,
        title: "Investment From",
        detail: "$1000 USD",
      },
    ],
    progress: 98,
    sharesLeft: 6663,
  },
  {
    id: 3,
    imageSrc: PropertiesVillaThreeImg,
    interiorDetails: [
      {
        interiorId: 11,
        icon: PropertiesBedIcon,
        info: "56 Apartments",
      },
      {
        interiorId: 12,
        icon: PropertiesStatusIcon,
        info: "3 floors",
      },
      {
        interiorId: 13,
        icon: PropertiesLocationIcon,
        info: "Bingin, Uluwatu, Bali",
      },
    ],
    title: "THE COCO LIFESTYLE RESORT",
    description: "Cash-back through development period 8% ",
    price: "$145,000 USD",
    investors: 482,
    detailsPublic: [
      {
        detailsId: 11,
        title: "Annual ROI Estimate",
        detail: "10-14%",
      },
      {
        detailsId: 12,
        title: "Completion Date",
        detail: "Feb 28, 2026",
      },
      {
        detailsId: 13,
        title: "Investment From",
        detail: "$1000 USD",
      },
    ],
    progress: 98,
    sharesLeft: 6663,
  },
  {
    id: 4,
    imageSrc: PropertiesVillaFourImg,
    interiorDetails: [
      {
        interiorId: 11,
        icon: PropertiesBedIcon,
        info: "41 Jungle Apartments",
      },
      {
        interiorId: 12,
        icon: PropertiesStatusIcon,
        info: "4 floors",
      },
      {
        interiorId: 13,
        icon: PropertiesLocationIcon,
        info: "Kaba Kaba, Bali",
      },
    ],
    title: "AMAZONA JUNGLE RESORT",
    description: "Cash-back through development period 8% ",
    price: "$145,000 USD",
    investors: 482,
    detailsPublic: [
      {
        detailsId: 11,
        title: "Annual ROI Estimate",
        detail: "10-14%",
      },
      {
        detailsId: 12,
        title: "Completion Date",
        detail: "Feb 28, 2026",
      },
      {
        detailsId: 13,
        title: "Investment From",
        detail: "$1000 USD",
      },
    ],
    progress: 98,
    sharesLeft: 6663,
  },
  {
    id: 5,
    imageSrc: PropertiesVillaFiveImg,
    interiorDetails: [
      {
        interiorId: 11,
        icon: PropertiesBedIcon,
        info: "11 Lifestyle Villas",
      },
      {
        interiorId: 12,
        icon: PropertiesStatusIcon,
        info: "2 floors",
      },
      {
        interiorId: 13,
        icon: PropertiesLocationIcon,
        info: "Bingin, Uluwatu, Bali",
      },
    ],
    title: "THE COCO BOULEVARD",
    description: "Cash-back through development period 8% ",
    price: "$145,000 USD",
    investors: 482,
    detailsPublic: [
      {
        detailsId: 11,
        title: "Annual ROI Estimate",
        detail: "10-14%",
      },
      {
        detailsId: 12,
        title: "Completion Date",
        detail: "Feb 28, 2026",
      },
      {
        detailsId: 13,
        title: "Investment From",
        detail: "$1000 USD",
      },
    ],
    progress: 98,
    sharesLeft: 6663,
  },
];
