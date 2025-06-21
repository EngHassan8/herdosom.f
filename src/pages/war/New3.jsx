import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { HashLoader } from "react-spinners";
import  { useState, useEffect } from "react";
function New3 () {
   // Loading for the page mount
    const [pageLoading, setPageLoading] = useState(true);
    // Loading for the form submission
  
    useEffect(() => {
      // Fake loading for 2 seconds on page load
      const timer = setTimeout(() => {
        setPageLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
   if (pageLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <HashLoader color="#4f46e5" size={60} />
      </div>
    );
  }
  
  return (

    <div>
<Header/>
  
    <section className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg my-30">
      {/* Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="https://www.uncdf.org/download/file/20655?defaultFile=%2FDefaultImages%2FdefaultImage.png&thumbnail=False&cultureId=127&useLarge=true"
          alt="Clean water being distributed"
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_MavDzcAlAolA1Ig0kdYVDr316IFuxAGTg&s"
          alt="Village children with clean water"
          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Text Section */}
      <article className="mt-10 space-y-6">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center">
          Clean Water Project Reaches 10 Villages
        </h2>
        <p className="text-center text-sm text-gray-500 italic">
          Published on June 5, 2025
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          HERDO has successfully extended its Clean Water Project to 10 underserved villages,
          bringing safe and reliable drinking water to over 3,000 residents. This initiative
          was launched in response to the critical need for clean water, especially in drought-prone
          rural areas.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Through the installation of solar-powered water pumps, boreholes, and filtration systems,
          communities now have daily access to clean water for drinking, cooking, and sanitation.
          These sustainable solutions not only improve health outcomes but also reduce the time women
          and children spend fetching water from distant sources.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          HERDO also provided hygiene training and awareness workshops to local families, promoting
          safe water practices and disease prevention. Local leaders and youth were engaged in
          maintaining the infrastructure, ensuring community ownership and long-term sustainability.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          The Clean Water Project stands as a major step forward in improving quality of life and
          building healthier, more resilient villages across the region.
        </p>
      </article>
    </section>



    
<Footer/>    
</div>
  );
}

export default New3;
