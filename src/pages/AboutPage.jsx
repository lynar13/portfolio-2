import React from "react";

/**
 * AboutPage displays information about the portfolio owner.
 *
 * @component
 * @returns {JSX.Element} The rendered AboutPage component.
 */
export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center text-[#D98969]">
        About Me
      </h1>
      <p className="text-lg text-gray-200 mb-6 text-center">
        Hi, I’m Romelyn! 👋 I’m a Front-end development and Web Design graduate
        with a background in IT and media production. Skilled in CMS Framer, Figma,
        Wireframes, React,
        JavaScript, Tailwind CSS, and API integration, with a strong focus on
        clean UI and user-friendly digital solutions.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-start mt-10">
        <img
          src="/assets/profile.jpeg" // Add a valid profile image in public/images/
          alt="Romelyn Resell"
          className="rounded-lg w-full max-w-sm mx-auto shadow-lg"
        />

        <div className="space-y-4 text-gray-200">
          <p>
            I have a background with two years in Information Technology and
            Media Production, followed by two years specializing in Front-End
            Development, and I am now continuing my journey as a Web Design
            student.
          </p>
          <p>
            Throughout this path, I’ve developed strong skills in React,
            JavaScript, Tailwind CSS, Vite, and API integration. I’m passionate
            about clean UI design, performance optimization, and building
            seamless user experiences.
          </p>
          <p>
            My projects range from e-commerce stores and booking platforms to
            modern dashboards — all created with a mobile-first and
            accessibility-focused approach. I’m always eager to learn new tools
            and techniques, and I enjoy turning ideas into practical, creative,
            and user-friendly digital solutions.
          </p>
          <p>
            I’m constantly learning and love building tools that solve real
            problems.
          </p>
          <a
            href="/CV_English.pdf"
            className="inline-block bg-[#D98969] hover:bg-[#c97256] text-gray-200 font-semibold px-5 py-2 rounded transition duration-300"
            download
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
