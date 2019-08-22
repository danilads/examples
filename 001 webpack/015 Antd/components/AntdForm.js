import React,{Fragment} from 'react';
import { Form, Icon, Input, Button } from 'antd';
import AntdFormInput from '../primitives/AntdFormInput';
import './AntdForm.less';

class AntdForm extends React.PureComponent {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    };
    customVal=(params)=>{
        console.log('---customVal params',params);
        if(!/^([A-Za-z]*)$/.test(params.value)) {
            params.callback('только латин');
        }
        else if(params.value===""){
            params.callback('не должен быть пустым');
        }
    }
  	render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        console.log('---getFieldError',getFieldError('username'));
		return (<div className={'AntdForm'}>
            <div>AntdForm</div>
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [
                            { 
                                required: true, 
                                validator: (rule, value, callback) => this.customVal({
                                    rule, value, callback,
                                    message: 'Укажите Номер',
                                    max: 30
                                })
                            }
                        ],
                    })(
                        <AntdFormInput/>
                    )}
                </Form.Item>
                <Form.Item>
                    {/* <Button type="primary" htmlType="submit">
                        Log in
                    </Button> */}
                    <input type="submit" value="отправить"/>
                </Form.Item>
            </Form>
        </div>);

  	}

}


// возможнеы варианты экспортов
// CustomizedForm = Form.create({})(CustomizedForm);
// export const CreateForm = Form.create()( connect(mapStateToProps, mapDispatchToProps)(CreateModal) );

export default Form.create()(AntdForm );
