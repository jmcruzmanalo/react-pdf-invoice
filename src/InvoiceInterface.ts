export interface Invoice {
  items: InvoiceItem[];
}

export interface InvoiceItem {
  ndisno: number;
  serviceDate: Date;
  desc: string;
  qty: number;
  rate: number;
  gst: boolean;
}

export const sampleData: Invoice = {
  items: [
    {
      ndisno: 1,
      serviceDate: new Date('2022-03-03'),
      desc: 'ad sunt culpa occaecat qui',
      qty: 5,
      rate: 405.89,
      gst: true,
    },
    {
      ndisno: 2,
      serviceDate: new Date('2022-03-03'),
      desc: 'ad sunt culpa occaecat qui',
      qty: 5,
      rate: 405.89,
      gst: true,
    },
    {
      ndisno: 3,
      serviceDate: new Date('2022-03-03'),
      desc: 'ad sunt culpa occaecat qui',
      qty: 5,
      rate: 405.89,
      gst: true,
    },
    {
      ndisno: 4,
      serviceDate: new Date('2022-03-03'),
      desc: 'ad sunt culpa occaecat qui',
      qty: 5,
      rate: 405.89,
      gst: true,
    },
    {
      ndisno: 5,
      serviceDate: new Date('2022-03-03'),
      desc: 'ad sunt culpa occaecat qui',
      qty: 5,
      rate: 405.89,
      gst: true,
    },
  ],
};
