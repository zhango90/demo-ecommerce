import React, {useState} from 'react';
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './sign-in.styles.scss';

const SignIn = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  /* this.state = {
    email: '',
    password: ''
  }; */

  const handleSubmit = async event => {
    event.preventDefault();
    props.emailSignInStart(email, password)
  };

  const handleChange = event => {
    const { value, name } = event.target;
    name === 'password' ? setPassword(value) : setEmail(value)
  };


  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton type='button' onClick={props.googleSignInStart} isGoogleSignIn>
            Sign in with Google
            </CustomButton>
        </div>
      </form>
    </div>
  );
}
const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapDispatchToProps)(SignIn);
