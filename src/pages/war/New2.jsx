import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { HashLoader } from "react-spinners";
import  { useState, useEffect } from "react";

function New2() {
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
      {/* Sawirada sare */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src="https://hapsom.org/wp-content/uploads/2023/12/32807538677_2ffa412867_b.jpg"
          alt="Children learning in Baidoa"
          className="w-full h-64 md:h-auto object-cover rounded-lg shadow-md"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaeJ0JhfL6HKFT_uLi5HXYdJ6DBa_r5Kd1w&s"
          alt="Community education"
          className="w-full h-64 md:h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Qoraalka hoose */}
      <article className="mt-10 space-y-6">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center">
          HERDO Launches Education Initiative in Baidoa
        </h2>
        <p className="text-center text-sm text-gray-500 italic">
          Published on June 5, 2025
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          HERDO has proudly launched a comprehensive education initiative in Baidoa,
          aiming to transform access to quality education for underprivileged children and youth.
          The initiative responds to the urgent need for improved learning conditions, teacher support,
          and community involvement in education.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          The program includes the distribution of essential textbooks and school supplies, establishment
          of child-friendly learning spaces, and digital literacy campaigns. HERDO also conducts workshops
          for teachers to introduce learner-centered approaches and inclusive teaching practices.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          In addition, community awareness campaigns encourage parents to prioritize education — particularly
          for girls, who often face additional barriers. The initiative also addresses issues such as
          school dropout, early marriage, and gender inequality in education.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          Over 500 children have already benefited from this program, and local teachers report improved
          student engagement and academic performance. HERDO continues to expand its efforts in Baidoa,
          ensuring long-term impact through sustainability-focused strategies and strong local partnerships.
        </p>
      </article>
    </section>


<Footer/>
     </div>
  );
}

export default New2;
