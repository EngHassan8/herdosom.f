import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { HashLoader } from "react-spinners";
import {
  Target,
  Eye,
  Flag,
  HeartHandshake,
  Megaphone,
  HandCoins,
} from "lucide-react";
import { FaHandsHelping } from "react-icons/fa";
import Herdo from "../assets/Herdo.jpg";
import mohamed from "../assets/mohamed.jpg";
import eng from "../assets/eng.jpg";
import ber from "../assets/ber.jpg";
import t15 from "../assets/t15.jpg";
import ahmedV from "../assets/ahmedV.jpg";
import Yuu from "../assets/Yuu.jpg";
import salah from "../assets/salah.jpg";
import Abdlow from "../assets/Abdlow.jpg";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmQ_6YKDGakn2J43LG5wx06PG1xTwtE5ybw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII5GCpEtCFm3k86T0sf7Atn1-YDE7YkCUn3JVx4wum77IQ7Jgw9zwMUnzyofaJPq12gA&usqp=CAU",
];

export default function About() {
   const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [foundersIndex, setFoundersIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const [founders, setFounders] = useState([
    { id: 1, name: "Mohamud Abdi Sheikh Adan", role: "EXECUTIVE DIRECTOR", image: mohamed },
    { id: 2, name: "Mohamed Hassan", role: "DEPUTY DIRECTOR", image: t15 },
    { id: 3, name: "Omar Ali Isacck", role: "General Secretory", image: eng },
    { id: 4, name: "Salah Osman", role: "HR Admin Manager", image: salah },
    { id: 5, name: "Ahmed Osman", role: "General Health Manager", image: ber },
    { id: 6, name: "Yusuf Mohamed", role: "Head of Programs", image: Yuu },
    { id: 7, name: "Ahmed Abukar", role: "Finance Manager", image: ahmedV },
    { id: 8, name: "Abdullahi Ali Adow", role: "Director Of Operation", image: Abdlow },
  ]);

  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleImageChange = (e, founderId) => {
    const file = e.target?.files?.[0];
    if (!file) return;
    const newImageUrl = URL.createObjectURL(file);
    setFounders((prev) =>
      prev.map((f) => (f.id === founderId ? { ...f, image: newImageUrl } : f))
    );
  };

  const maxFounderIndex = founders.length - visibleCount;
  const visibleFounders = founders.slice(foundersIndex, foundersIndex + visibleCount);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <HashLoader color="#4f46e5" size={60} />
      </div>
    );
  }
  return (
    <div>
      <Header />

      {/* Hero */}
      <div
        className="w-full h-screen bg-cover bg-center relative flex items-center justify-center text-white"
        style={{ backgroundImage: `url("${images[0]}")` }}>
        <div className="absolute inset-0 bg-blue-600/30 backdrop-brightness-95"></div>
        <div className="relative z-10 bg-black/40 p-10 rounded-xl max-w-3xl text-center">
          <h2 className="text-5xl font-extrabold mb-6">About Our NGO</h2>
          <p className="text-xl text-gray-100 leading-relaxed">
            HERDO is an independent, non-government, non-partisan, and non-profit organization established on December 8, 2024, to address poverty, human displacement, and climatic challenges in Somalia's Southwest State.
          </p>
        </div>
      </div>
      {/* What We Do Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 sm:px-20 text-center">
    <h2 className="text-4xl font-bold text-blue-700 mb-12">What We Do</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <HeartHandshake className="w-10 h-10 text-red-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Humanitarian Aid</h3>
        <p className="text-gray-600">
          We provide life-saving assistance including food, water, and shelter for displaced communities.
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <Megaphone className="w-10 h-10 text-blue-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Advocacy & Awareness</h3>
        <p className="text-gray-600">
          Raising awareness and advocating for policy changes to support vulnerable populations.
        </p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
        <HandCoins className="w-10 h-10 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Livelihood Support</h3>
        <p className="text-gray-600">
          Empowering communities through training, agriculture support, and job creation programs.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Our Impact Section */}
{/* Our Impact Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 sm:px-20 text-center">
    <h2 className="text-4xl font-bold text-green-700 mb-12">Our Impact</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      <div className="p-6 bg-green-50 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-3xl font-extrabold text-green-800">25+</h3>
        <p className="text-gray-700 mt-2">Projects Completed</p>
      </div>

      <div className="p-6 bg-blue-50 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-3xl font-extrabold text-blue-800">10,000+</h3>
        <p className="text-gray-700 mt-2">People Helped</p>
      </div>

      <div className="p-6 bg-yellow-50 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-3xl font-extrabold text-yellow-600">15</h3>
        <p className="text-gray-700 mt-2">Regions Reached</p>
      </div>

      <div className="p-6 bg-red-50 rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-3xl font-extrabold text-red-600">30+</h3>
        <p className="text-gray-700 mt-2">Volunteers Engaged</p>
      </div>

    </div>
  </div>
</section>


      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gray-100">
        <div className="bg-blue-100 rounded-2xl shadow-md p-6">
          <Target className="w-10 h-10 text-blue-700" />
          <h2 className="text-2xl font-bold text-blue-800">Our Mission</h2>
          <p className="text-gray-700">
            Combat poverty, promote food security and economic growth through awareness and good governance.
          </p>
        </div>
        <div className="bg-blue-200 rounded-2xl shadow-md p-6">
          <Eye className="w-10 h-10 text-blue-900" />
          <h2 className="text-2xl font-bold text-blue-900">Our Vision</h2>
          <p className="text-gray-800">
            Enhanced resilience to climate change and sustainable agriculture.
          </p>
        </div>
        <div className="bg-green-100 rounded-2xl shadow-md p-6">
          <Flag className="w-10 h-10 text-green-800" />
          <h2 className="text-2xl font-bold text-green-800">Our Goals</h2>
          <p className="text-gray-700">
            Improve living standards through community mobilization and grassroots strengthening.
          </p>
        </div>
      </section>

      {/* Founders Section */}
     {/* Founders Section */}
      <section className="py-20 bg-white max-w-7xl mx-auto px-6 sm:px-20">
        <h2 className="text-4xl font-bold mb-12 text-green-700 text-center">Our Founders</h2>
        <div className={`grid gap-8 grid-cols-1 ${visibleCount === 3 ? 'md:grid-cols-3' : ''}`}>
          {visibleFounders.map(({ id, name, role, image }) => (
            <div key={id} className="bg-green-50 p-8 rounded-2xl shadow-lg text-center">
              <img
                src={image || Herdo}
                alt={name}
                className="mx-auto h-48 w-48 rounded-full object-cover cursor-pointer hover:opacity-80"
                onClick={() => document.getElementById(`fileInput${id}`).click()}
              />
              <input
                id={`fileInput${id}`}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, id)}
              />
              <h3 className="text-xl font-semibold text-green-800 mt-4">{name}</h3>
              <p className="text-gray-600">{role}</p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {Array.from({ length: founders.length - visibleCount + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full transition duration-300 ${
                idx === foundersIndex ? "bg-green-700 shadow-md" : "bg-green-300 hover:bg-green-500"
              }`}
              onClick={() => setFoundersIndex(idx)}
            />
          ))}
        </div>
      </section>


      {/* Image Slider */}
      <div className="relative w-full max-w-4xl mx-auto mt-12 rounded-xl shadow-lg overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-64 sm:h-96 object-cover transition-transform duration-700 ease-in-out"
        />
        <button
          onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          &#8592;
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          &#8594;
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${idx === currentIndex ? "bg-green-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
