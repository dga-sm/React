import {useState} from 'react'

function Form() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: false
      })
    
      console.log(formData)
    
      function handleChange(event){
        const {name, type, checked, value} = event.target;
        setFormData(prevFormData => {
          return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
          }
        })
      }
    
      function handleSubmit(event){
        event.preventDefault()
        console.log(formData.password === formData.confirmPassword ? "Successfully signed up" : "Passwords do not match")
        console.log(formData.newsletter === true ? "Thanks for signing up for our newsletter!" : "")
      }

  return (
    <div>
      <form className='gg' onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' value={formData.email} name='email' onChange={handleChange}/>
        <input type="password" placeholder='Password' value={formData.password} name='password' onChange={handleChange}/>
        <input type="password" placeholder='Confirm Password' value={formData.confirmPassword} name='confirmPassword' onChange={handleChange}/>
        <input type="checkbox" id='newsletter' name='newsletter' checked={formData.newsletter === true ? true : false} onChange={handleChange} />
        <label htmlFor="newsletter" onChange={handleChange}>I want to join the newsletter</label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
