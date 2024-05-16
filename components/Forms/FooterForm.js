import React from "react";
import Image from "next/image";

const FooterForm = () => {
  return (
    <form className="p-8 bg-[#072D46] w-full merriweather-regular">
      <div className="mb-5">
        <h3 className="text-center text-3xl font-medium p-5 text-white">
          Be My Friend
        </h3>
        <div className="flex mb-5 justify-center">
          <Image width={20} height={50} src="/footer_images/0.gif" alt="image-0" />
          <Image width={20} height={50} src="/footer_images/0.gif" alt="image-0" />
          <Image width={20} height={50} src="/footer_images/0.gif" alt="image-0" />
          <Image width={20} height={50} src="/footer_images/0.gif" alt="image-0" />
          <Image width={20} height={50} src="/footer_images/2.gif" alt="image-2" />
          <Image width={20} height={50} src="/footer_images/5.gif" alt="image-5" />
        </div>
      </div>
      <div className="mb-5 py-3">
        <input
          type="text"
          id="name"
          name="name"
          className="bg-[#033B5F] py-5 text-xl rounded-lg block w-full border border-[#033B5F] dark:placeholder-gray-400 text-white focus:none"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-5 py-3">
        <input
          type="tel"
          id="mobile"
          name="mobile"
          className="bg-[#033B5F] py-5 text-xl rounded-lg block w-full border border-[#033B5F] dark:placeholder-gray-400 text-white focus:outline-none"
          placeholder="Mobile Number"
          required
        />
      </div>
      <div className="mb-5 py-3">
        <input
          type="email"
          id="email"
          name="email"
          className="bg-[#033B5F] py-5 text-xl rounded-lg block w-full border border-[#033B5F] text-white focus:outline-none mb-5"
          placeholder="Email ID"
          required
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="text-white border font-medium rounded-md text-xl px-5 py-2.5 mb-5 w-32"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FooterForm;
