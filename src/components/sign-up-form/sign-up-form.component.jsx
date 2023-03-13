import { useState } from "react";

const defaultFormFields = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { userName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
 
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with Email</h1>
      <form onSubmit={() => {}}>
        <label>Username</label>
        <input 
          type="text" 
          required 
          onChange={handleChange} 
          name="userName" 
          value={userName}/>

        <label>Email</label>
        <input 
          type="email"
          required
          onChange={handleChange}
          name="email" 
          value={email}/>

        <label>Password</label>
        <input 
          type="password" 
          required 
          onChange={handleChange} 
          name="password" 
          value={password}/>

        <label>Confirm Password</label>
        <input 
          type="password" 
          required 
          onChange={handleChange} 
          name="confirmPassword" 
          value={confirmPassword}/>

        <button type="submit">Sign Up</button>
      </form>

    </div>
  )
  ;
};

export default SignUpForm;