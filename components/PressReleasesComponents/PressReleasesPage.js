import React from "react";
import PressReleasesSlider from "./PressReleasesSlider";
const PressReleasesPage = () => {
  return (
    <>
      <div className="container mx-auto p-16">
        <h6 className="text-2xl">
          Stay updated with the latest announcements and updates on my efforts
          to create positive change in the country.
        </h6>
      </div>
      <div>
        <PressReleasesSlider />
      </div>
    </>
  );
};

export default PressReleasesPage;
