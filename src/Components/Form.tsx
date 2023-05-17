import { useState } from 'react';
import TextField from '@mui/material/TextField';
import classes from './Form.module.css'

import Button from '@mui/material/Button';


function Form(props:any) {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [phone,setphone]=useState('');
  const namehandler=(event:any)=>{
      setname(event.target.value)
  }
  const emailhandler=(event:any)=>{
      setemail(event.target.value)
  }
  const phonehandler=(event:any)=>{
      setphone(event.target.value)
  }
  const submithandler=()=>{
      if(email.length===0&&phone.length===0&&name.length===0){
          return alert('Please enter Valid details')
      }
      if(!email.includes('@')){
        return alert('Please enter a valid email')
      }
      if(name.length===0){
        return alert('Enter valid Name ')
      }
      if(phone.length<10){
        return alert('Enter a valid Phone Number')
      }
      localStorage.setItem("name",name)
      localStorage.setItem("email",email)
      localStorage.setItem("password",phone)
      props.handlesubmit();
  }
  return (
    <div className={classes.mainbody}>
      <TextField onChange={namehandler}  style={{marginBottom:'0.8rem'}} className={classes.forms} id="outlined-basic" label="Name" variant="outlined" />
      <TextField onChange={phonehandler} type="number" style={{marginBottom:'0.8rem'}} className={classes.forms} id="outlined-basic" label="Phone" variant="outlined" />
      <TextField onChange={emailhandler}  style={{marginBottom:'0.8rem'}} className={classes.forms} id="outlined-basic" label="Email" variant="outlined" />
       <Button  variant="contained" onClick={submithandler}>Submit</Button>
    </div>
  )
}

export default Form