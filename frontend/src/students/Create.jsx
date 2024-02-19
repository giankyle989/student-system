import React from "react";
import Navbar from "../components/Navbar";

const Create = () => {
  return (
    <div className="h-screen bg-neutral-900 text-white">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center mt-4">Create New Data</h1>
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
            type="text"
            placeholder="Phone Number"
          />
          <button className="p-2 bg-neutral-700 rounded-md active:bg-neutral-800">
            Create
          </button>
        </section>
      </div>
    </div>
  );
};

export default Create;
