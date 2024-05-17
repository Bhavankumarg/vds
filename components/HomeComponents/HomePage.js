import react from "react";
import { Button } from "react-bootstrap";
import Image from "next/image";
const Homepage = () => {
  return (
    <>
      <div class="grid lg:grid-cols-2 grid-flow-row gap-4 bg-[url('/home_images/about_satheesan_background.png')] mx-auto p-5 mx-5">
        <div className="flex justify-center">
          <Image width={400} height={350}
          src="/home_images/vds_video_img.png"
            className="h-full mt-2 p-2"
          />
        </div>

        <div className="border border-4 border-[#033B5F] mt-5 text-center flex justify-center items-center lg:me-10">
          <div>
            <h6 className="text-[#035C96] text-[34px] font-semibold merriweather-bold">
              Hello, I am{" "}
            </h6>
            <h6 className="text-[#035C96] text-[34px] font-semibold merriweather-bold">
              VD Satheesan…
            </h6>
            <Button className="border border-4 border-sky-800 p-2 items-center justify-center bg-white rounded-sm text-[#035C96] text-xl  mt-5 w-40 mb-5 merriweather-regular">
              Know Me
            </Button>
          </div>
        </div>
      </div>
      {/* <section tabindex="0">
        <div class="header"><p>3 of 10</p></div>
        <div class="content">
        <div class="grid lg:grid-cols-2 grid-flow-row gap-4 bg-[url('/home_images/about_satheesan_background.png')] mx-auto p-5 mx-5">
        <div className="flex justify-center">
          <img
            src="/home_images/vds_video_img.png"
            className="h-full mt-2 p-2"
          />
        </div>
        <div className="border border-4 border-[#033B5F] mt-5 text-center flex justify-center items-center lg:me-10">
          <div>
            <h6 className="text-[#035C96] text-[34px] font-semibold merriweather-bold">
              Hello, I am{" "}
            </h6>
            <h6 className="text-[#035C96] text-[34px] font-semibold merriweather-bold">
              VD Satheesan…
            </h6>
            <Button className="border border-4 border-sky-800 p-2 items-center justify-center bg-white rounded-sm text-[#035C96] text-xl  mt-5 w-40 mb-5 merriweather-regular">
              Know Me
            </Button>
          </div>
        </div>
        </div>
        </div>
    </section> */}
      
    </>
  );
};
export default Homepage;
