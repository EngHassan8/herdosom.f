import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';
import { FaGlobe, FaHeartbeat, FaSeedling, FaHandsHelping, FaLeaf, FaWater, FaUsers } from 'react-icons/fa';
import { Target, Eye, Flag, HeartHandshake, Megaphone, HandCoins, HelpingHand } from "lucide-react";

import HashLoader from "react-spinners/HashLoader"; // ✅ Spinner

import Header from '../components/Header';
import Footer from '../components/Footer';

import Herdo from "../assets/Herdo.jpg"
import mohamed from "../assets/mohamed.jpg"
import eng from "../assets/eng.jpg"
import ber from "../assets/ber.jpg"
import t15 from "../assets/t15.jpg"
import ahmedV from "../assets/ahmedV.jpg"
import Yuu from "../assets/Yuu.jpg"
import salah from "../assets/salah.jpg"
import Abdlow from "../assets/Abdlow.jpg"
import mom from "../assets/mom.jpg"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // ✅ Spinner State
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [current, setCurrent] = useState(0);

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-green-600 font-bold' : 'hover:text-green-400';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Spinner duration
    return () => clearTimeout(timer);
  }, []);

  const slides = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmQ_6YKDGakn2J43LG5wx06PG1xTwtE5ybw&s",
      text: "Welcome to Our Website",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_MavDzcAlAolA1Ig0kdYVDr316IFuxAGTg&s",
      text: "Discover Amazing Features",
    },
    {
      image: "https://unsom.unmissions.org/sites/default/files/styles/full_width_image/public/field/image/cover.jpg?itok=UHq-zeKo",
      text: "Join Our Community",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const partnerships = [
    {
      name: "World Food Programme",
      logo: "https://www.ri.org//content/uploads/2019/07/world-food-programme.png",
    },
    {
      name: "UNICEF",
      logo: "https://diplo-media.s3.eu-central-1.amazonaws.com/UNICEF_3.png",
    },
    {
      name: "WHO",
      logo: "https://partnership.who.int/images/librariesprovider14/default-album/who.tmb-small.jpg?Culture=en&sfvrsn=3cfe386a_3",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === partnerships.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const initialFounders = [
    { id: 1, name: "Mohamud Abdi Sheikh Adan", role: "EXECUTIVE DIRECTOR", image: mohamed },
    { id: 2, name: "Mohamed Hassan", role: "DEPUTY DIRECTOR", image: t15 },
    { id: 3, name: "Omar Ali Isacck", role: "General secretory", image: eng },
    { id: 4, name: "Salah Osman", role: "HR Admin manager", image: salah },
    { id: 5, name: "Ahmed Osman", role: "General Health Manager", image: ber },
    { id: 6, name: "Yusuf Mohamed", role: "Head of programs", image: Yuu },
    { id: 7, name: "Ahmed Abukar", role: "Finance Manager", image: ahmedV },
    { id: 8, name: "Abdullahi Ali Adow", role: "Director Of Operation", image: Abdlow },
  ];

  const [founders, setFounders] = useState(initialFounders);

  const handleImageChange = (e, founderId) => {
    const file = e.target.files[0];
    if (!file) return;
    const newImageUrl = URL.createObjectURL(file);
    setFounders((prev) =>
      prev.map((f) => (f.id === founderId ? { ...f, image: newImageUrl } : f))
    );
  };

  const partners = [
    { id: 1, name: "Green Earth Initiative", icon: <FaSeedling className="text-green-600 text-5xl mx-auto" />, description: "Environmental conservation and reforestation." },
    { id: 2, name: "Health For All", icon: <FaHeartbeat className="text-red-600 text-5xl mx-auto" />, description: "Community health and awareness programs." },
    { id: 3, name: "Global Aid Network", icon: <FaGlobe className="text-blue-600 text-5xl mx-auto" />, description: "International disaster relief and support." },
    { id: 4, name: "Helping Hands", icon: <FaHandsHelping className="text-yellow-600 text-5xl mx-auto" />, description: "Volunteer support and social services." }
  ];

  const services = [
    { id: 1, icon: <FaHandsHelping className="text-blue-700 text-4xl mx-auto mb-4" />, title: "Community Support", description: "Supporting local communities through aid and education." },
    { id: 2, icon: <FaLeaf className="text-green-700 text-4xl mx-auto mb-4" />, title: "Environmental Care", description: "Projects focused on sustainability and conservation." },
    { id: 3, icon: <FaWater className="text-cyan-700 text-4xl mx-auto mb-4" />, title: "Clean Water Access", description: "Providing safe drinking water solutions." },
    { id: 4, icon: <FaUsers className="text-purple-700 text-4xl mx-auto mb-4" />, title: "Capacity Building", description: "Training and empowering NGOs and volunteers." },
  ];

  // ✅ Spinner loading
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <HashLoader color="#4f46e5" size={50} />
      </div>
    );
  }
  return (
    <>
      <main>
        <Header />

      <main className=''>
       

        {/* Hero Section */}
          <section className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-20 py-16 gap-10 rounded-lg shadow-lg ">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Hilaac Environment &amp; Relief Development Organization
            </h1>
            <p className="text-lg mb-8 max-w-md">
              Empowering communities and safeguarding nature across Somalia.
            </p>
        <NavLink to="/about">
           <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-8 py-3 rounded shadow-md transition">
              Welcome
            </button>   </NavLink> 
          </div>
          <div className="md:w-1/2">
            <img
              src={Herdo}
              alt="HERDO activities"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </section>


        {/* About Section */}
        <section className="bg-red-100 py-16 px-6 sm:px-20 text-center max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-green-700">About Our NGO </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
           HERDO is an independent, non-government, non-partisan, and non-profit organization established in December 8, 2024, to address poverty, human displacement, and climatic challenges in Somalia's Southwest State. The organization also focuses on reducing catastrophes and coping with disaster aftermaths and their negative impacts on poverty. HERDO supports social services, including basic education, health services, and promotes human rights, protection, and peaceful coexistence to achieve lasting peace and post-conflict reconstruction. Founded by Somali professionals and community members, HERDO advocates for climate justice and human rights.
          </p>
        </section>
        

      
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
      <NavLink to="/new1">
        <button className='px-4 py-2 font-serif bg-red-100'>
            Read More
          </button>
        </NavLink>    
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
          <NavLink to="/new2">
        <button className='px-4 py-2 font-serif bg-red-100'>
            Read More
          </button>
        </NavLink>
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
           <NavLink to="/new3">
        <button className='px-4 py-2 font-serif bg-red-100'>
            Read More
          </button>
        </NavLink>
          </div>
        </article>
      </section>
    </div>

        {/* Services Section */}
        <section className="bg-white py-16 px-6 sm:px-20 text-center max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-green-700">What We Do</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {services.map(({ id, icon, title, description }) => (
              <div key={id} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                {icon}
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>
        </section>
{/* ////////////////// */}

<div
  className="relative w-full max-w-4xl mx-auto h-[70vh] md:h-screen flex items-center justify-center text-white px-6"
  style={{
    backgroundImage: `url(${slides[current].image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 1s ease-in-out',
  }}
>
  {/* Overlay: madow leh opacity */}
  <div className="absolute inset-0 "></div>

  {/* Text: responsive font sizes, centered */}
  <h1 className="relative z-10 text-center font-bold drop-shadow-lg max-w-3xl
                 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-4">
    {slides[current].text}
  </h1>

  {/* Navigation dots: bottom center */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
    {slides.map((_, index) => (
      <button
        key={index}
        className={`w-5 h-5 rounded-full transition-colors duration-300 cursor-pointer ${
          index === current ? 'bg-green-600' : 'bg-gray-400 hover:bg-green-500'
        }`}
        onClick={() => setCurrent(index)}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</div>



        {/* Upcoming Events Section */}
<section className="bg-gray-100 py-20 px-6 sm:px-20">
  <h2 className="text-4xl font-bold text-green-700 text-center mb-12">Upcoming Events</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    
    {/* Event Card 1 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII5GCpEtCFm3k86T0sf7Atn1-YDE7YkCUn3JVx4wum77IQ7Jgw9zwMUnzyofaJPq12gA&usqp=CAU"
        alt="Community Cleanup"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-green-700">Community Cleanup</h3>
        <p className="text-gray-600 mb-4">Join us for a local park cleanup to promote environmental awareness.</p>
        <p className="text-sm text-gray-500">📍 Baidoa, Somalia | 📅 July 15, 2025</p>
      </div>
    </div>

    {/* Event Card 2 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRII5GCpEtCFm3k86T0sf7Atn1-YDE7YkCUn3JVx4wum77IQ7Jgw9zwMUnzyofaJPq12gA&usqp=CAU"
        alt="Water Aid Campaign"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-green-700">Water Aid Campaign</h3>
        <p className="text-gray-600 mb-4">Distributing clean water kits to remote villages and training locals.</p>
        <p className="text-sm text-gray-500">📍 Hudur, Somalia | 📅 August 10, 2025</p>
      </div>
    </div>

    {/* Event Card 3 */}
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjxjHP9lXQEPgQKNY3I_jG9hc-FatS93vEw&s"
        alt="Medical Outreach"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-green-700">Medical Outreach</h3>
        <p className="text-gray-600 mb-4">Free check-ups and medicine distribution for underprivileged communities.</p>
        <p className="text-sm text-gray-500">📍 Marka, Somalia | 📅 September 5, 2025</p>
      </div>
    </div>

  </div>
</section>

{/* /////////mission visstion /// */}
 <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 bg-gray-100">
      {/* Our Mission */}
      <div className="bg-blue-100 rounded-2xl shadow-md p-6 flex flex-col gap-3">
        <Target className="w-10 h-10 text-blue-700" />
        <h2 className="text-2xl font-bold text-blue-800">Our Mission</h2>
        <p className="text-gray-700">
          HERDO's mission is to combat poverty-related events, promote food and nutrition security, and increase economic growth through long-term strategies by advocating, raising awareness, promoting good governance and democracy, and promoting peace and justice.
        </p>
      </div>

      {/* Our Vision */}
      <div className="bg-blue-200 rounded-2xl shadow-md p-6 flex flex-col gap-3">
        <Eye className="w-10 h-10 text-blue-900" />
        <h2 className="text-2xl font-bold text-blue-900">Our Vision</h2>
        <p className="text-gray-800">
          HERDO envisions enhanced resilience to climate change and improved agricultural production through environmentally and economically sustainable means.
        </p>
      </div>

      {/* Our Goals */}
      <div className="bg-green-100 rounded-2xl shadow-md p-6 flex flex-col gap-3">
        <Flag className="w-10 h-10 text-green-800" />
        <h2 className="text-2xl font-bold text-green-800">Our Goals</h2>
        <p className="text-gray-700">
          HERDO strives to improve the living standards of vulnerable communities in Southwest State through community mobilization, capacity building, information sharing, and grassroots strengthening.
        </p>
      </div>

      {/* Impact */}
      <div className="bg-yellow-100 rounded-2xl shadow-md p-6 flex flex-col gap-3">
        <HeartHandshake className="w-10 h-10 text-yellow-800" />
        <h2 className="text-2xl font-bold text-yellow-800">HERDO's Impact</h2>
        <p className="text-gray-700">
          Through resilience and collaboration, HERDO Organization is transforming lives. Our work spans from climate adaptation to human rights advocacy, ensuring communities have the tools they need to thrive.
        </p>
      </div>

      {/* Featured Campaigns */}
      <div className="bg-red-100 rounded-2xl shadow-md p-6 flex flex-col gap-3">
        <Megaphone className="w-10 h-10 text-red-800" />
        <h2 className="text-2xl font-bold text-red-800">Featured Campaigns</h2>
        <p className="text-gray-700">
          HERDO is dedicated to supporting vulnerable communities by addressing challenges faced by IDPs and marginalized groups through sustainable development and humanitarian aid.
        </p>
      </div>

      {/* Donations & Fundraising */}
      <div className="bg-rose-100 rounded-2xl shadow-md p-6 flex flex-col gap-3">
        <HandCoins className="w-10 h-10 text-rose-800" />
        <h2 className="text-2xl font-bold text-rose-800">Donations & Fundraising</h2>
        <p className="text-gray-700">
          Your contributions help fund life-changing programs, from emergency response to sustainable development projects, making a lasting impact on communities in need.
        </p>
      </div>

      {/* Aid & Support */}
      <div className="bg-orange-100 rounded-2xl shadow-md p-6 flex flex-col gap-3">
        <HelpingHand className="w-10 h-10 text-orange-800" />
        <h2 className="text-2xl font-bold text-orange-800">Aid & Support</h2>
        <p className="text-gray-700">
          HERDO provides essential humanitarian aid, including food, water, and shelter, to vulnerable communities and displaced persons, ensuring their basic needs.
        </p>
      </div>
    </section>



<div className="max-w-xl mx-auto px-6 py-12 text-center">
  <h2 className="text-green-600 font-semibold text-lg mb-1 tracking-wide uppercase">
    Partnerships
  </h2>
  <h1 className="text-3xl font-bold mb-8 text-gray-800">
    We Collaborate With
  </h1>

  <div
    className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer
               transition-transform duration-300 hover:scale-105"
  >
    <img
      src={partnerships[currentIndex].logo}
      alt={partnerships[currentIndex].name}
      className="w-60 h-32 object-contain mb-4"
    />
    <p className="text-blue-700 font-semibold text-xl select-none">
      {partnerships[currentIndex].name}
    </p>
  </div>

  {/* Navigation dots */}
  <div className="flex justify-center space-x-3 mt-6">
    {partnerships.map((_, index) => (
      <button
        key={index}
        className={`w-6 h-6 rounded-full transition-colors duration-300
          ${index === currentIndex
            ? "bg-green-700 shadow-lg shadow-green-400"
            : "bg-green-200 hover:bg-green-400"
        }`}
        onClick={() => setCurrentIndex(index)}
        aria-label={`Show partnership ${index + 1}`}
      />
    ))}
  </div>
</div>


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


  {/* Partners Section */}
        <section className="bg-gray-50 py-16 px-6 sm:px-20 text-center max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-green-700">Our Partner NGOs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {partners.map(({ id, name, icon, description }) => (
              <div key={id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer">
                {icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{name}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

   {/* Founders Section */}
        <section className="py-16 bg-white rounded-lg shadow-lg max-w-7xl mx-auto px-6 sm:px-20">
          <h2 className="text-4xl font-bold mb-10 text-green-700 text-center">
            Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {founders.map(({ id, name, role, image }) => (
              <div
                key={id}
                className="bg-gray-100 p-6 rounded-lg shadow text-center"
              >
                <img
                  src={image}
                  alt={name}
                  className="mx-auto mb-4 h-48 w-48 rounded-full object-cover cursor-pointer hover:opacity-80"
                  onClick={() => document.getElementById(`fileInput${id}`).click()}
                />
                <input
                  id={`fileInput${id}`}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleImageChange(e, id)}
                />
                <h3 className="text-xl font-semibold text-green-800">{name}</h3>
                <p className="text-gray-700">{role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Slider Section */}
     

       
      </main>
        {/* Footer */}
        <Footer />
      </main>
    </> 
  );
}
