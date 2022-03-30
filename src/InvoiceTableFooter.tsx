import React, { FC } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { InvoiceItem } from './InvoiceInterface';
import { PartialDeep } from 'type-fest';

const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '50%',
    marginTop: 10,
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: 13,
    paddingBottom: 5,
  },
  description: {
    width: '55%',
    textAlign: 'right',
    paddingRight: 5,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
  total: {
    width: '45%',
    textAlign: 'right',
    paddingRight: 5,
    fontFamily: 'Poppins',
  },
});

interface InvoiceTableFooterProps {
  items: PartialDeep<InvoiceItem[]>;
}

const InvoiceTableFooter: FC<InvoiceTableFooterProps> = ({ items }) => {
  const total = items
    .filter((item): item is PartialDeep<InvoiceItem> => !!item)
    .map((item) => (item?.qty ?? 0) * (item?.rate ?? 0))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return (
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text style={styles.description}>SUBTOTAL</Text>
        <Text style={styles.total}>{total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>GST</Text>
        <Text style={styles.total}>{total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description}>GRANDTOTAL</Text>
        <Text style={styles.total}>{total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Text>
      </View>
    </View>
  );
};

export default InvoiceTableFooter;
