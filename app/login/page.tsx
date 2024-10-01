"use client"; 

import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      <h1>Login with Twitter</h1>
      <button onClick={() => signIn("twitter")}>
        Login with X
      </button>
    </div>
  );
};

export default LoginPage;
