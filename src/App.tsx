import { PDFViewer } from '@react-pdf/renderer';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { PartialDeep } from 'type-fest';
import Form from './Form';
import { Invoice } from './InvoiceInterface';
import InvoiceOutput from './InvoiceOutput';

function App() {
  const methods = useForm<PartialDeep<Invoice>>();
  const values = methods.getValues();
  return (
    <div className="react-pdf-generator-root">
      <FormProvider {...methods}>
        <Form />
        <PDFViewer style={{ width: '100%', height: '100vh' }}>
          <InvoiceOutput invoice={values} />
        </PDFViewer>
      </FormProvider>

      {/* <PDFDownloadLink
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
      </PDFDownloadLink> */}
    </div>
  );
}

export default App;
