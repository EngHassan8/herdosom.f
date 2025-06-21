import React, { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaClock,
  FaBuilding,
} from "react-icons/fa";
import { HashLoader } from "react-spinners";

function Contact() {
  const form = useRef();
  
  // Loading for the page mount
  const [pageLoading, setPageLoading] = useState(true);
  // Loading for the form submission
  const [sending, setSending] = useState(false);

  useEffect(() => {
    // Fake loading for 2 seconds on page load
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_fpz1zmd", // service ID
        "template_txrisxp", // template ID
        form.current,
        "xTUwWzeuzD2iGUe9V" // public key
      )
      .then(
        () => {
          toast.success("Fariinta waa la diray ✅");
          form.current.reset();
          setSending(false);
        },
        (error) => {
          toast.error("Fariintu ma dirmin ❌");
          console.error("Error: ", error);
          setSending(false);
        }
      );
  };

  // Show page loading spinner on initial load
  if (pageLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <HashLoader color="#4f46e5" size={50} />
      </div>
    );
  }

  return (
    <div>
      <Header />
         <div className="bg-gradient-to-r from-blue-700 to-blue-600 pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-4">
            Nala Xiriir
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Waxaad nagu soo diri kartaa fariin haddii aad u baahan tahay
            macluumaad dheeraad ah ama taageero
          </p>
        </div>
      </div>

      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Your full contact form UI here */}
        <main className="flex-grow py-12 -mt-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
                  <div className="flex items-center">
                    <FaEnvelope className="text-white text-xl mr-3" />
                    <h2 className="text-xl font-semibold text-white">Fariimaha</h2>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Enter Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Geli magacaaga"
                        disabled={sending}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Enter Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Geli iimaylkaaga"
                        disabled={sending}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Geli fariintaada"
                        disabled={sending}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={sending}
                      className={`w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 px-6 rounded-lg hover:from-blue-700 hover:to-blue-600 transition duration-200 shadow-md flex items-center justify-center mt-2 ${
                        sending && "opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <FaPaperPlane className="mr-2" />
                      {sending ? "Dirayaa..." : "Dir Fariinta"}
                    </button>

                    <p className="mt-4">
                      Ama nagala soo xiriir:{" "}
                      <a href="https://wa.me/252615052329" className="text-blue-500">
                        WhatsApp
                      </a>
                    </p>
                  </form>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4">
                    <div className="flex items-center">
                      <FaBuilding className="text-white text-xl mr-3" />
                      <h2 className="text-xl font-semibold text-white">Xafiiskeena</h2>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="text-blue-500 mt-0.5 mr-3" />
                      <p>Baidoa, Somalia</p>
                    </div>
                    <div className="flex items-start">
                      <FaEnvelope className="text-blue-500 mt-0.5 mr-3" />
                      <p>herdosom@gmail.com</p>
                    </div>
                    <div className="flex items-start">
                      <FaPhone className="text-blue-500 mt-0.5 mr-3" />
                      <p>+252 61 5052329</p>
                    </div>
                    <div className="flex items-start">
                      <FaClock className="text-blue-500 mt-0.5 mr-3" />
                      <p>Isniinta - Jimcaha: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.253033537516!2d43.6367132747153!3d3.1200634969853597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17555c6b35f13e2d%3A0xcdb9ed0b083d58d9!2sBaidoa!5e0!3m2!1sen!2som!4v1687074645814!5m2!1sen!2som"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="w-full h-[200px]"
                    title="Our Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default Contact;
