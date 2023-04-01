import { useState,useEffect  } from 'react';
import axios from 'axios';
import API from "./API";
function SearchBox({setData}) {

  
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");


  function SearchForPlayer(e) {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page
   
    API.getPlayer(query)
      .then(response => {
        setData(response.data);
        setStatus("")
      })
      .catch(error => {
        console.log(error);
        setStatus("No Player Found")
      });
  }


  return (
    <div className="grid place-items-center h-1/5">
      <div className='w-2/6'>
        <form className='mt-10'>   
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onChange={e => setQuery(e.target.value)} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Search " />
                <button onClick={SearchForPlayer} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
      </div>
      <div className=" flex h-14 w-2/6 bg-slate-400 justify-center items-center overflow-y-scroll rounded-lg">
            <p>{status}</p>
      </div>
    </div>

  );
}

export default SearchBox;