"use client"
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { listingCardData } from "../../../data/Data"; // Ensure listingCardData is typed properly
import { Link } from "react-router-dom";

interface ListingCard {
  id: number;
  imageUrl: string;
  openStatus: string;
  closeStatus: string;
  title: string;
  address: string;
  website: string;
  phone: string;
  rating: number;
}

const WishCards: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [ratings, setRatings] = useState<number[]>(Array(listingCardData.length).fill(0));

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-4">
        <div className="flex justify-between">
          <h1 className="text-2xl">Wish List</h1>
          <div className="relative w-1/5">
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleToggleDropdown}
                className="inline-flex justify-between w-full px-4 py-3 bg-white text-md text-gray-700 hover:bg-gray-50 focus:outline-none border shadow-2xl"
              >
                Categories
                <RiArrowDropDownLine className="-mr-1 ml-2 h-7 w-7" />
              </button>
            </div>

            <div
              className={`${
                dropdownOpen ? "block" : "hidden"
              } origin-top-right absolute right-0 w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-30`}
            >
              <div className="py-1">
                {["Restaurant", "Beauty & Spa", "Shopping", "Cafe", "Movie"].map(
                  (category) => (
                    <a
                      href="#"
                      key={category}
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-600 hover:text-white border-t border-black"
                    >
                      {category}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-5 gap-4 my-5">
          {listingCardData.map((listing: ListingCard, index: number) => (
            <Link
              to="/listingdetail"
              key={listing.id}
              className="bg-white rounded-lg shadow hover:shadow-2xl duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  className="w-full h-60 object-cover"
                  src={listing.imageUrl}
                  alt="Restaurant Image"
                />
                <div className="absolute top-2 -right-3">
                  <span className="bg-[#28A745B3] text-white text-xs px-2 py-1 rounded-xl pr-5">
                    {listing.openStatus}
                  </span>
                </div>
                <div className="absolute top-10 -right-3">
                  <span className="bg-[#FF5E00B3] text-white text-xs px-2 py-1 rounded-xl pr-5">
                    {listing.closeStatus}
                  </span>
                </div>
                <div className="absolute bottom-1 left-1 bg-black bg-opacity-60 text-white px-3 py-2 flex items-center rounded-md">
                  <span className="p-1.5 bg-orange-600 rounded-full me-2">
                    <svg
                      className="svg-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 36 36"
                    >
                      <path
                        fill="currentColor"
                        d="M19 1.5a1.5 1.5 0 1 0-3 0V11a1 1 0 0 1-2 0V1.5a1.5 1.5 0 1 0-3 0V11a1 1 0 0 1-2 0V1.5a1.5 1.5 0 1 0-3 0v9c0 .127.021.249.051.367c-.03.207-.051.417-.051.633c0 2.316 1.75 5.957 4 6.442V33.5a2.5 2.5 0 1 0 5 0V17.942c2.25-.485 4-4.126 4-6.442c0-.216-.021-.426-.051-.633c.03-.118.051-.24.051-.367zM27.5 0c-.104 0-.204.019-.306.031C27.13.021 27.067 0 27 0c-2.209 0-5 5.477-5 11c0 4.658 1.275 8.56 3 9.672V33.5a2.5 2.5 0 1 0 5 0v-31A2.5 2.5 0 0 0 27.5 0"
                      />
                    </svg>
                  </span>
                  <span>Restaurant</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {listing.title}
                </h3>
                <div className="flex items-center mt-2">
                  <div className="flex items-center text-gray-300">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        aria-label="Star"
                        className={`w-4 h-4 cursor-pointer ${
                          starIndex < ratings[index]
                            ? "text-orange-600 fill-current"
                            : "text-gray-300"
                        }`}
                        onClick={() => {
                          const newRatings = [...ratings];
                          newRatings[index] = starIndex + 1;
                          setRatings(newRatings);
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-sm text-gray-700">
                      {ratings[index]}/5
                    </span>
                  </div>
                  <span className="text-gray-700 ml-2 text-sm">
                    {listing.rating}
                  </span>
                </div>
                <div className="mt-4 text-gray-700">
                  <div className="flex items-center">
                    <span>{listing.address}</span>
                  </div>
                  <div className="flex items-center">
                    <span>{listing.website}</span>
                  </div>
                  <div className="flex items-center">
                    <span>{listing.phone}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishCards;
