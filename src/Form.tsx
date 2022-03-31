import { queryByTestId } from '@testing-library/react';
import { FC, memo, useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { PartialDeep } from 'type-fest';
import { calculateGstTotal, calculateSubTotal } from './calculateValues';
import { Invoice, InvoiceItem } from './InvoiceInterface';

const Form: FC = memo(() => {
  const { register, handleSubmit, formState, watch, control, getValues, setValue } =
    useFormContext<PartialDeep<Invoice>>();
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({ name: 'items', control });
  const toggleSupport = watch('toggleSupport');
  const items = watch('items');

  const subTotal = calculateSubTotal(items);
  const gstTotal = calculateGstTotal(items);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log('On submit data: ', data);
      })}
    >
      <div className="columns">
        <div className="column">
          <input {...register('companyName')} type="text" className="companyName" placeholder="Company Name" />
          <input {...register('abn')} type="text" placeholder="ABN" />
          <input {...register('address')} type="text" placeholder="Address" />
          <select {...register('state')} placeholder="State">
            <option value="ACT">ACT</option>
            <option value="NSW">NSW</option>
            <option value="NT">NT</option>
            <option value="QLD">QLD</option>
            <option value="SA">SA</option>
            <option value="TAS">TAS</option>
            <option value="VIC">VIC</option>
            <option value="WA">WA</option>
          </select>
          <input {...register('country')} type="text" value={'Australia'} />
          <input {...register('phoneNumber')} type="text" placeholder="Phone Number" />
          <input {...register('emailAddress')} type="email" placeholder="Email Address" />
          <h2>Bill to: </h2>
          <input {...register('billToName')} type="text" placeholder="Name" defaultValue="BudgetNet Pty Ltd" />
          <input
            {...register('billToAddress')}
            type="text"
            placeholder="Address"
            defaultValue="Po Box 28, Melton, VIC, 3337, Australia"
          />
        </div>

        <div className="column">
          <h2>Invoice Details</h2>
          <input {...register('invoiceNumber')} type="text" placeholder="Invoice Number" />
          <input {...register('invoiceDate')} type="date" placeholder="Invoice date" />
          <h2>NDIS Participant</h2>
          <input {...register('ndisParticipantName')} type="text" placeholder="NDIS Participant Name" />
          <input {...register('ndisParticipantNumber')} type="text" placeholder="NDIS Participant Number" />
          <input {...register('ndisParticipantAddress')} type="text" placeholder="NDIS Participant Address" />

          <label className="checkbox">
            <input type="checkbox" {...register('toggleSupport')} />
            Add Support Coordinators
          </label>
          {toggleSupport && <h2>Support Coordinators</h2>}
          {toggleSupport && <textarea {...register('supportCoordinators')} placeholder="Support Coordinator Name" />}
          {toggleSupport && <textarea {...register('supportEmails')} placeholder="Support Coordinator Email" />}
        </div>
      </div>

      <div className="tableHeader">
        <div className="ndisno">NDIS Number</div>
        <div className="serviceDate">Service Date</div>
        <div className="desc">Service Description</div>
        <div className="qty">Qty</div>
        <div className="rate">Rate</div>
        <div className="gst">GST 10%</div>
        <div className="initialtotal">Total</div>
        <div className="empty">X</div>
      </div>
      {fields.map((field, index) => {
        const qty = getValues(`items.${index}.qty`);
        const rate = getValues(`items.${index}.rate`);
        const gst = getValues(`items.${index}.gst`);

        let total = (qty ?? 0) * (rate ?? 0);

        if (gst === true) {
          total = total * 0.1 + total;
        }

        console.log('Total: ', total);

        return (
          <div key={field.id} className="formtable">
            <input {...register(`items.${index}.ndisno`)} type="text" className="ndisno" />
            <input {...register(`items.${index}.serviceDate`)} type="date" className="serviceDate" />
            <input {...register(`items.${index}.desc`)} type="text" className="desc" />
            <input {...register(`items.${index}.qty`)} type="text" className="qty" defaultValue={0} />
            <input {...register(`items.${index}.rate`)} type="text" className="rate" defaultValue={0} />
            <input {...register(`items.${index}.gst`)} type="checkbox" className="gst" />
            <input type="number" className="initialtotal" readOnly value={total} />
            <button className="remove" onClick={() => remove(index)}>
              X
            </button>
          </div>
        );
      })}
      <button onClick={() => append({})}>Add New Item</button>

      <div className="columns">
        <div className="column">
          <h2>Bank Details</h2>
          <input {...register('bankAccountName')} type="text" placeholder="Account Name" />
          <input {...register('bsb')} type="text" placeholder="BSB" />
          <input {...register('accountNumber')} type="text" placeholder="Account Number" />
        </div>
        <div className="column">
          <div className="total">
            <label>Subtotal</label>
            <input readOnly type="number" value={subTotal} />
          </div>
          <div className="total">
            <label>GST</label>
            <input readOnly type="number" value={gstTotal} />
          </div>
          <div className="total">
            <label>GrandTotal</label>
            <input readOnly type="number" value={subTotal + gstTotal} />
          </div>
        </div>
      </div>

      {/* <button type="submit">Submit</button> */}
    </form>
  );
});

export default Form;
