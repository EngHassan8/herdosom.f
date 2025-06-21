import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-700 to-blue-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ───── Top Grid ───── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-blue-400 pb-2">
              Contact Details
            </h3>

            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-blue-300 mt-1 flex-shrink-0" />
              <p>Baidoa, Somalia</p>
            </div>
            <div className="flex items-start space-x-3">
              <FaEnvelope className="text-blue-300 mt-1 flex-shrink-0" />
              <p>herdosom@gmail.com</p>
            </div>
            <div className="flex items-start space-x-3">
              <FaPhone className="text-blue-300 mt-1 flex-shrink-0" />
              <p>+252 61 505 2329</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-blue-400 pb-2">
              Quick Links
            </h3>

            <ul className="space-y-3 text-blue-100">
              <li>
                <a
                  href="/contact"
                  className="hover:text-white flex items-center transition"
                >
                  ▸ Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  className="hover:text-white flex items-center transition"
                >
                  ▸ FAQs
                </a>
              </li>
              <li>
                <a
                  href="/support"
                  className="hover:text-white flex items-center transition"
                >
                  ▸ Help & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-blue-400 pb-2">
              Follow Us
            </h3>

            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-blue-600 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-blue-600 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-blue-600 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="bg-blue-600 hover:bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center transition"
              >
                <FaTelegramPlane className="text-xl" />
              </a>
            </div>

            <p className="text-blue-100 text-sm mt-4">
              Stay connected for the latest updates.
            </p>
          </div>

          {/* Feedback */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-b border-blue-400 pb-2">
              Your Feedback
            </h3>
            <p className="text-blue-100">
              We value your ideas. Share feedback to help us improve.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-md font-medium shadow-sm transition"
            >
              Send Feedback
            </a>
          </div>
        </div>

        {/* ───── Bottom Bar ───── */}
        <div className="border-t border-blue-600 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Hileec Environment & Relief Development Organization — All rights reserved.
          </p>

          <a
            href="/privacy"
            className="text-blue-200 hover:text-white text-sm transition"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
