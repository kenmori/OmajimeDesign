import React from 'react'
import {Field, reduxForm } from 'redux-form'

let SignInForm = ({handleSubmit, handleSignIn}) => {
    return (<form onSubmit={handleSubmit(handleSignIn)}>
            <Field name="firstName" type="text" component="input" placeholder="your filst Name" />
            <Field name="lastName" type="text" component="input" placeholder="your filst Name"/ >
                <button type="submit" action="submit">submit</button>
        </form>)
}

export default reduxForm({
    form: 'signIn,'
})(SignInForm);
