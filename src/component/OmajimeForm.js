import React, {Component} from 'react';
import {Form, Text } from 'react-form';
import 'object-assign';

export class OmajimeForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            corporateName: '',
            submits: 0
        }
    }
    submitWrap = (e, formApi) => {
    console.log(e, formApi, "ラッパーの中");
    this.setState(Object.assign({}, formApi.values, {submits: formApi.submits}), formApi.submitForm());
console.log("submitForm成功");
}
successValidator = () => {
    console.log("successValidator成功")
}
render(){
    return (
        <Form onSubmit={(submittedValues) => {
        console.log(submittedValues, 'submittedValue後');
        this.setState({
            corporateName: submittedValues.corporateName, submits: 0})
    }}
    validateSuccess={this.successValidator}
>
    {
        formApi => (
    <form onSubmit={formApi.submitForm} id='form1'>
        <div>
        <div><label htmlFor='corporateName' /><span>必須</span></div>
        <Text field='corporateName' id='corporateName' />
        </div>
        <button onClick={(e)=> {this.submitWrap(e, formApi)}}>お問い合わせする</button>
    </form>
    )}
</Form>
)
}
}