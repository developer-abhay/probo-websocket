import { ORDERBOOK_TYPE, SUBSCRIBELIST_TYPE } from "../interface";

export const EVENTS: string[] = [];

export const CLIENTS_LIST: SUBSCRIBELIST_TYPE = {
  eth: [],
};

export const ORDERBOOK: ORDERBOOK_TYPE = {
  Eth: {
    yes: [
      { price: 10, quantity: 100 },
      { price: 10, quantity: 100 },
    ],
    no: [{ price: 10, quantity: 100 }],
  },
  Bit: {
    yes: [
      { price: 10, quantity: 100 },
      { price: 10, quantity: 100 },
    ],
    no: [{ price: 10, quantity: 100 }],
  },
  Hello: {
    yes: [
      { price: 10, quantity: 100 },
      { price: 10, quantity: 100 },
    ],
    no: [{ price: 10, quantity: 100 }],
  },
};

// const sd = {
//   BUY: [
//     {
//       price: 2.5,
//       quantity: 151,
//     },
//     {
//       price: 3.5,
//       quantity: 439,
//     },
//     {
//       price: 4.5,
//       quantity: 2,
//     },
//     {
//       price: 5,
//       quantity: 90,
//     },

//     {
//       price: 6,
//       quantity: 1,
//     },
//     {
//       price: 7,
//       quantity: 1,
//     },
//     {
//       price: 7.5,
//       quantity: 500,
//     },
//     {
//       price: 8,
//       quantity: 50,
//     },
//     {
//       price: 8.5,
//       quantity: 50,
//     },
//     {
//       price: 9,
//       quantity: 60,
//     },
//     {
//       price: 9.5,
//       quantity: 630,
//     },
//   ],
//   SELL: [
//     {
//       price: 8,
//       quantity: 61,
//     },
//     {
//       price: 8.5,
//       quantity: 50,
//     },
//     {
//       price: 9,
//       quantity: 610,
//     },
//     {
//       price: 9.5,
//       quantity: 631,
//     },
//     {
//       price: 0,
//       quantity: 0,
//     },
//   ],
// };

// const wdv = {
//   BUY: [],
//   SELL: [
//     {
//       price: 8,
//       quantity: 61,
//     },
//     {
//       price: 8.5,
//       quantity: 50,
//     },
//     {
//       price: 9,
//       quantity: 610,
//     },
//     {
//       price: 9.5,
//       quantity: 631,
//     },
//     {
//       price: 0,
//       quantity: 0,
//     },
//   ],
// };
