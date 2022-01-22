import { useField } from "formik";
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function RTextInput({ labelText, ...props }) {
  const [field, meta] = useField(props);
  //reflect api
  return (
    <div>
      <FormField error={meta.touched && !!meta.error}>
        <label style={{textAlign:'left'}}>{labelText}</label>
        <input {...field} {...props} />
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : (
          <></>
        )}
      </FormField>
    </div>
  );
}
