import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material'
 

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [values, setValues] = useState({ name: "", email: "" });
  const [userName, setUserName] = useState("");
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); 
  
  const regx = {
    email:  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  }

  const hasError = () => {
   return (!regx.email.test(values.email) || values.name.length < 5 || values.name.length > 25)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(values.name)
    setShowSuccessMsg(true)
    setValues({ name: "", email: "" });
  }

  const handleChange = (event) => {
    setShowSuccessMsg(false)
    setValues({ ...values, [event.target.name] : event.target.value })
    if(hasError()){
     setErrorMsg("Por favor verifique su información nuevamente")
    }
    else {
      setErrorMsg("")
    }
  }


  return ( 
    <form onSubmit={handleSubmit} >
      <TextField  label="Nombre Completo" onKeyUp={(e) => handleChange(e)} onChange={ (e)=> handleChange(e)} id="name" value={values.name} name="name" required />
      <TextField  label="Email" onKeyUp={(e) => handleChange(e)} onChange={ (e)=> handleChange(e)} id="email" value={values.email} name="email" required/>
      <Box>
      {showSuccessMsg ? <p> Gracias {userName} te contactaremos a la brevedad via mail</p> : <p> {errorMsg} </p>}
      </Box>
      <Button disabled={(hasError())} type="submit" variant="contained">Enviar</Button>  
    </form>
    
  );
};

export default Form;
 