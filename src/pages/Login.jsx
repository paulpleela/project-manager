import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const credentialResponseDecoded = jwtDecode(
          credentialResponse.credential
        );
        console.log(credentialResponseDecoded);
        navigate("/project/1");
      }}
      onError={() => {
        console.log("login error")
      }}
      theme="outline"
      width="220"
      locale="en_US"
    />
  );
}
