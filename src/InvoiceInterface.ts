export interface Invoice {
  companyName: string;
  date: string; // Stringified date since input type="date" outputs string
  items: InvoiceItem[];
}

export interface InvoiceItem {
  ndisno: number;
  serviceDate: string;
  desc: string;
  qty: number;
  rate: number;
  gst: boolean;
}
