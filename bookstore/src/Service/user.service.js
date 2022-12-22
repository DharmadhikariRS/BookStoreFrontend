// import React, { useState } from "react";
import axios from "axios";

export const SignUpAPI=(SignUpObject)=> {
 const Response=  axios.post("http://localhost:3000/api/v1/users",SignUpObject)
 console.log( Response);
}
export const SignInAPI=(SignInObject)=>{
    axios.post("http://localhost:3000/api/v1/users/login",SignInObject).then((Response)=>{console.log("API: ",Response.data);localStorage.setItem('bookStoreToken',Response.data.data)})
   }