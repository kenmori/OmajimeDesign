import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {FormLabel} from './FormLabel'
import {request} from '.action/request'

import 'object-assign'

let OmajimeForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit(request)} id='form1'>
        <div className='u-mt34'>
        <FormLabel labelName={'corporateName'} fieldName={'企業名'} isRequire={true} />
        <Field className='field u-mt15'component='input' type='text' name='corporateName' id='corporateName' />
        </div>
        <div className='u-mt15'>
        <FormLabel labelName={'userName'} fieldName={'氏名'} isRequire={true} />
        <Field className='field u-mt15' component='input' placeholder='森田賢二'  type='text' name='userName' id='userName' />
        </div>
        <div className='u-mt15'>
        <FormLabel labelName={'userNameKana'} fieldName={'フリガナ'} isRequire={true} />
        <Field className='field u-mt15' component='input' placeholder='モリタ ケンジ'  type='text' name='userNameKana' id='userNameKana' />
        </div>
        <div className='u-mt15'>
        <FormLabel labelName={'mailAddress'} fieldName={'メールアドレス'} isRequire={true} />
        <Field className='field u-mt15' component='input' placeholder='abcdef@omaijme.com'  type='email' name='mailAddress' id='mailAddress' />
        </div>
        <div className='u-mt15'>
        <FormLabel labelName={'tel'} fieldName={'電話番号'} isRequire={true} />
        <Field className='field u-mt15' component='input' placeholder='03-0000-0000'  type='number' name='tel' id='tel' />
        </div>
        <div className='u-mt15'>
        <FormLabel labelName={'content'} fieldName={'お問い合わせ内容'} isRequire={true} />
        <Field className='field u-mt15' component='input' placeholder='こちらにお問い合わせ内容をご記入ください。'  type='text' name='content' id='content' />
        </div>
        <div className='toFormBtn'><button  type='submit'>お問い合わせする</button></div>
        </form>
    )
}

OmajimeForm = reduxForm({
    form: 'contact'
})(OmajimeForm);

export default OmajimeForm;





