"use client";
import { initFlowbite } from "flowbite";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import React from "react";
const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    initFlowbite();
    AOS.init({
      // Initialize AOS with your desired configuration options
      //   duration: 800, // Duration of the animation
      //   easing: "ease-in-out", // Easing option
      once: false, // Whether animation should only happen once
    });
  }, []);
  const handleLinkClick = () => {
    setDrawerOpen(false); // Close the drawer when a link is clicked
  };

  return (
    <>
      <nav class="bg-[#033B5F] drop-shadow-lg" data-aos="fade-up">
        <div class="max-w-screen-xl flex lg:flex-wrap items-center justify-between p-0">
          <div class="lg:flex justify-between">
            <div className="">
              <Link href="/" class="lg:flex">
                <Image
                  width={250}
                  height={250}
                  src="/home_images/vds-main.png"
                  class="p-0 h-32"
                  alt="vds"
                />
                <span class="self-center font-bold text-white text-3xl mt-4">
                  <h6 className="self-center lg:text-center text-4xl merriweather-regular">
                    V D Satheesan
                  </h6>
                  <p class=" text-white text-[23px] ml-2 merriweather-light">
                    For the people
                  </p>
                </span>
              </Link>
            </div>

            <div class="flex lg:grid lg:grid-col  lg:py-0 lg:grid-flow-row  justify-center items-center lg:w-[50%] ">
              <p class="text-white lg:m-5 ms-2 merriweather-regular-italic text-[23px]">
                “People respect us not for our ability to make laws, but because
                of our ability to undo the injustice done to our people.”
              </p>
            </div>
          </div>
        </div>
      </nav>

      <div class="fixed  top-7 right-5  ">
        <button
          className="px-5 py-2.5 mb-2 mt-2  hover:-translate-y-1"
          type="button"
          onClick={() => setDrawerOpen(!drawerOpen)}
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <img src="/home_images/menu.svg" />
        </button>
      </div>

      <div
        id="drawer-right-example"
        className={`bg-[#033B5F] fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } w-80 dark:bg-gray-800`}
        tabIndex="-1"
      >
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover: rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white "
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div
          className={`fixed inset-0 ${drawerOpen ? "" : "hidden"}`}
          onClick={() => setDrawerOpen(false)}
        >
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="absolute right- h-full w-80 p-4 overflow-y-auto merriweather-regular text-xl">
            <ul className="space-y-3 font-medium text-white">
              <li onClick={handleLinkClick} className="border-b">
                <Link
                  href="/"
                  className="flex items-center py-5 mt-10 rounded-lg"
                >
                  <span className="ms-3 ">Home</span>
                </Link>
              </li>
              <li className="border-b">
                <Link
                  href="/my-journey"
                  className="flex items-center py-5  rounded-lg  "
                >
                  <span className="ms-3">My Journey</span>
                </Link>
              </li>
              <li className="border-b">
                <Link
                  href="/sincerely-me"
                  class="flex items-center py-5  rounded-lg  "
                >
                  <span className="flex-1 ms-3">
                    Sincerely, Me
                  </span>
                </Link>
              </li>
              <li className="border-b">
                <Link
                  href="/my-constituency"
                  class="flex items-center py-5  rounded-lg  "
                >
                  <span className="flex-1 ms-3">
                    My Constituency
                  </span>
                </Link>
              </li>
              <li className="border-b">
                <Link
                  href="/in-my-book-shelf"
                  class="flex items-center py-5  rounded-lg  "
                >
                  <span className="flex-1 ms-3">
                    In My Book Shelf
                  </span>
                </Link>
              </li>
              <li className="border-b">
                <Link
                  href="/press-releases"
                  class="flex items-center py-5  rounded-lg  "
                >
                  <span className="flex-1 ms-3">
                    Press Releases
                  </span>
                </Link>
              </li>
              <li className="border-b">
                <Link
                  href="newsletters"
                  class="flex items-center py-5  rounded-lg  "
                >
                  <span className="flex-1 ms-3">
                    Newsletters
                  </span>
                </Link>
              </li>
              <li className="">
                <Link
                  href="/get-in-touch"
                  className="flex items-center py-5  rounded-lg  "
                >
                  <span className="flex-1 ms-3">
                    Get in Touch
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;

{/* <div className="py-4 h-ful merriweather-regular text-xl">
          <ul class="space-y-3 font-medium text-white">
            <li className="border-b">
              <Link
                href="/"
                className="flex items-center py-5  rounded-lg  "
              >
                <span className="ms-3">Home</span>
              </Link>
            </li>

            <li className="border-b">
              <Link
                href="/my-journey"
                className="flex items-center py-5  rounded-lg  "
              >
                <span className="ms-3">My Journey</span>
              </Link>
            </li>
            <li className="border-b">
              <Link
                href="/sincerely-me"
                class="flex items-center py-5  rounded-lg  "
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Sincerely, Me
                </span>
              </Link>
            </li>
            <li className="border-b">
              <Link
                href="/my-constituency"
                class="flex items-center py-5  rounded-lg  "
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  My Constituency
                </span>
              </Link>
            </li>
            <li className="border-b">
              <Link
                href="/in-my-book-shelf"
                class="flex items-center py-5  rounded-lg  "
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  In My Book Shelf
                </span>
              </Link>
            </li>
            <li className="border-b">
              <Link
                href="/press-releases"
                class="flex items-center py-5  rounded-lg  "
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Press Releases
                </span>
              </Link>
            </li>
            <li className="border-b">
              <Link
                href="newsletters"
                class="flex items-center py-5  rounded-lg  "
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Newsletters
                </span>
              </Link>
            </li>
            <li className="">
              <Link
                href="/get-in-touch"
                className="flex items-center py-5  rounded-lg  "
              >
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Get in Touch
                </span>
              </Link>
            </li>
          </ul>
        </div> */}
