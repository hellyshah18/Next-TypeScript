import { IRegistration } from '@/interface/IRegistration'
import React, { useState } from 'react'

export const registration = () => {
    const [form, setForm]= useState<IRegistration>({
        firstName:"",
        lastName:'',
        isAccept:false

    })
    const handleChange=(e:any)=>{
        if(e.target.type=='checkbox'){
            setForm({...form,[e.target.name]:e.target.checked})
        }
        else{
        setForm({...form,[e.target.name]:e.target.value})
        }
    }
    const handleSave=(e:any)=>{
        e.preventDefault()
        console.log(form)
    }
  return (
    <div>
        <form onSubmit={handleSave}>
            <input placeholder='first name' name='firstName' onChange={handleChange}/>
            <input placeholder='last name' name='lastName' onChange={handleChange}/>
            <input placeholder='accept terms' type='checkbox' onChange={handleChange} name='isAccept'/>
            <input type='submit' value='Submit'/>
        </form>
    </div>
  )
}

export default registration
