import React, { useEffect } from 'react'
import { useState } from 'react'
import './Login.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import {Link,useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Alert} from 'react-bootstrap'
import { userLogin } from '../../../REDUX/Actions/userActions'
function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const userlogin = useSelector(state => state.userLogin)
  console.log(userLogin);
  const {loading,error,userInfo} = userlogin;
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handlesubmit = (e) =>{
    e.preventDefault()
    dispatch(userLogin(email,password))
  }
  
  useEffect(()=>{
    let userinfo = localStorage.getItem("userInfo")
    if(userinfo){
      navigate("/")
    }
    console.log("HEHHEH");
    if(userInfo){
        navigate("/")
    }
},[userInfo])
console.log(userInfo);
  return (

      <>
      <div className='baground ' style={{ display: 'flex', justifyContent: 'center',backgroundColor:" rgb(28, 122, 199)" }}>
        {/* <div className='logo'>
          <img className='logoimg ' src="./39d04bd0d9930eda73f40b06c74e78f0-removebg-preview.png" alt="" />
        </div> */}
        <div className='form' style={{height:200}}>

          <div className='formcontainer' style={{height:450}}>

          <form action="">
        <p className='login'>Login</p>
     
      {
        error ? <Alert variant='danger'>
        <strong  style={{color:"red"}}>{error} </strong>
       </Alert> :""
      }

      {
        loading ? <h2>{error}</h2> : ''
      }
          <input onChange={(e)=>{
            setEmail(e.target.value)
          }} className='input1' type="email" name="email" id="" placeholder='Email' style={{height:50}} />
          <br />
          <input onChange={(e)=>{
            setPassword(e.target.value)
          }}  className='input' type="password" name='password' placeholder='Password...' style={{height:50}}  />
          <p className='fp'>Forgot Passowrd ...?</p>
          <div className='buttons'>
            
            <button onClick={handlesubmit} className='button1' style={{backgroundColor:'green',height:40,width:100}}>Login</button>
            <Link to={'/signup'}>
            <button style={{backgroundColor:'black',height:40,width:100}} className='button2 mt-2'>SignUp</button>
            </Link>
          </div>
        </form>
          </div>

        </div>
      </div>
    </>


   
  //   <>
  //   <div className='baground '>
  //     <div className='logo'>
  //       <img className='logoimg ' src="./39d04bd0d9930eda73f40b06c74e78f0-removebg-preview.png" alt="" />
  //     </div>
  //     <div className='form'>
      
  //     <div  className='formcontainer'>
        
  //      <form action="">
  //       <p className='login'>Login</p>
     
  //     {
  //       error ? <Alert variant='danger'>
  //       <strong  style={{color:"red"}}>{error} </strong>
  //      </Alert> :""
  //     }

  //     {
  //       loading ? <h2>{error}</h2> : ''
  //     }
  //         <input onChange={(e)=>{
  //           setEmail(e.target.value)
  //         }} className='input1' type="email" name="email" id="" placeholder='Email' />
  //         <br />
  //         <input onChange={(e)=>{
  //           setPassword(e.target.value)
  //         }}  className='input' type="password" name='password' placeholder='Password...' />
  //         <p className='fp'>Forgot Passowrd ...?</p>
  //         <div className='buttons'>
            
  //           <button onClick={handlesubmit} className='button1'>Submit</button>
  //           <Link to={'/signup'}>
  //           <button  className='button2 mt-2'>SignUp</button>
  //           </Link>
  //         </div>
  //       </form>
  //      </div>
      
  //     </div>
  //   </div>
  // </>
  )
}

export default Login
