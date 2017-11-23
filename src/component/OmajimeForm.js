import React, {Component} from 'react';
import {Form, Text } from 'react-form';
import {FormLabel} from './FormLabel';
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
        <div className='u-mt34'>
        <FormLabel labelName={'corporateName'} fieldName={'企業名'} isRequire={true} />
        <Text className='field u-mt15' placeholder='大真面目デザイン'field='corporateName' id='corporateName' />
        </div>
        <div className='u-mt15'>
        <FormLabel labelName={'userName'} fieldName={'氏名'} isRequire={true} />
        <Text className='field u-mt15' placeholder='森田賢二' field='userName' id='userName' />
        </div>
        <div className='u-mt15'>
        <FormLabel labelName={'userNameKana'} fieldName={'フリガナ'} isRequire={true} />
        <Text className='field u-mt15' placeholder='モリタ ケンジ' field='userNameKana' id='userNameKana' />
        </div>
        <div className='u-mt15'>
        <FormLabel labelName={'mailAddress'} fieldName={'メールアドレス'} isRequire={true} />
        <Text className='field u-mt15' placeholder='abcdef@omaijme.com' field='mailAddress' id='mailAddress' />
        </div>
        <div className='u-mt15'>
        <FormLabel labelName={'tel'} fieldName={'電話番号'} isRequire={true} />
        <Text className='field u-mt15' placeholder='03-0000-0000' field='tel' id='tel' />
        </div>
        <div className='u-mt15'>
        <FormLabel labelName={'content'} fieldName={'お問い合わせ内容'} isRequire={true} />
        <Text className='field u-mt15' placeholder='こちらにお問い合わせ内容をご記入ください。' field='content' id='content' />
        </div>
        <div className='toFormBtn'><a onClick={(e)=> {this.submitWrap(e, formApi)}}>お問い合わせする</a></div>
    </form>
    )}
</Form>
)
}
}