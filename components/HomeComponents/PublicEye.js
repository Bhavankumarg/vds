'use client'
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
const PublicEye = () => {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <>
      <div className=" bg-[url('/home_images/about_satheesan_background.png')]">
      <h6 className="text-center text-[#035C96] text-5xl p-10 merriweather-regular">In the Public Eye</h6>
      {/* start */}
      <div className="lg:flex gap-1 lg:p-10">
        

        <div>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_6.png"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_7.png"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_8.png"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_9.png"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/politics.jpeg"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/VDS.jpeg"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_2.png"/>     
        </div>

        <div>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_11.jpeg"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_12.jpeg"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_13.jpeg"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/VDS-Yuva-Chithan-Shivir-scaled.jpeg"/>
        </div>

        <div>
                
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_14.jpeg"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_15.jpeg"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/VDS-Speech.jpeg"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/Vds-Satheesan-Metting-Speech.jpeg"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/vds-group.jpeg"/>
                
        </div>

        <div>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/VDS-Public-Walk-in-Kerala.jpeg"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_1.png"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_18.jpeg"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1 w-full" src="/home_images/public_eye_images/public_img_10.png"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_5.png"/> 
        </div>

        <div>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_16.jpeg"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/public_img_17.jpeg"/>
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1" src="/home_images/public_eye_images/meeting.jpg"/> 
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1 w-full" src="/home_images/public_eye_images/public_img_4.png"/>  
                <Image width={500} height={300} data-aos="zoom-in-up"data-aos-duration="1000"  className=" hover:filter hover:brightness-50 duration-700 mb-1 w-full" src="/home_images/public_eye_images/public_img_3.png"/>  
        </div>

    </div>
        {/* end */}
        
      </div>
     
      
    </>
  );
};

export default PublicEye;
