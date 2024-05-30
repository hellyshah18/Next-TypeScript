import { ILogin } from '@/interface/ILogin'
import { Field, Form, Formik } from 'formik'
import React  from 'react'

export default function loginusingformik() {
    const initialValues:ILogin={
        email:'',
        password:''
    }
  return (
    <div>
        <Formik
        initialValues={initialValues}
        onSubmit={(values:ILogin)=>{
            console.log({values})
        }}
        >
            <Form>
                <label>Email</label>
                <Field type='email' name="email" />
                <label>Password</label>
                <Field type='text' name="password"/>
                <Field type='submit' name='submit'></Field>
            </Form>

        </Formik>
    </div>
  )
}
