import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { HashLoader } from "react-spinners";
import  { useState, useEffect } from "react";

function New1() {
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
      <Header />
      <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg my-30">
        {/* Sawirada dusha sare */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <img
            className="w-full sm:w-[250px] h-[150px] object-cover rounded-lg shadow-md"
            src="https://unsom.unmissions.org/sites/default/files/styles/full_width_image/public/field/image/cover.jpg?itok=UHq-zeKo"
            alt="Empowerment 1"
          />
          <img
            className="w-full sm:w-[250px] h-[150px] object-cover rounded-lg shadow-md"
            src="https://unsom.unmissions.org/sites/default/files/styles/full_width_image/public/field/image/cover.jpg?itok=UHq-zeKo"
            alt="Empowerment 2"
          />
          <img
            className="w-full sm:w-[250px] h-[150px] object-cover rounded-lg shadow-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hmoxcl9WGfqb4ovMC0VIF06NvK6OMcAbJFMJMn7g0Rgh8EBJf0y5ykrh3scGZk0HQ6o&usqp=CAU"
            alt="Empowerment 3"
          />
        </div>

        <article className="max-w-3xl mx-auto flex flex-col space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 text-center">
            HERDO Empowers Women Through Skill Training
          </h2>
          <p className="text-sm text-gray-500 text-center">June 1, 2025</p>

          <p className="text-gray-700 leading-relaxed text-lg">
            HERDO is committed to empowering women in rural and marginalized communities by providing
            comprehensive and inclusive skill-building programs that foster economic independence,
            social empowerment, and personal development. The initiative offers specialized training in
            tailoring, basic and advanced business management, financial literacy, and digital skills,
            reaching over 200 women so far.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Beyond technical skills, HERDO emphasizes leadership development, self-confidence, and
            community engagement through workshops and mentorship programs. Participants learn
            essential skills like marketing strategies, customer service, product development, and
            sustainable entrepreneurship, enabling them to establish and grow small businesses with
            long-term viability.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            The program also integrates digital literacy and technology use, teaching women how to
            leverage social media, e-commerce platforms, and digital payment systems to expand their
            market reach and streamline operations. This digital transformation component equips women
            to navigate and succeed in the modern business landscape.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            HERDO collaborates with local stakeholders, government agencies, and NGOs to create a
            supportive ecosystem for women entrepreneurs. This network offers access to microfinance,
            business incubation services, and peer support groups, fostering an environment where women
            can thrive economically and socially.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Since its inception, HERDO has empowered more than 200 women to start their own enterprises,
            generate sustainable incomes, and contribute to poverty reduction in their communities.
            Many participants have reported improved household wellbeing, increased educational
            opportunities for their children, and enhanced social status within their families and
            communities.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            Moving forward, HERDO plans to scale its impact by expanding training programs to include
            sectors such as agriculture, crafts, and renewable energy. The project envisions creating
            a replicable model of women empowerment that can be adapted to other regions facing
            similar socio-economic challenges.
          </p>
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default New1;
