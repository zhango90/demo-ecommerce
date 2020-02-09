import React, { useState } from 'react';
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions'
//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = (props) => {

  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = event => {
    event.preventDefault();
    const { signUpStart } = props
    signUpStart(credentials)
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...credentials, [name]: value });
  };
  const { displayName, email, password, confirmPassword } = credentials;
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userInfo) => dispatch(signUpStart(userInfo))
})

export default connect(null, mapDispatchToProps)(SignUp);
