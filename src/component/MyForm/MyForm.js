import React, {Component} from 'react';
import { Field, reduxForm, SubmissionError} from 'redux-form';
import {FormLabel} from '../../component/FormLabel';

import 'object-assign';

const submit = ({corporateName = '', userName='', userNameKana='', mailAddress='', tel='', content='' }, submitAction) => {
    let error = {};
    let isError = false;

    if(corporateName.trim() === '') {
        error.corporateName = 'Required';
        isError = true;
    }
    if(userName.trim() === '') {
        error.userName = 'Required';
        isError = true;
    }
    if(userNameKana.trim() === '') {
        error.userNameKana = 'Required';
        isError = true;
    }

    if (content.trim() === '') {
        error.content = 'Required';
        isError = true;
    }

    if (userName.length > 20) {
        error.userName = 'Toolong';
        isError = true;
    }

    if (userNameKana.length > 20) {
        error.userNameKana = 'Toolong';
        isError = true;
    }

    if (mailAddress.trim() === '') {
        error.mailAddress = 'Required';
        isError = true;
    }
    if (isError) {
        console.log(isError, 'Errorです');
        throw new SubmissionError(error);

    } else {
        console.log(isError, 'Errorはないです');
        console.log(this.props);
        submitAction({corporateName, userName, userNameKana, mailAddress, tel, content});
    }

};



const renderField = ({type, label, input, meta: { touched, error}}) => (
<div className='input-row'>
    <label>{label}</label>
    <input {...input} type={type} className='field' />
    {touched && error && <span>{error}</span>}
</div>
);

const ContactFormFunc = ({ handleSubmit, submitAction,  pristine, submitting}) => (
<form onSubmit={handleSubmit((fields) => submit(fields, submitAction))} id='form1' className='mLabForm'>
    <div className='form-row'>
    <FormLabel labelName={'corporateName'} fieldName={'企業名'} isRequire={true} />
    <Field className='field' component={renderField} type='text' placeholder='' name='corporateName' id='corporateName' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'userName'} fieldName={'氏名'} isRequire={true} />
    <Field className='field' component={renderField} type='text' placeholder='森田けんじ' name='userName' id='userName' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'userNameKana'} fieldName={'フリガナ'} isRequire={true} />
    <Field className='field' component={renderField} type='input' placeholder='モリタケンジ' name='userNameKana' id='userNameKana' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'mailAddress'} fieldName={'メールアドレス'} isRequire={true} />
    <Field className='field' component={renderField} type='email' placeholder='abcdef@mlab.com' name='mailAddress' id='mailAddress' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'tel'} fieldName={'電話番号'} isRequire={false} />
    <Field className='field' component={renderField} type='number' placeholder='0800000000' name='tel' id='tel' />
    </div>
    <div className='form-row'>
    <FormLabel labelName={'content'} fieldName={'お問い合わせ内容'} isRequire={true} />
    <Field className='field' component='textarea' type='text' placeholder='こちらにお問い合わせ内容をご記入ください。' name='content' id='content' />
    </div>
    <div className='submitBtn u-mt30 u-mb80'><button type='submit' disabled={submitting | pristine }>お問い合わせする</button></div>
</form>
)

const ContactForm = reduxForm({
    form: 'contact'
})(ContactFormFunc);

export default ContactForm;