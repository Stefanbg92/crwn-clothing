import React from 'react';

import './sign-in.scss';

import FormInput from '../../components/form-input/form-input.component';

import CustomButton from "../custom-button/custom-buttom.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''

        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password:''});
        } catch (error){
            console.log(error);
        }

        this.setState({ email:'', password:''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
            <h2>I already have account</h2>
            <span>Sign in with your email or password</span>
            <form onSubmit={this.handleSubmit}>
            <FormInput name='email' type='email' label='email' value={this.state.email} handleChange={this.handleChange} required />
            <FormInput name='password' type='password' label= 'password' value={this.state.password} handleChange={this.handleChange} required />
            <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
            </div>
            </form>

            </div>
        )
    }
}

export default SignIn;