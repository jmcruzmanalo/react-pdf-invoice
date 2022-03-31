export interface Invoice {
  companyName: string;
  abn: string;
  address: string;
  state: string;
  country: string;
  phoneNumber: string;
  emailAddress: string;
  billToName: string;
  billToAddress: string;
  invoiceNumber: string;
  invoiceDate: string;
  ndisParticipantName: string;
  ndisParticipantNumber: string;
  ndisParticipantAddress: string;
  toggleSupport: boolean;
  supportCoordinators: string;
  supportEmails: string;
  items: InvoiceItem[];
  bankAccountName: string;
  bsb: string;
  accountNumber: string;

  subtotal: number;
  gsttotal: number;
  grandtotal: number;
}

export interface InvoiceItem {
  ndisno: number;
  serviceDate: string;
  desc: string;
  qty: number;
  rate: number;
  gst: boolean;
  total: number;
}
