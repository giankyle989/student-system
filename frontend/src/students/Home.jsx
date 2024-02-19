import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="h-screen bg-neutral-900 text-white">
      <Navbar />
      <div className="mt-4 grid grid-cols-1 gap-y-4">
        <h1 className="text-3xl text-center">Students List</h1>

        <section className="overflow-auto">
          <table className="mx-auto border border-white ">
            <th className="border border-white p-2">Name</th>
            <th className="border border-white p-2">Email</th>
            <th className="border border-white p-2">Phone Number</th>
            <th className="border border-white p-2">Action</th>
            <tr>
              <td className="border border-white p-2">Gian Kyle Laguerta</td>
              <td className="border border-white p-2">sXpKb@example.com</td>
              <td className="border border-white p-2">123456789</td>
              <td className="flex gap-x-2 p-2">
                <button>Edit</button>
                <span>|</span>
                <button className="">Delete</button>
              </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Home;
