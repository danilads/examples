import React from 'react';
import { useFormik, Formik, Field, Form } from 'formik';
import './App.css';

const validate = (values:any) => {
  const errors:any = {};
  if (!values.nameUser) {
    errors.nameUser = 'Required';
  }
  else if (values.nameUser.length > 15) {
    errors.nameUser = 'Must be 15 characters or less';
  }
  return errors;
};

//---- 1) functional component
const App1 = () => {
  const formik = useFormik({
    initialValues: {nameUser: ''},
    validate,
    onSubmit: (values) => {
      console.log('--will not work until errors',values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="nameUser"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.nameUser}
      />
      <button type="submit">Submit</button>
      {formik.errors.nameUser ? <span>{formik.errors.nameUser}</span> : null}
    </form>
  );
};

//---- 2) component
class App2 extends React.Component {
  render() {
    return (
      <div>
        <h1>My Form</h1>
        <Formik
          initialValues={{ nameUser: 'jared' }}
          validate={validate}
          onSubmit={(values) => {
            console.log('--will not work until errors',values);
          }}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              <input
                name="nameUser"
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.nameUser}
              />
              <button type="submit">Submit</button>
              {props.errors.nameUser ? <span>{props.errors.nameUser}</span> : null}
            </form>
          )}
        </Formik>
      </div>
    )
  }
}

export {App1 as App};