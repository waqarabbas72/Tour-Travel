import React from "react";
import { GoHome, GoTasklist } from "react-icons/go";
import { MdDinnerDining, MdKey } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import SearchBar from "./SearchBar";
import useFetch from "../hooks/useFetch";

const Hero = () => {
  const [data] = useFetch(
    `https://booking-com.p.rapidapi.com/v1/hotels/reviews`
  );
  console.log("data", data);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
            Where To?
          </h1>
          <div className="mt-8">
            <ul className="flex justify-between gap-6 text-xl">
              <li className="cursor-pointer flex items-center gap-2 text-gray-600 font-medium">
                <GoHome />
                Search All
              </li>
              <li className="cursor-pointer flex items-center gap-2 text-gray-600 font-medium">
                <FaBed />
                Hotels
              </li>
              <li className="cursor-pointer flex items-center gap-2 text-gray-600 font-medium">
                <GoTasklist />
                Things to Do
              </li>
              <li className="cursor-pointer flex items-center gap-2 text-gray-600 font-medium">
                <MdDinnerDining />
                Restaurants
              </li>
              <li className="cursor-pointer flex items-center gap-2 text-gray-600 font-medium">
                <MdKey />
                Vacation Rentals
              </li>
            </ul>
          </div>
        </div>
        <SearchBar />
        <div className="flex justify-center items-center">
          <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-indigo-700 py-2 sm:py-4 text-sm">
            Get Started
          </button>
          <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-transparent transition duration-150 ease-in-out hover:border-indigo-600 lg:text-xl lg:font-bold  hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-4 sm:px-10 py-2 sm:py-4 text-sm">
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
