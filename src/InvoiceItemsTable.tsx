import React, { FC } from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader';

import InvoiceTableBlankSpace from './InvoiceTableBlankSpace';
import InvoiceTableFooter from './InvoiceTableFooter';
import { Invoice } from './InvoiceInterface';
import InvoiceTableRow from './InvoiceTableRow';
const tableRowsCount = 11;

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
  invoice: Invoice;
}

const InvoiceItemsTable: FC<InvoiceItemTableProps> = ({ invoice }) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader />
    <InvoiceTableRow items={invoice.items} />
    {/* <InvoiceTableBlankSpace rowsCount={tableRowsCount - invoice.items.length} /> */}
  </View>
);

export default InvoiceItemsTable;
