import React from "react";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
const MyConsistencyPage = () => {
  return (
    <>

      <div className="bg-[url('/home_images/about_satheesan_background.png')] p-5 merriweather-regular">
        <h3 className="text-[#035C96] text-5xl text-center lg:p-20 mt-20">
          My Constituency
        </h3>
        <div className="lg:flex text-xl">
          <div>
            <p className="lg:w-9/12 lg:ms-10 ms-2 ">
              North Paravur is an area with a rich and vibrant history. Paravur
              gets its name from the old word Parayur, which means “site of the
              ancient tribe of Paravar.” The Paravar were the predominant
              population of Kerala’s coastal districts, particularly around the
              Chera dynasty’s old capital, Mohodayapuram. North Paravur is also
              thought to be one of the 64 villages that lord Parashurama built.
              Before their conversion to Syrian Christianity in the first
              century and their relocation to Israel following its formation,
              this town had a strong Jewish community. Notable landmarks
              include:
            </p>


<div className="lg:flex lg:flex-row lg:justify-between lg:ms-10 lg:p-3 lg:mb-5 lg:w-9/12 mt-5">
    <div className="lg:mb-5">
        <div className="flex">
            <GoDotFill className="text-red-600 text-2xl" />
            <p className="">Paliam Palace</p>
        </div>
        <div className="flex">
            <GoDotFill className="text-red-600 text-2xl" />
            <p className="">Jewish Synagogue Museum</p>
        </div>
        <div className="flex">
            <GoDotFill className="text-red-600 text-2xl" />
            <p className="">Paliam Palace</p>
        </div>
    </div>

    <div className="lg:flex lg:flex-col mb-5">
        <div className="lg:mb-5">
            <div className="flex">
                <GoDotFill className="text-red-600 text-2xl" />
                <p className="">Don Bosco Church</p>
            </div>
            <div className="flex">
                <GoDotFill className="text-red-600 text-2xl" />
                <p className="">Dakshina Mookambika Temple</p>
            </div>
        </div>
    </div>
</div>



            <div className="lg:ms-10 lg:w-9/12 ms-2 mb-5">
              <p>
                Paravur was historically known for traditional businesses like
                as coir, handlooms, and agriculture. Located about 20 kilometers
                away from the Kochi city center, the town is now transforming
                into a significant residential suburb.
              </p>
            </div>
          </div>
          <div className="w-[100%] lg:me-10 p-0">
            <Image width={472} height={380} src="/my_constituency/About_paravur.png" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyConsistencyPage;
