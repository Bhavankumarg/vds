"use client";
import React, { useState } from "react";
import { GoPlay } from "react-icons/go";

const HomeBanner = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleImageClick = () => {
    setShowVideo(true);
  };

  return (
    <>
      {!showVideo && (
        <div className="flex relative" onClick={handleImageClick}>
          <img
            className="w-full h-700 cursor-pointer"
            src="/my_constituency/group.png/"
            alt="Home Banner"
          />
          <div className="flex justify-center items-center absolute inset-0">
            <GoPlay className="size-28 text-white cursor-pointer" />
          </div>
        </div>
      )}
      {showVideo && (
        <iframe
          width="1600"
          height="686"
          src="https://www.youtube.com/embed/tZudcGhRg00?autoplay=1"
          title="&#39;പൊന്നു ഷംസീറേ, എല്ലാത്തിലും കയറി അഭിപ്രായം പറയല്ലേ..&#39;&#39;: | VD Satheesan | Niyamasabha"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      )}
    </>
  );
};

export default HomeBanner;
