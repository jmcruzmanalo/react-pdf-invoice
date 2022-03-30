import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#3D73FF';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: borderColor,
    backgroundColor: borderColor,
    borderBottomWidth: 1,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 11,
    fontFamily: 'Times-Roman',
    lineHeight: 1,
    color: 'white',
  },
  ndisno: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 800,
  },
  serviceDate: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 800,
  },
  description: {
    width: '30%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 800,
  },
  qty: {
    width: '5%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 800,
  },
  rate: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 800,
  },
  gst: {
    width: '5%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: 800,
  },
  amount: {
    width: '15%',
    paddingTop: 10,
    paddingBottom: 10,
    fontStyle: 'bold',
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.ndisno}>NDIS Item No.</Text>
    <Text style={styles.serviceDate}>Service Date</Text>
    <Text style={styles.description}>Item Description</Text>
    <Text style={styles.qty}>Qty</Text>
    <Text style={styles.rate}>@</Text>
    <Text style={styles.gst}>GST</Text>
    <Text style={styles.amount}>Amount</Text>
  </View>
);

export default InvoiceTableHeader;
