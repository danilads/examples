import React from 'react';
import { useField, useFormik, Formik, Field, Form } from 'formik';
import './App.css';

const validate = (values:any) => {
  console.log('-validate-',values);
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
          validateOnBlur={true}
          validateOnChange={false}
          initialValues={{username: ''}}
          onSubmit={() => {}}
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
                                //setFieldError работает только (в запросе или с задержкой)
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
//---- 4) component controlled
class App4 extends React.Component {
  state={
    username: 'ggwp'
  };
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
        <Formik   
          initialValues={{username: this.state.username}}
          onSubmit={() => {}}
        >
        {(props) => (
          <Form>
              <Field
                name="username"
                validate={this.validateUsername}
              >
                  {(fieldProps:any) => (
                      <div>
                        {console.log('--gge',fieldProps.field)}
                          <input
                            type="text"
                            {...fieldProps.field}
                            onChange={(e)=>{
                              this.setState({username:e.target.value});
                              fieldProps.field.onChange(e);
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
//---- 5) use formilk
const App5: React.FC = () => {

  const formik = useFormik({
    initialValues: {nameUser: ''},
    validate:validate,
    validateOnBlur:true,
    validateOnChange:false,
    onSubmit: () => {}
  });

  console.log('-wtf',formik);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="text"
              autoComplete="off"
              name="nameUser"
              autoFocus
              onChange={(e)=>{

                formik.setErrors({nameUser: ''});
                formik.handleChange(e);
              }}
              value={formik.values.nameUser}
              onFocus={() => {
                // on focus - turn off validation
                formik.setErrors({nameUser: ''});
              }}
              onKeyPress={async (ev) => {
                if (ev.key === 'Enter') {
                  console.log('-works?');
                  formik.validateForm();
                }
              }}
            />
          </div>
          <div><button>setError</button></div>
          {formik.errors.nameUser && <div>{formik.errors.nameUser}</div>}
      </form>
    </>
  );
};

export default App5;

export {App5 as App};