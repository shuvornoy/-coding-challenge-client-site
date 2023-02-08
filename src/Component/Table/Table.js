import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Table = ({ userData }) => {
  const [update, setUpdate] = useState("");
  if(update){
    fetch(`https://coding-challenge-server-lovat.vercel.app/update/${update}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  
  return (

      <div className="bg-base-100 shadow-xl my-2 xl:w-[700px] w-full mx-auto">
        <div
          className="flex justify-between align-middle items-center p-2 
        text-[20px]"
        >
          <div className="font-semibold">{userData.name}</div>
          <div className="">{userData.selecet}</div>
          <div className="">
            <Link to={`/update/${userData._id}`}>
              <button onClick={() => setUpdate(userData._id)} className="btn btn-error">
                Edit
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Table;