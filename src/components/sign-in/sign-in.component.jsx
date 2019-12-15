//core
import React from 'react'
//components
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'
//styling
import './sign-in.styles.scss'

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target
    //[key] questo permette di dinamicamente selezionare la key del object
    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput label='email' handleChange={this.handleChange} type='email' name="email" value={this.state.email} required />
          <FormInput label='password' handleChange={this.handleChange} type='password' name="password" value={this.state.password} required />
          <div className="buttons">
            <CustomButton type="submit">Submit Form</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn