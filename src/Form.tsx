import { FC, memo } from 'react';
import { useFieldArray, useForm, useFormContext } from 'react-hook-form';
import { PartialDeep } from 'type-fest';
import { Invoice } from './InvoiceInterface';

const Form: FC = memo(() => {
  const { register, handleSubmit, formState, watch, control } = useFormContext<PartialDeep<Invoice>>();
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({ name: 'items', control });
  console.log('Form errors: ', errors);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log('On submit data: ', data);
      })}
    >
      <input {...register('companyName')} type="text" />

      <input {...register('date')} type="date" />

      {fields.map((field, index) => {
        return (
          <div key={field.id} style={{ display: 'flex' }}>
            <input {...register(`items.${index}.ndisno`)} type="text" />
            <input {...register(`items.${index}.serviceDate`)} type="date" />
            <button onClick={() => remove(index)}>Remove</button>
          </div>
        );
      })}
      <button onClick={() => append({})}>Add New Item</button>

      <button type="submit">Submit</button>
    </form>
  );
});

export default Form;
