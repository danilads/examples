import React,{Fragment} from 'react';
import { Form, Icon, Input, Button } from 'antd';
import AntdFormInput from '../primitives/AntdFormInput';
import './AntdForm.less';

class AntdForm extends React.PureComponent {

    
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields();
        console.log('---SUBMIT---',this.props.form.getFieldsValue());
    };

    customVal=(params)=>{
        if(!/^([A-Za-z]*)$/.test(params.value)) {
            params.callback('только латин');
        }
        else if(params.value===""||params.value===undefined){
            params.callback('не должно быть пустым');
        }
        else{
            //ОБЯЗАТЕЛЬНО 
            params.callback();
        }
    };

    change=()=>{
    //   this.props.form.setFields({
    //     username: {value: 'ПОСТАВИЛИ-1!'}
    //   })
      this.props.form.setFieldsValue({username:'ПОСТАВИЛИ-2!'})
    };

  	render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, resetFields, validateFields } = this.props.form;
		return (<div className={'AntdForm'}>
            <div>AntdForm</div>
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        initialValue: 'someID',
                        rules: [{ 
                            validator: (rule, value, callback) => this.customVal({
                                rule, value, callback})
                        }],
                    })(
                        <AntdFormInput name='username'/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('customId', {
                        initialValue: '',
                        rules: [{
                            validator: (rule, value, callback) => this.customVal({
                                rule, value, callback})
                        }],
                    })(
                        <AntdFormInput name='customId'/>
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('some', {
                        initialValue: '',
                        rules: [{
                            required:true,
                            message: 'СЛЫШЬ, ПОЛЕ ЗАПОЛНИЛ!'
                        }],
                    })(
                        <AntdFormInput name='some'/>
                    )}
                </Form.Item>
                <Form.Item>
                    {/* отработает this.handleSubmit т.к. указан в <Form */}
                    <input type="submit" value="validate"/>
                    {/* <input type="button" onClick={this.handleSubmit}  value="отправить"/> */}
                </Form.Item>
                <Form.Item>
                    <input type={'button'} onClick={()=>{
                        resetFields(['customId']); //сброс валидация конкретного поля
                        //resetFields(); //сброс валидация всех полей
                    }} value="reset valid"/>
                </Form.Item>
                <Form.Item>
                    <input type={'button'} onClick={()=>{
                        validateFields(['some']);
                    }} value="validate only last"/>
                </Form.Item>
            </Form>
            <button onClick={this.change}>change value</button>
        </div>);

  	}

}


// возможные варианты экспортов
// CustomizedForm = Form.create({})(CustomizedForm);
// export const CreateForm = Form.create()( connect(mapStateToProps, mapDispatchToProps)(CreateModal) );

// export const CreateForm = Form.create()( connect( (state)=>({reduxState:state}) )(CreateModal) );

export default Form.create()(AntdForm);