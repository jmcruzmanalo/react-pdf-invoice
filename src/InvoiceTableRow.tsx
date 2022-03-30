import React, { FC, Fragment } from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { InvoiceItem } from './InvoiceInterface';

const borderColor = '#efefef';
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    alignItems: 'center',
    lineHeight: 1,

    fontSize: 11,
    fontFamily: 'Times-Roman',
  },
  ndisno: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  serviceDate: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  description: {
    width: '30%',
    textAlign: 'left',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  qty: {
    width: '5%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  rate: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'right',
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
  gst: {
    width: '5%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  amount: {
    width: '15%',
    textAlign: 'right',
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

interface InvoiceTableRowProps {
  items: InvoiceItem[];
}

const InvoiceTableRow: FC<InvoiceTableRowProps> = ({ items }) => {
  const rows = items.map((item) => (
    <View style={styles.row} key={item.ndisno.toString()}>
      <Text style={styles.ndisno}>{item.ndisno}</Text>
      <Text style={styles.serviceDate}>
        {new Intl.DateTimeFormat('en-AU', {
          year: 'numeric',
          month: 'numeric',
          day: '2-digit',
        }).format(item.serviceDate)}
      </Text>
      <Text style={styles.description}>{item.desc}</Text>
      <Text style={styles.qty}>{item.qty}</Text>
      <Text style={styles.rate}>{item.rate.toLocaleString(undefined, { maximumFractionDigits: 2 })}</Text>
      <Text style={styles.gst}>{item.gst ? '10%' : '0'}</Text>
      <Text style={styles.amount}>
        {(item.qty * item.rate).toLocaleString(undefined, { maximumFractionDigits: 2 })}
      </Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default InvoiceTableRow;
