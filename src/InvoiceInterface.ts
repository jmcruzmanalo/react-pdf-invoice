export interface Invoice {
  balance: number;
  items: InvoiceItem[];
}

export interface InvoiceItem {
  sno: number;
  desc: string;
  qty: number;
  rate: number;
}

export const sampleData: Invoice = {
  balance: 2283.74,
  items: [
    {
      sno: 1,
      desc: 'ad sunt culpa occaecat qui',
      qty: 5,
      rate: 405.89,
    },
    {
      sno: 2,
      desc: 'cillum quis sunt qui aute',
      qty: 5,
      rate: 373.11,
    },
    {
      sno: 3,
      desc: 'ea commodo labore culpa irure',
      qty: 5,
      rate: 458.61,
    },
    {
      sno: 4,
      desc: 'nisi consequat et adipisicing dolor',
      qty: 10,
      rate: 725.24,
    },
    {
      sno: 5,
      desc: 'proident cillum anim elit esse',
      qty: 4,
      rate: 141.02,
    },
  ],
};
