import React, { useState} from 'react';
import StaffNav from './StaffNav'
import axios from 'axios'
 const AddStudent =(props)=>  {
    let [first_name, setFirstname] = useState(''),
        [last_name, setLastname] = useState(''),
        [password, setPassword] = useState('');

    let handleNewStudent = (e)=> {
        e.preventDefault()
        axios.post('/api/student' , {first_name,last_name,password})
     
        .then((res)=> {
            res.sendStatus(200)})
            .catch((err)=>console.log(err))
            setFirstname('')
            setLastname('')
            setPassword('')
            alert(`Student has been added`)   
    }   
        
    return (
        <div>
                <StaffNav/>
            <div className='login-main'>
            <h1 className='title'>Add Student</h1>
                <form className='login-form'>
                   <input
                   value={first_name}
                   placeholder='First Name'
                   name="first_name"
                   onChange={e => setFirstname(e.target.value)}
                   />
                   <input
                   value={last_name}
                   placeholder='Last Name'
                   name='last_name'
                   onChange={e => setLastname(e.target.value)}
                   />
                  
                   <input
                   value={password}
                   type='password'
                   placeholder='Password'
                   name='password'
                   onChange={e => setPassword(e.target.value)}
                   />
                   
                   <button onClick={handleNewStudent}>ADD</button>
                </form>
            </div>
        </div>
    )

}
export default AddStudent;