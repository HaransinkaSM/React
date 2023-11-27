import './reg.css';
import axios from 'axios';
import {useState} from 'react';
function Regs()
{
    const[userdetail,setUserdetail]=useState({
        email:'',
        password:''
  })
      function handleInput(event)
      {
        setUserdetail({...userdetail,[event.target.name]: event.target.value})
      }
     
      
      const post=(event)=>{
            event.preventDefault()
        axios.post("http://localhost:3001/users",userdetail).
        then(res=> console.log(res)).
        catch(err=>console.log(err))
    
        
      }
    return(
       
                <div className="outbox">
                    <div className="boxin">
                <div className="box">
                    <div>
                        <form onSumbit={post}>
                            <h1>Create an account</h1>
                            <input className="First" type="text" placeholder="Firstname"></input><br></br><br></br>
                            <input className="Last" type="text" placeholder="Lastname"></input><br></br><br></br>
                            <input className="email" type="text" placeholder="Email" name="email" onChange={handleInput} ></input><br></br><br></br>
                            <input className="pass" type="password" placeholder="Password" name='password' onChange={handleInput}></input><br></br><br></br><br></br>
                            <button type='submit' className="but"><h3 className="regest"><a href="http://localhost:3005/" Style="text-decoration: none">Register</a></h3></button>
                        </form>

                        <br></br>
                        <h5>Already a member?<b1><a href="http://localhost:3004/" Style="text-decoration: none">Log In</a></b1></h5>
                    </div>
                </div>
                <div className="bot">
                    </div>
                    </div>
                </div>
           
    )
}
export default Regs;