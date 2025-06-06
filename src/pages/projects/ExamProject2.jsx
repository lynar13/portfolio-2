// src/pages/projects/ExamProject2.jsx
import { useState } from "react";
import { RiShare2Line } from "react-icons/ri";
import BackButton from "../../components/BackButton";

export default function ExamProject2() {
  const [activeImage, setActiveImage] = useState(null);
  const [copied, setCopied] = useState(false);

  const thumbnails = [
    {
      src: "/src/assets/exam2.png",
      alt: "Holidaze Home Page",
    },
    {
      src: "/src/assets/exam2-dashboard.png",
      alt: "Admin Dashboard",
    },
    {
      src: "/src/assets/exam2-listing.png",
      alt: "Venue Listing",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <BackButton label="Back to Projects" />

      <h1 className="text-3xl font-bold text-white">Exam Project 2</h1>
      <p className="text-white">
        A modern vacation venue booking app built with React, Vite, Tailwind,
        and the Holidaze API. Includes admin dashboard, booking system, and user
        roles.
      </p>

      {/* Thumbnails Section */}
      <section className="my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {thumbnails.map((img) => (
            <figure key={img.src} className="flex flex-col items-center">
              <img
                src={img.src}
                alt={img.alt}
                className="rounded shadow w-[280px] h-[180px] object-cover cursor-pointer"
                onClick={() => setActiveImage(img.src)}
              />
              <figcaption className="text-sm text-white mt-2 text-center">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Lightbox Preview */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Zoomed Preview"
            className="max-w-[90%] max-h-[90%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}

      {/* Links + Share */}
      <div className="flex flex-wrap items-center gap-4 pt-4">
        <a
          href="https://lynar13.github.io/holidaze"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          Live Site
        </a>
        <a
          href="https://github.com/lynar13/holidaze"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline"
        >
          GitHub Repo
        </a>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-white transition"
          title="Copy page URL"
        >
          <RiShare2Line size={18} />
          {copied ? "Copied!" : "Share"}
        </button>
      </div>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <h3 className="text-lg font-medium mb-2">
          Holidaze is a fully responsive, mobile-first web app that allows users
          to:
        </h3>
        <ul className="space-y-1 p-4 text-white list-disc list-inside">
          <li>Browse and book venues</li>
          <li>Register and login</li>
          <li>Search and filter results</li>
          <li>Admins can add/edit/delete venues</li>
          <li>View bookings, calendars, and manage listings</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Reflections & Improvements
        </h2>
        <ul className="space-y-1 p-4 text-white list-disc list-inside">
          <li>
            Challenges: Authentication, protected routes, and conditional UI for
            admins.
          </li>
          <li>
            Learnings: Practical use of Tailwind CSS, Vite for speed, and
            Holidaze API integration
          </li>
          <li>
            Next Steps: Add Stripe for payments and improve admin analytics
          </li>
        </ul>
      </section>
    </article>
  );
}
