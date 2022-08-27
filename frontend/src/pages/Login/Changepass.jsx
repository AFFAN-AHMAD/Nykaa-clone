import axios from 'axios'
import React from 'react'

const Changepass = () => {
    const [data,setData]= React.useState({})

    const handleChange=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }
   
 const handleSubmit=(e)=>{
    e.preventDefault()
    if(data.New_password===data.confirm_password){
      
        axios.post("http://localhost:8080/updated",data)
        .then((res)=>{ console.log(res.data.verify,"brgy")
            if(res.data.verify){
              return  alert("passowrd changed succesfully")
            }
        }).catch((err)=>alert("error"))
    }else{
        alert("Password does not match")
    }
   
 }
  return (
    <form onSubmit={handleSubmit}>
        <input placeholder=' Email Address' type="email" name='email'  onChange={handleChange}></input><br></br>
        <input placeholder='New Password' type="text" name="New_password" onChange={handleChange}></input>
        <br></br>
<input placeholder='Confirm Passoword' type="text" name="confirm_password" onChange={handleChange}></input>
<br></br>
<input style={{backgroundColor:"black",border:"none",color:"white"}} type="submit" value='Update Password'></input>
    </form>
  )
}

export default Changepass