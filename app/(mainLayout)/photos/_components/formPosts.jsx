"use client";
import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { createUser } from "../actions";
import { useFormStatus } from 'react-dom';
function FormPosts() {
  const router = useRouter();
  const { pending } = useFormStatus();

  return (
    <div>
      <center>
        <h1>Register a new account</h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "1234",
            avatar: "https://picsum.photos/800",
          }}
          onSubmit={async (values) => {
           await createUser(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form action="https://api.escuelajs.co/api/v1/users">
              <Field type="text" name="name" placeholder="Enter your name" />
              <ErrorMessage name="title" component="div" />
              <Field type="email" name="email" placeholder="Enter your email" />
              <ErrorMessage name="body" component="div" />
              <button disabled={pending}>{pending ? 'Loading...' : 'Submit'}</button>
            </Form>
          )}
        </Formik>
      </center>
    </div>
  );
}
export default FormPosts;
