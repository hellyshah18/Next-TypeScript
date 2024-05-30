import { IEducation } from '@/interface/IEducation';
import { Field, Form, Formik, FieldArray } from 'formik';
import React from 'react';

export default function EducationForm() {
    const initialValues: IEducation = {
        sname: '',
        contactnumber: '',
        education: [{ instituteName: '', startyear: 0, endyear: 0 }]
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values: IEducation) => {
                    console.log(values);
                }}
            >
                {({ values }) => (
                    <Form>
                        <div>
                            <label>Name</label>
                            <Field type='text' name="sname" />
                        </div>
                        <div>
                            <label>Contact Number</label>
                            <Field type='text' name="contactnumber" />
                        </div>
                        <FieldArray name="education">
                            {({ insert, remove, push }) => (
                                <div>
                                    {values.education.length > 0 &&
                                        values.education.map((edu, index) => (
                                            <div key={index}>
                                                <div>
                                                    <label>Institute Name</label>
                                                    <Field name={`education.${index}.instituteName`} type="text" />
                                                </div>
                                                <div>
                                                    <label>Start Year</label>
                                                    <Field name={`education.${index}.startyear`} type="number" />
                                                </div>
                                                <div>
                                                    <label>End Year</label>
                                                    <Field name={`education.${index}.endyear`} type="number" />
                                                </div>
                                                <div>
                                                    <button
                                                        type="button"
                                                        onClick={() =>{
                                                            if(values.education.length>1){

                                                                remove(index)}
                                                            }

                                                        } 
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    <button
                                        type="button"
                                        onClick={() => push({ instituteName: '', startyear: 0, endyear: 0 })}
                                    >
                                        Add Education
                                    </button>
                                </div>
                            )}


                            
                        </FieldArray>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
