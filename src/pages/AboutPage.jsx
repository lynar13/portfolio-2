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
        Hi, I’m Romelyn! 👋 I’m a passionate front-end developer who enjoys
        crafting modern, responsive web interfaces. With a focus on React, Vite and
        Tailwind CSS, I bring ideas to life through accessible, user-focused
        design.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-start mt-10">
        <img
          src="src/assets/profile.jpeg" // Add a valid profile image in public/images/
          alt="Romelyn Resell"
          className="rounded-lg w-full max-w-sm mx-auto shadow-lg"
        />

        <div className="space-y-4 text-gray-200">
          <p>
            Over the past two years, I’ve developed solid skills in React,
            JavaScript, Tailwind CSS, Vite and API integration. I’m especially
            excited by clean UI design, performance optimization, and crafting
            seamless user flows.
          </p>
          <p>
            My projects include e-commerce stores, booking platforms, and modern
            dashboards — all designed to be mobile-first and accessible.
          </p>
          <p>
            I’m constantly learning and love building tools that solve real
            problems.
          </p>
          <a
            href="/Romelyn-Resume.pdf"
            className="inline-block bg-[#D98969] hover:bg-[#c97256] text-gray-200 font-semibold px-5 py-2 rounded transition duration-300"
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
