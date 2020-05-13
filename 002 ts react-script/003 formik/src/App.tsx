import React from 'react';
import { useField, useFormik, Formik, Field, Form } from 'formik';
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

//---- 3) component manual validate and reset
class App3 extends React.Component {
  formik = {};
  validateUsername=(value:any)=>{
    let error;
    if (value === '') {
      error = 'field is empty!';
    }
    return error;
  }
  render() {
    return (
      <div>
        <h1>My Form</h1>
        <div
          onClick={()=>{
            let f:any = this.formik;
            f.resetForm();
          }
        }>reset from outside</div>
        <Formik   
          innerRef={(el) => this.formik = el}
  
          validateOnBlur={false}
          validateOnChange={false}
          initialValues={{
            username: ''  
          }}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}
        >
        {(props) => (
          <Form>
            {console.log('--props',props)}

            {/* Field */}
            {/* <div><Field
              onFocus={()=>{
                console.log('--focus');
                props.resetForm();
              }}
              name="username"
              validate={this.validateUsername}
              autoComplete="off"
            />
            </div> */}

            {/* Field custom input */}
            {/* <Field
                name="username"
                validate={this.validateUsername}
              >
                  {(fieldProps:any) => (
                      <div>
                          <input
                            onFocus={()=>{
                              console.log('--focus',props);
                              //props.resetForm();
                              props.setErrors({ username: '' });
                            }}
                            type="text"
                            autoComplete="off"
                            {...fieldProps.field}
                          />
                      </div>
                  )}
              </Field> */}

              {/* Custom validation */}
              <Field
                name="username"
                validate={this.validateUsername}
              >
                  {(fieldProps:any) => (
                      <div>
                          <input
                            onFocus={()=>{
                              console.log('--focus',props);
                              //props.resetForm();
                              props.setErrors({ username: '' });
                            }}
                            type="text"
                            autoComplete="off"
                            {...fieldProps.field}
                            onKeyPress={async (ev) => {
                              if (ev.key === 'Enter') {
                                //setError работает только в запросе
                                await new Promise(resolve => setTimeout(resolve, 1000));
                        
                                props.setFieldError('username', 'async err');
            
                              }
                            }}
                          />
                      </div>
                  )}
              </Field>

            
            {/* Trigger field-level validation imperatively */}
            <div>
              <button type="button" onClick={() => props.validateField('username')}>
                Check Username
              </button>
              <button type="submit">Submit</button>
            </div>

            <div>
              {props.errors.username && props.touched.username && <div>{props.errors.username}</div>}
            </div>
          </Form>
        )}
      </Formik>
      </div>
    )
  }
}

export {App3 as App};