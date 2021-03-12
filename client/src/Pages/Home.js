import React, { Component } from 'react'
import axios from 'axios'
import{
  getFromStorage,
  setInStorage,
} from '../Utils/storage'

class Home extends Component {
  constructor (props){
    super(props)
    this.state={
      isLoading:true,
      token:'',
      signupError:'',
      signInError:'',
      signInEmail:'',
      signInPassword:'',
      signUpFirstName:'',
      signUpLastName:'',
      signUpEmail:'',
      signUpPassword:'',
      
    }
    this.onTextboxChangeSignInEmail=this.onTextboxChangeSignInEmail.bind(this)
    this.onTextboxChangeSignInPassword=this.onTextboxChangeSignInPassword.bind(this)
    this.onTextboxChangeSignupEmail=this.onTextboxChangeSignupEmail.bind(this)
    this.onTextboxChangeSignUpPassword=this.onTextboxChangeSignUpPassword.bind(this)
    this.onTextboxChangeSignUpFirstName=this.onTextboxChangeSignUpFirstName.bind(this)
    this.onTextboxChangeSignUpLastName=this.onTextboxChangeSignUpLastName.bind(this)
    this.onSignIn=this.onSignIn.bind(this)
    this.onSignUp=this.onSignUp.bind(this)
  }
  componentDidMount(){
    const obj=getFromStorage('the_main_app');
if(obj && obj.token){
  const {token}=obj;
  fetch('/account/verify?token='+token)
  .then(res=>res.json())
  .then(json=>{
    if(json.success){
      this.setState({
        token,
        isLoading:false
      })
    }else {
      this.setState({
        isLoading:false,
      })
    }
  })

  }else{
    this.setState({
      isLoading:false,
    })
  }
}
onTextboxChangeSignInEmail(event){
  this.setState({
    signInEmail:event.target.value
  })
}
onTextboxChangeSignInPassword(event){
  this.setState({
    signInPassword:event.target.value
  })
}
onTextboxChangeSignupEmail(event){
  this.setState({
    signUpEmail:event.target.value
  })
}
onTextboxChangeSignUpPassword(event){
  this.setState({
    signUpPassword:event.target.value
    
  })
}
onTextboxChangeSignUpFirstName(event){
  this.setState({
    signUpFirstName:event.target.value
  })
}
onTextboxChangeSignUpLastName(event){
  this.setState({
    signUpLastName:event.target.value
  })
}
onSignUp(){
const{
  signUpFirstName,
  signUpLastName,
  signUpEmail,
  signUpPassword,
}=this.state;
this.setState({
  isLoading:true,
})

  fetch("/account/signup",{
    method:'POST',
    headers:{
'Content-Type':'application/json'
    },
    body:JSON.stringify({
    firstName:signUpFirstName,
    lastName:signUpLastName,
    email:signUpEmail,
    password:signUpPassword,
    }),
  })
.then(res=>res.json())
.then(json=>{
  if(json.success){
    this.setState({
      signUpError:json.message,
      isLoading:false,
      signUpError:'',
      signUpPassword:'',
      signUpFirstName:'',
      signUpLastName:'',
    })
  }else{
    this.setState({
      signUpError:json.message,
      isLoading:false
    })
  }
})
}
onSignIn(){
  const{
    signInEmail,
    signInPassword,
  }=this.state;
  this.setState({
    isLoading:true,
  })
  
  fetch("/account/signin",{
    method:'POST',
    headers:{
'Content-Type':'application/json'
    },
    body:JSON.stringify({
    email: signInEmail,
    password: signInPassword,
    }),
  })
.then(res=>res.json())
.then(json=>{
  if(json.success){
    setInStorage('the_main_app',{ token:json.token});
    this.setState({
      signInError:json.message,
      isLoading:false,
    signInPassword:'',
    signUpEmail:'',
    token:json.token,
    
    })
  }else{
    this.setState({
      signUpError:json.message,
      isLoading:false
    })
  }
})
}
  render(){
    const{
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpError,
    }=this.state;
    if(isLoading){
      return(<div><p>ON the way</p></div>)
    }
    if(!token){
      return (
      <div>
        <div>
          {
            (signInError)?(
              <h1>{signInError}</h1>
            ):(null)
          }
          <h1>Sign In</h1>
          <input type="email" placeholder="Enter your email" value={signInEmail}
          onChange={this.onTextboxChangeSignInEmail}/><br/>
          <input type="password" placeholder="Enter your password" value={signInPassword}
          onChange={this.onTextboxChangeSignInPassword}/><br/>
          <button onClick={this.onSignIn}>Sign In</button>
          {
            (signUpError)?(
              <h1>{signUpError}</h1>
            ):(null)
          }
          <h1>Sign Up</h1>
          <input type="text" placeholder="First Name" value={signUpFirstName}
          onChange={this.onTextboxChangeSignUpFirstName}/><br/>
          <input type="text" placeholder="Last Name" value={signUpLastName}
          onChange={this.onTextboxChangeSignUpLastName}/><br/>
          <input type="email" placeholder="Enter your email" value={signUpEmail}
          onChange={this.onTextboxChangeSignupEmail}/><br/>
          <input type="password" placeholder="Enter your password" value={signUpPassword}
          onChange={this.onTextboxChangeSignUpPassword}/><br/>
          <button onClick={this.onSignUp}>Create My account</button>



          
        </div>
      </div>
        )
  }
  return (
    <div>
      <h1>Account</h1>
    </div>
  )
}
}

export default Home



