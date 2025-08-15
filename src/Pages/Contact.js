import React from "react";
import { contactDetails } from "../Details";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";

function Contact() {
  const { email, phone } = contactDetails;

  return (
    <main className="container mx-auto max-width section text-center">
      <h1 className="text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        For any questions please drop a mail
      </h1>

      {/* Email */}
      <h3 className="text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>

      {/* Phone */}
      <h3 className="text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>

      {/* Connect With Me */}
      <section className="mt-10 bg-gray-100 dark:bg-gray-800 py-8 px-4 rounded-lg shadow-md inline-block">
        <h2 className="text-2xl md:text-3xl font-bold text-dark-heading dark:text-light-heading mb-4">
          Connect With Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Let’s connect and grow together! 🚀
        </p>
        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="https://www.linkedin.com/in/malliswari-boggavarapu//"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-transform transform hover:-translate-y-1"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Malliswari18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-gray-200 transition-transform transform hover:-translate-y-1"
          >
            <FaGithub />
          </a>
          <a
            href={`mailto:${email}`}
            className="hover:text-red-500 transition-transform transform hover:-translate-y-1"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform transform hover:-translate-y-1"
          >
            <FaInstagram />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
