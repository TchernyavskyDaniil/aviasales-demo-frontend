import russia from "./russia.png";
import russiaSmall from "./russia-small.png";
import fly from "./fly.png";
import nordwind from "./nordwind.png";
import nordwindAlt from "./nordwind-alt.png";
import redWings from "./red-wings.png";
import redWingsSmall from "./redwings-small.png";
import unknown from "./unknown.png";

export const CardsData = [
  {
    key: 0,
    logo: [russia],
    status: "cheapest",
    departure: {
      outTime: 1519419900,
      inTime: 1519430700,
      totalTime: 18000,
      city: 1,
      date: 1519430400,
      direct: true
    },
    arrival: {
      outTime: 1519457700,
      inTime: 1519481400,
      totalTime: 16500,
      direct: true,
      city: 2,
      date: 1519430400
    },
    things: [{ handbag: 5, baggage: 15 }],
    proposals: [{ name: "Clickavia", price: 7712 }]
  },
  {
    key: 1,
    logo: [fly],
    status: "fastest",
    departure: {
      outTime: 1519446600,
      inTime: 1519455000,
      direct: true,
      totalTime: 15600,
      city: 1,
      date: 1519430400
    },
    arrival: {
      outTime: 1519460400,
      inTime: 1519482900,
      direct: false,
      totalTime: 15300,
      city: 2,
      date: 1519430400
    },
    things: [{ handbag: 5, baggage: null }],
    proposals: [{ name: "Билетик Аэро", price: 9269 }]
  },
  {
    key: 2,
    logo: [nordwind],
    status: "best",
    departure: {
      outTime: 1519420500,
      inTime: 1519431000,
      direct: true,
      totalTime: 17700,
      city: 1,
      date: 1519430400
    },
    arrival: {
      outTime: 1519458300,
      inTime: 1519481700,
      direct: true,
      totalTime: 16200,
      city: 2,
      date: 1519430400
    },
    things: [
      { handbag: 5, baggage: null },
      { handbag: 5, baggage: 12, price: 267 }
    ],
    proposals: [{ name: "Aviakassa", price: 8029 }]
  },
  {
    key: 3,
    logo: [nordwindAlt],
    departure: {
      outTime: 1519458300,
      inTime: 1519431000,
      direct: true,
      totalTime: 17700,
      city: 1,
      date: 1519430400
    },
    arrival: {
      outTime: 1519458300,
      inTime: 1519481700,
      direct: true,
      totalTime: 16200,
      city: 2,
      date: 1519430400
    },
    things: [
      { handbag: 10, baggage: null },
      { handbag: 10, baggage: 20, price: 136 }
    ],
    proposals: [
      { name: "Билетик Аэро", price: 8164 },
      { name: "Clickavia", price: 8302 },
      { name: "Aviakassa", price: 8376 },
      { name: "Biletix", price: 8302 },
      { name: "OneTwoTrip", price: 8302 },
      { name: "Biletix", price: 8302 }
    ]
  },
  {
    key: 4,
    logo: [redWings],
    departure: {
      outTime: 1519444800,
      inTime: 1519453800,
      direct: true,
      totalTime: 16200,
      city: 1,
      date: 1519430400
    },
    arrival: {
      outTime: 1519459200,
      inTime: 1519481400,
      direct: true,
      totalTime: 15000,
      city: 2,
      date: 1519430400
    },
    things: [{ handbag: 10, baggage: 15 }],
    proposals: [{ name: "Biletix", price: 8240 }]
  },
  {
    key: 5,
    logo: [russiaSmall, redWingsSmall],
    departure: {
      outTime: 1519419900,
      inTime: 1519430700,
      direct: true,
      totalTime: 18000,
      city: 1,
      date: 1519430400
    },
    arrival: {
      outTime: 1519459200,
      inTime: 1519481400,
      direct: true,
      totalTime: 15000,
      city: 2,
      date: 1519430400
    },
    things: [{ handbag: 5, baggage: 20 }],
    amount: 4,
    proposals: [
      { name: "Clickavia", price: 9108 },
      { name: "Svyaznoi Travel", price: 9275 },
      { name: "Билетик Аэро", price: 9587 },
      { name: "Biletix", price: 8302 },
      { name: "OneTwoTrip", price: 8302 },
      { name: "Biletix", price: 8302 },
      { name: "Aviakassa", price: 8302 }
    ]
  },
  {
    key: 6,
    logo: [russiaSmall, unknown],
    departure: {
      outTime: 1519419900,
      inTime: 1519430700,
      direct: true,
      totalTime: 18000,
      city: 1,
      date: 1519430400
    },
    arrival: {
      outTime: 1519460400,
      inTime: 1519482900,
      direct: true,
      totalTime: 15300,
      city: 2,
      date: 1519430400
    },
    things: [{ handbag: 5, baggage: 15 }],
    proposals: [{ name: "Biletix", price: 9485 }]
  }
];

export const citiesId = {
  1: "Москва",
  2: "Барселона"
};

export const airportId = {
  1: "vko",
  2: "bcn"
};
