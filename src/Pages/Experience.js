import React from "react";
import Work from "../Components/Work";

function Experience() {
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl font-bold">
          Internships & Experience
        </h1>

        {/* ExcelR Prompt Engineering Internship */}
        <div className="mb-8">
          <Work
            position="Short-Term Internship - Prompt Engineering and ChatGPT"
            company="ExcelR Edtech Pvt. Ltd. (In collaboration with APSCHE)"
            location="Andhra Pradesh, India"
            type="Internship"
            duration="June 1, 2025 – July 31, 2025"
            description="Completed a short-term internship focused on Prompt Engineering and ChatGPT, organized by ExcelR Edtech Pvt. Ltd. in collaboration with Andhra Pradesh State Council of Higher Education. Gained hands-on experience in crafting effective AI prompts and leveraging ChatGPT for real-world applications."
          />
          <a
            href="/EXCELR-2002723.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            📄 View Certificate
          </a>
        </div>

        {/* Google Cloud Fundamentals Training */}
        <div className="mb-8">
          <Work
            position="Google Cloud Study Jams - Cloud Computing Fundamentals Training"
            company="GDSC Aditya Institute of Technology and Management"
            location="Remote / College"
            type="Training Program"
            duration="2023 (1st Year)"
            description="Successfully completed Google Cloud's Cloud Computing Fundamentals training through Google Developer Student Clubs (GDSC). Acquired foundational cloud skills and hands-on experience with Google Cloud services. Verified skill badges via Google Cloud Skills Boost."
          />
          <a
            href="/malleswarigdsc.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            📄 View Certificate
          </a>
        </div>
      </section>
    </main>
  );
}

export default Experience;
