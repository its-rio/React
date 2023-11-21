"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");

  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setMainTask([...mainTask, { title, desc }]);

    setTitle("");
    setdesc("");
    // console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="text-lg font-medium mb-4">{t.title}</h5>
            <h6 className="">{t.desc}</h6>
          </div>
          <button onClick={()=>{deleteHandler(i)}} className="bg-red-600 text-white rounded-sm p-1 font-bold">Delete</button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Rio's TODO List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Title here...."
          className="text-xl border-zinc-800 border-4 m-5 px-4 py-1"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter description here...."
          className="text-xl border-zinc-800 border-4 m-5 px-4 py-1"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />

        <button className="bg-blue-600 text-black text-bold rounded-xl p-2.5 ">
          Add TODO
        </button>

        <hr className="" />
        <div className="bg-slate-300 p-4 m-3">
          <ul>{renderTask}</ul>
        </div>
      </form>
    </>
  );
};

export default page;
