import React, { Component } from 'react';

import { FormInput } from '../formFields';
import { reduxForm, Field } from 'redux-form';

class SignInForm extends Component {
    render() {
        const { className } =this.props;
        return (
            <form className={`${className} sign-in-form`}>
                  <Field className='sign-in-form__email' component={FormInput}/>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;