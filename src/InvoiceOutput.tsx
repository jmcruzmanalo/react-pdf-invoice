import { VFC } from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import InvoiceItemsTable from './InvoiceItemsTable';
import { Invoice } from './InvoiceInterface';

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    paddingTop: 30,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 30,
    lineHeight: 1.5,
    flexDirection: 'column',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    // fontFamily: 'Oswald',
    fontWeight: 800,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Times-Roman',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const invoice: Invoice = {
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
const InvoiceOutput: VFC = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Company Name</Text>
          <Text style={styles.text}>ABN: </Text>
          <Text style={styles.text}>Address:</Text>
          <Text style={styles.text}>State</Text>
          <Text style={styles.text}>Country: Australia</Text>
          <Text style={styles.text}>Phone Number: </Text>
          <Text style={styles.text}>Email Address: </Text>
          <Text style={styles.title}>Bill To</Text>
          <Text style={styles.text}>BudgetNet Pty Ltd</Text>
          <Text style={styles.text}>Po Box 28, Melton, VIC, 3337, Australia</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Invoice No.</Text>
          <Text style={styles.text}>Invoice # </Text>
          <Text style={styles.text}>Date</Text>
          <Text style={styles.title}>NDIS Participant</Text>
          <Text style={styles.text}>NDIS Participant Name</Text>
          <Text style={styles.text}>NDIS Participant Number</Text>
          <Text style={styles.text}>NDIS Participant Address</Text>
        </View>
        <InvoiceItemsTable invoice={invoice} />
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  );
};
export default InvoiceOutput;
