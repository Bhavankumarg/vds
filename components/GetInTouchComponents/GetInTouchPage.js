import React from "react";
import FooterForm from "../Forms/FooterForm";
const GetInTouchPage = () => {
  return (
    <>
    <div className="grid lg:grid-cols-3 bg-[url('/footer_images/Get-in-touch-background.png')] p-5 shadow">
        <div className="text-white merriweather-regular">
          <h3 className="text-4xl font-bold p-5">Related Websites</h3>
          <div className="text-2xl">
            <p className="p-5 ">Indian National Congress</p>
            <p className="p-5 ">Kerala Pradesh Congress Committee</p>
            <p className="p-5 ">Indian Youth Congress</p>
            <p className="p-5 ">Kerala Legislative Assembly</p>
          </div>
        </div>
        <div>
          <FooterForm />
        </div>

        <div className="justify-center items-center">
          <a href="mailto:hello@vdsatheesan.com">
            <img
              className="bounce-in mt-10"
              src="/footer_images/ask-me-footer.png/"
            />
          </a>

          <p className="text-3xl text-center mt-3 text-white py-3 merriweather-bold">
            Profile Visitors
          </p>
          <div className="flex mb-5 justify-center py-5">
            <img src="/footer_images/0.gif" />
            <img src="/footer_images/0.gif" />
            <img src="/footer_images/0.gif" />
            <img src="/footer_images/5.gif" />
            <img src="/footer_images/9.gif" />
            <img src="/footer_images/1.gif" />
          </div>
        </div>
      </div>
      
      <div className="h-96 ">
        <iframe
          className="w-full h-full"
        //   height='500px'a
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=V%20D%20Satheesan%20MLA%20Office,%2046RM+4FR,%20North%20Paravur,%20Kerala%20683513+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>
      </div>
      <div className="bg-gradient-to-b text-xl from-[#035C96] to-[#022E4B] py-5 text-center text-white  shadow-t merriweather-regular">
        Copyright © 2022 All rights reserved.
      </div>
    </>
  );
};

export default GetInTouchPage;
