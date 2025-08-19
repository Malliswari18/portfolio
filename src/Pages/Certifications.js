import React from "react";


// Import certificate images
import genaiImg from "../assets/certifications/genai.jpg";
import cloudImg from "../assets/certifications/cloud.jpg";
import pythonImg from "../assets/certifications/pythonfordata.jpg";
import webdevImg from "../assets/certifications/webdev.jpg";
import djangoImg from "../assets/certifications/django.jpg";
import nextwaveImg from "../assets/certifications/nextwave.jpg";
import aitoolsImg from "../assets/certifications/aitools.jpg";
import pythonworkshopImg from "../assets/certifications/pythonworkshop.jpg";
import ciscoImg from "../assets/certifications/cisco.jpg";
import androidImg from "../assets/certifications/android.jpg"

// Import certificate PDFs
import genaiPdf from "../assets/certifications/cloud.pdf";
import cloudPdf from "../assets/certifications/cloud.pdf";
import pythonPdf from "../assets/certifications/pythonfordata.pdf";
import webdevPdf from "../assets/certifications/webdev.pdf";
import djangoPdf from "../assets/certifications/django.pdf";
import ciscoPdf from "../assets/certifications/cisco.pdf";
import androidPdf from "../assets/certifications/android.pdf"

function Certifications() {
  const certifications = [
    { title: "Generative AI", image: genaiImg, file: genaiPdf },
    { title: "Cloud Computing Foundation", image: cloudImg, file: cloudPdf },
    { title: "Python for Data Science", image: pythonImg, file: pythonPdf },
    { title: "Web Development", image: webdevImg, file: webdevPdf },
    { title: "Django Workshop - APSSDC", image: djangoImg, file: djangoPdf },
    { title: "AI Model Building Workshop - Nextwave", image: nextwaveImg },
    { title: "AI Tools Usage Workshop", image: aitoolsImg },
    { title: "Python Workshop - Skillbridge", image: pythonworkshopImg },
    { title: "Cisco Python Essentials - 1", image: ciscoImg, file: ciscoPdf },
    {title:"Android App development ",image:androidImg,file:androidPdf},
  ];

  return (
    <main className="container mx-auto max-width pt-30 pb-100">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6 text-dark-heading dark:text-light-heading">
        Certifications
      </h1>

      {/* Horizontal Scroll Gallery */}
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-gray-100 dark:bg-gray-800 p-2 rounded-lg shadow-md flex-shrink-0"
          >
            {cert.file ? (
              <a href={cert.file} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-64 object-contain rounded hover:scale-105 transition-transform duration-300"
                />
              </a>
            ) : (
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-contain rounded hover:scale-105 transition-transform duration-300"
              />
            )}
            <h2 className="text-lg font-semibold mt-2 text-center text-dark-heading dark:text-light-heading">
              {cert.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Note under certifications */}
      <div className="mt-6 text-center">
        <p className="text-gray-700 dark:text-gray-300 text-lg italic">
          I’m continuously learning and working on new skills
        </p>
      </div>
    </main>
  );
}

export default Certifications;
