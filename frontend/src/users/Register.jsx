import React from "react";

const Register = () => {
  return (
    <div className="h-screen bg-neutral-900 text-white  flex flex-col justify-center items-center">
        <h1 className="text-3xl">Register</h1>
      <section className="p-4 grid grid-cols-1 gap-y-4">
        <input
          className="p-2 bg-neutral-900 border border-white rounded-md outline-none"
          type="text"
          placeholder="Name"
        />
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
        <button className="p-2 bg-neutral-700 rounded-md active:bg-neutral-800">
          Register
        </button>
        <a className="text-xs text-slate-300 text-center " href="/login">
          Already have an account? Login
        </a>
      </section>
    </div>
  );
};

export default Register;
