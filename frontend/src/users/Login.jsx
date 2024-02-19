import React from "react";

const Login = () => {
  return (
    <div className="h-screen bg-neutral-900 text-white  flex flex-col justify-center items-center">
        <h1 className="text-3xl">Login</h1>
      <section className="p-4 grid grid-cols-1 gap-y-4">
        <input
          className="p-2 bg-neutral-900 border border-white rounded-md outline-none"
          type="text"
          placeholder="Email"
        />
        <input
          className="p-2 bg-neutral-900 border border-white rounded-md outline-none"
          type="password"
          placeholder="Password"
        />
        <a className="text-xs text-slate-300 text-center " href="">
          Forgot your password?
        </a>
        <button className="p-2 bg-neutral-700 rounded-md active:bg-neutral-800">
          Login
        </button>
        <a className="text-xs text-slate-300 text-center " href="/register">Don't have an account? Register</a>
      </section>
    </div>
  );
};

export default Login;
