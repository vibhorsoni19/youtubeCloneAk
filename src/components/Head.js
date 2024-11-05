import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);


  /*
   this is how cache is going to store 
    searchCache = {
       "iphone": ["iphone11","iphone14"]
   }
       searchQuery = iphone
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    //make an api call after every key press
    // getSearchSuggestions();
    //but if the difference between two api is less than 200 ms

    return () => {
      clearTimeout(timer);
    };
    //decline the api call
  }, [searchQuery]);

  /*
   - key -i 
     render the component
     useEffect()
     start timer => make api call after 200ms

     
      
  - key -ip (p press before 200 ms)
   * destroy the component (useEffect return method)
    render the component 
    useEffect()
    start timer => make api call after 200m   

    if no one press before 200 ms
    setTimeout(200ms)-  make an api call
  */

  const getSearchSuggestions = async () => {
    try {
      console.log("api call")
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestion(json[1]);

      //i will update the cache is its not there 
      dispatch(cacheResults({
        [searchQuery]:json[1]
      }));
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 p-2 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
          alt="menu"
        ></img>

        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrA0ISwb0EblNJTmDktc5U7yfoVxPgXtYtTF2YErYhkgNBU9zYMRZ_Cab2pUrWX2Jz4E&usqp=CAU"
            alt="logo-youtube"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          ></input>
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            search
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed bg-white py-2 px-2 w-[36rem] shadow-lg rounded-2xl border border-gray-100">
            <ul>
              {suggestion.map((item, index) => (
                <li className="py-3 shadow-sm hover:bg-gray-200" key={index}>
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScUcTxLM0e260D9L98ModC48AsVnFMGK6CWA&s"
        ></img>
      </div>
    </div>
  );
};

export default Head;
