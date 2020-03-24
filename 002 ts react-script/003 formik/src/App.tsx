import React from 'react';
import { useFormik } from 'formik';
import './App.css';


const validate = (values:any) => {
  const errors:any = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }
  return errors;
};

////---- 1) base
const App = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validate,
    onSubmit: (values) => {
      console.log('--submit',values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <button type="submit">Submit</button>
      {formik.errors.name ? <span>{formik.errors.name}</span> : null}
    </form>
  );
};



export default App;