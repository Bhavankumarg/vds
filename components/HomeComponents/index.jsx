import React from 'react';
import HomeBanner from './HomeBanner';
import Homepage from './HomePage';
import PublicEye from './PublicEye';
import Gallery from './gallery';
const index = () => {
    return (
        <>
           <HomeBanner/>
           <Homepage/> 
           <PublicEye/>
           {/* <Gallery/> */}
        </>
    );
};

export default index;