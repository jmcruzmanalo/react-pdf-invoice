import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { IncomingMessage } from 'http';
import { VFC } from 'react';
import { PartialDeep } from 'type-fest';
import { Invoice } from './InvoiceInterface';
import InvoiceItemsTable from './InvoiceItemsTable';
import InvoiceTableFooter from './InvoiceTableFooter';

const poppins = require('./fonts/Poppins-Medium.ttf');
Font.register({
  family: 'Poppins',
  src: poppins,
});

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    padding: 30,
    lineHeight: 1.5,
  },
  section: {
    padding: 0,
    flexGrow: 1,
    width: '49%',
  },
  billDetails: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 800,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'Poppins',
  },
  text: {
    fontSize: 11,
    fontFamily: 'Times-Roman',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 10,
    bottom: 15,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const InvoiceOutput: VFC<{ invoice: PartialDeep<Invoice> }> = ({ invoice }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.billDetails}>
          <View style={styles.section}>
            <Text style={styles.title}>{invoice.companyName}</Text>
            <Text style={styles.text}>ABN: {invoice.abn}</Text>
            <Text style={styles.text}>Address: {invoice.address}</Text>
            <Text style={styles.text}>State {invoice.state}</Text>
            <Text style={styles.text}>Country: {invoice.country}</Text>
            <Text style={styles.text}>Phone Number: {invoice.phoneNumber}</Text>
            <Text style={styles.text}>Email Address: {invoice.emailAddress}</Text>
            <Text style={styles.title}>Bill To</Text>
            <Text style={styles.text}>{invoice.billToName}</Text>
            <Text style={styles.text}>{invoice.billToAddress}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.title}>Invoice No.</Text>
            <Text style={styles.text}>Invoice #: {invoice.invoiceNumber}</Text>
            <Text style={styles.text}>Date: {invoice.invoiceDate}</Text>
            <Text style={styles.title}>NDIS Participant</Text>
            <Text style={styles.text}>NDIS Participant Name: {invoice.ndisParticipantName}</Text>
            <Text style={styles.text}>NDIS Participant No.: {invoice.ndisParticipantNumber}</Text>
            <Text style={styles.text}>NDIS Participant Address: {invoice.ndisParticipantAddress}</Text>
            {invoice.toggleSupport && (
              <View>
                <Text style={styles.title}>Support Coordinators</Text>
                <Text style={styles.text}>Support Coordinators: {invoice.invoiceNumber}</Text>
                <Text style={styles.text}>Email: {invoice.invoiceDate}</Text>
              </View>
            )}
          </View>
        </View>
        <InvoiceItemsTable invoice={invoice} />
        <View style={styles.billDetails}>
          <View style={styles.section}>
            <Text style={styles.title}>Bank Details</Text>
            <Text style={styles.text}>Account Name: {invoice.bankAccountName}</Text>
            <Text style={styles.text}>BSB: {invoice.bsb}</Text>
            <Text style={styles.text}>Account No.: {invoice.accountNumber}</Text>
          </View>
          {invoice.items && <InvoiceTableFooter items={invoice.items} />}
        </View>
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
