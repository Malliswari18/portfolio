import React from "react";

function Certifications() {
  const certifications = [
    {
      title: "Generative AI",
      image: "/genai.jpg",
      file: "/cert-generative-ai.pdf",
    },
    {
      title: "Cloud Computing Foundation",
      image: "/cloud.jpg",
      file: "/cloud.pdf",
    },
    {
      title: "Python for Data Science",
      image: "/pythonfordata.jpg",
      file: "/pythonfordata.pdf",
    },
    {
      title: "Web Development",
      image: "/webdev.jpg",
      file: "/webdev.pdf",
    },
     {
      title: "django workshop-apssdc",
      image: "/django.jpg",
      file: "/django.pdf",
    },
     {
      title: "AI model building workshop-nextwave",
      image: "/nextwave.jpg",
     
    },
     {
      title: "AI tools usage workshop",
      image: "/aitools.jpg",
    
    },
    {
      title: "python workshop-skillbridge",
      image: "/pythonworkshop.jpg",
    },
        {
      title: "cisco python essentials-1",
      image: "/cisco.jpg",
      file:"/cisco.pdf",
    },

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
            <a href={cert.file} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-64 object-contain rounded hover:scale-105 transition-transform duration-300"
              />
            </a>
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
