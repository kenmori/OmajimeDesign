//@flow
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SignInForm from '../component/SampleForm/SignInForm'


const handleSignIn = (values) =>{
        console.log(values)
    }

export class Form extends Component <{}> {
    render(){
        return (
            <SignInForm handleSignIn={handleSignIn}/>
        )
    }
}



