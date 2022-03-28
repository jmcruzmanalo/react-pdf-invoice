import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import InvoiceOutput from './InvoiceOutput';

function App() {
  return (
    <div className="react-pdf-generator-root">
      {/* <InvoiceOutput /> */}

      <PDFDownloadLink
        document={<InvoiceOutput />}
        fileName="generated.pdf"
        style={{
          color: 'red',
        }}
      >
        {({ blob, url, loading, error }) => {
          console.log(url);

          return <button>{loading ? 'Loading document...' : 'Download Pdf'}</button>;
        }}
      </PDFDownloadLink>
    </div>
  );
}

export default App;
