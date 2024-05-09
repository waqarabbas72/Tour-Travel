import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="w-11/12 sm:w-2/3">
      <form action="" className="relative flex items-center justify-between">
        <input
          type="text"
          placeholder="Places to go, Things to do..."
          className="py-3 pl-9 pr-20 rounded-full mb-6 w-full shadow-2xl"
          required
        />
        <FaSearch className="absolute left-4 top-4 text-gray-400" />
        <input
          type="submit"
          value="Search"
          className="bg-green-600 px-3 py-2 rounded-full absolute right-1 top-1 text-white cursor-pointer"
        />
      </form>
    </div>
  );
};

export default SearchBar;
