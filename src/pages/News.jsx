import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HashLoader } from "react-spinners";

function News() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <HashLoader color="#2563eb" size={50} />
      </div>
    );
  }

  return (
    <div>
      <Header />

      <div className="bg-gray-50 min-h-screen py-12 px-10 my-10">
        <section className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
          {/* News item 1 */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmQ_6YKDGakn2J43LG5wx06PG1xTwtE5ybw&s"
              alt="HERDO empowers women"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-blue-900 mb-2 hover:text-blue-700 cursor-pointer transition-colors duration-300">
                HERDO empowers women through skill training
              </h2>
              <time className="text-sm text-gray-500 mb-4">June 1, 2025</time>
              <p className="text-gray-700 flex-grow mb-6 line-clamp-3">
                In an effort to support women's independence, HERDO has launched a
                skill-building program teaching tailoring, business basics, and
                digital literacy to over 200 women in rural areas.
              </p>
              <a
                href="new1"
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More →
              </a>
            </div>
          </article>

          {/* News item 2 */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbaeJ0JhfL6HKFT_uLi5HXYdJ6DBa_r5Kd1w&"
              alt="HERDO education initiative"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-blue-900 mb-2 hover:text-blue-700 cursor-pointer transition-colors duration-300">
                HERDO launches education initiative in Baidoa
              </h2>
              <time className="text-sm text-gray-500 mb-4">June 1, 2025</time>
              <p className="text-gray-700 flex-grow mb-6 line-clamp-3">
                HERDO has started a new educational support project for vulnerable children
                in Baidoa. The program aims to enroll over 500 students in primary schools
                with free supplies and training for teachers.
              </p>
              <a
                href="new2"
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More →
              </a>
            </div>
          </article>

          {/* News item 3 */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnzk7_PwDPemYNSD_GaW4i1nMG0D4W_m5SEnNWQxt9FV2xSxt9xguEPHCxaPJcQcHslVY&usqp=CAU"
              alt="Clean Water Project"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-blue-900 mb-2 hover:text-blue-700 cursor-pointer transition-colors duration-300">
                Clean Water Project reaches 10 villages
              </h2>
              <time className="text-sm text-gray-500 mb-4">May 15, 2025</time>
              <p className="text-gray-700 flex-grow mb-6 line-clamp-3">
                HERDO successfully installed clean water systems in 10 villages across South
                West State, providing access to safe drinking water for over 4,000 people,
                reducing disease outbreaks.
              </p>
              <a
                href="new3"
                className="inline-block text-blue-600 hover:text-blue-800 font-semibold"
              >
                Read More →
              </a>
            </div>
          </article>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default News;
