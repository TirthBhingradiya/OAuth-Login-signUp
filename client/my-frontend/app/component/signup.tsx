"use client"

import { log } from "console";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface SignupValues{
    name:string;
    email:string;
    password:string;
    phoneNumber:string
}


const SignUp=()=>{
    const initialValues:SignupValues={
        name:"",
        email:"",
        password:"",
        phoneNumber:""
    };

    const validationSchema=Yup.object({
        name:Yup.string().required("Name is required"),
        email:Yup.string().required("email is required"),
        password:Yup.string().min(6,"Password must be at least 6 characters").required("password is required"),
        phoneNumber:Yup.string().matches(/^[0-9]{10}$/,"Phone Number must be 10 digits").required("phone number is required")
    })

    const handleSubmit=(values:SignupValues)=>{
       console.log("values here",values)
       alert("form submitted")
    }

    return(
        <div>
            <h2 className="">Sign Up</h2>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
                <Form className="">
                    <div>
                        <label className="">Name</label>
                        <Field type="text" name="name" className=""/>
                        <ErrorMessage name="name" component="div" className=""/>
                    </div>
                    <div>
                        <label className="">Email</label>
                        <Field type="email" name="email" className=""/>
                        <ErrorMessage name="email" component="div" className=""/>

                    </div>
                    <div>
                        <label className="">Password</label>
                        <Field type="password" name="password" className=""/>
                        <ErrorMessage name="password" component="div" className=""/>
                        </div>
                        
   <div>
            <label className="block font-medium">Phone Number</label>
            <Field
              type="text"
              name="phoneNumber"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <button type="submit">
              Submit
          </button>
                </Form>
            </Formik>
        </div>
    )
}

export default SignUp;