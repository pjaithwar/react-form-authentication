import React, { useState } from 'react';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import swal from 'sweetalert'

const Login =()=>{
    // value={username} onChange={(e)=>{setusername(e.target.value)}}
    const[username,setusername] = useState("")
    const [password,setpassword] = useState("")

    const validate=(event)=>{

        event.preventDefault();
        if(username==="Palash" && password==="12345"){
            swal("Login Successfull",'Congratulations you have successfully logged in','success')
        }
        else{
            swal("Invalid Login/Password","Please enter valid Username or Password",'error')
        }
    }

    return(
        <div className="row justify-content-center" >
            <div className="col-md-4" style={{padding:20}}>
            <h1 style={{color:"white"}}>LOGIN</h1>
            <form onSubmit={validate} >
                <input type="text" 
                    placeholder="Username" 
                    className="form-control" 
                    value={username} 
                    onChange={(e)=>{setusername(e.target.value)}} 
                    
                />   
                <input 
                    type="password" 
                    placeholder="Password" 
                    className="form-control"  
                    value={password} 
                    onChange={(e)=>{setpassword(e.target.value)}}
                    isSecure
                /> 
                <input 
                    type="submit" 
                    value="Login" 
                    className="btn btn-info" 
                    
                />    
        </form>
            </div>
            
        </div>
    )
}

export default Login;