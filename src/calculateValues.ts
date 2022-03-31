import { PartialDeep } from 'type-fest';
import { InvoiceItem } from './InvoiceInterface';

export const calculateSubTotal = (items: (PartialDeep<InvoiceItem> | undefined)[] | undefined) => {
  const subTotal =
    items
      ?.map(({ qty = 0, rate = 0 } = {}) => {
        return qty * rate;
      })
      .reduce((acc, curr) => acc + curr, 0) ?? 0;
  return subTotal;
};

export const calculateGstTotal = (items: (PartialDeep<InvoiceItem> | undefined)[] | undefined) => {
  const gstItems = items?.filter((item): item is PartialDeep<InvoiceItem> => !!item?.gst);
  const gstTotal =
    gstItems
      ?.map(({ qty = 0, rate = 0 } = {}) => {
        return qty * rate * 0.1;
      })
      .reduce((acc, curr) => acc + curr, 0) ?? 0;
  return gstTotal;
};
