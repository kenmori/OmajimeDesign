import React from 'react';
import { Field, reduxForm} from 'redux-form';
import {FormLabel} from './FormLabel';
import {submitForm} from './../actions/request'
import 'object-assign';

function submit(value, dispatch){
    dispatch(submitForm(value));
}
let Form  = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
      <form onSubmit={handleSubmit(submit)} id='form1' className='mLabForm'>
        <div className='form-row'>
            <FormLabel labelName={'corporateName'} fieldName={'企業名'} isRequire={true} />
            <Field className='field' component='input' type='text' placeholder='' name='corporateName' id='corporateName' />
        </div>
        <div className='form-row'>
            <FormLabel labelName={'userName'} fieldName={'氏名'} isRequire={true} />
            <Field className='field' component='input' type='text' placeholder='森田けんじ' name='userName' id='userName' />
        </div>
        <div className='form-row'>
            <FormLabel labelName={'userNameKana'} fieldName={'フリガナ'} isRequire={true} />
            <Field className='field' component='input' type='input' placeholder='モリタケンジ' name='userNameKana' id='userNameKana' />
        </div>
        <div className='form-row'>
            <FormLabel labelName={'mailAddress'} fieldName={'メールアドレス'} isRequire={true} />
            <Field className='field' component='input' type='email' placeholder='abcdef@mlab.com' name='mailAddress' id='mailAddress' />
        </div>
        <div className='form-row'>
            <FormLabel labelName={'tel'} fieldName={'電話番号'} isRequire={false} />
            <Field className='field' component='input' type='number' placeholder='0800000000' name='tel' id='tel' />
        </div>
        <div className='form-row'>
            <FormLabel labelName={'content'} fieldName={'お問い合わせ内容'} isRequire={true} />
            <Field className='field' component='textarea' type='text' placeholder='こちらにお問い合わせ内容をご記入ください。' name='content' id='content' />
        </div>
        <div className='submitBtn u-mt30 u-mb80'><button type='submit' disabled={submitting | pristine }>お問い合わせする</button></div>
        </form>
    )
}

Form = reduxForm({
    form: 'contact'
})(Form);

export default Form;