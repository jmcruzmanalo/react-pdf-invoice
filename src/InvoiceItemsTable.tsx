import { StyleSheet, View } from '@react-pdf/renderer';
import React, { FC } from 'react';
import { PartialDeep } from 'type-fest';
import { Invoice } from './InvoiceInterface';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableRow from './InvoiceTableRow';

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#efefef',
    width: '100%',
    marginBottom: 10,
  },
});

interface InvoiceItemTableProps {
  invoice: PartialDeep<Invoice>;
}

const InvoiceItemsTable: FC<InvoiceItemTableProps> = ({ invoice }) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader />
    {invoice.items && <InvoiceTableRow items={invoice.items} />}
  </View>
);

export default InvoiceItemsTable;
