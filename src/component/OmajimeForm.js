import React from 'react';
import {Form, Text } from 'react-form';
import {Submit} from './Button';
export const Omajime = () => {
    return (
        <Form>{
        formApi => (
          <form onSubmit={formApi.submitForm} id='form1'>
                <div>
                    <div><label htmlFor='corporateName' /><span>必須</span></div>
                    <Text field='corporateName' id='corporateName' />
                </div>
                <Submit />
            </form>
        )}
        </Form>
    )
}