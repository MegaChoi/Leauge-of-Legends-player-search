import { useState,useEffect  } from 'react';
import axios from 'axios';
import api from "./API";
function SearchBox({setData}) {

  
  const [query, setQuery] = useState("");
  // const [status, setStatus] = useState("");


  const SearchForPlayer = async(e) => {
    e.preventDefault(); // Prevents the form from submitting and refreshing the page
    try {
      // console.log(query);
      const data = await api.getPlayer(query);
      if(data != null){
        setData(data);
        // setStatus("yes player found");
      }else{
        setData({name:"NOTFOUND"});
        // setStatus("no player found");
      }
    } catch (error) {
      // console.error(error);
    }
  };


  return (
    <section>
      <div className=' container flex flex-col items-center px-6 mx-auto mt-6 space-y-0'> 
        {/* search bar */}
        <div className='border-ring-1 shadow-sm bg-gray-200 rounded-md'> 
          <form className='m-2'>
            <input onChange={e => setQuery(e.target.value)} className='outline-none mr-2 bg-gray-200'/>
            <button className=" rounded-md bg-blue-500 px-2 py-0.5 hover:bg-blue-300 " onClick={SearchForPlayer}>search</button>
          </form>
        </div>

        {/* displayer player name or no found // animation */}
        {/* <div>
          <p>{status}</p>
        </div> */}
      </div>
    </section>
  );
}

export default SearchBox;