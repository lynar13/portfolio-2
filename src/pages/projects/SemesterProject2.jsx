// src/pages/projects/SemesterProject2.jsx
import { useState } from "react";
import { RiShare2Line } from "react-icons/ri";
import BackButton from "../../components/BackButton";

export default function SemesterProject2() {
  const [activeImage, setActiveImage] = useState(null);
  const [copied, setCopied] = useState(false);

  const thumbnails = [
    {
      src: "/src/assets/sem2-desktop.png",
      alt: "Auction Home Page",
    },
    {
      src: "/src/assets/sem2-login.png",
      alt: "Login Page",
    },
    {
      src: "/src/assets/sem2-create-listing.png",
      alt: "Create Listing Page",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="max-w-4xl mx-auto text-gray-200 px-4 py-12 space-y-6">
      <BackButton label="Back to Projects" />

      <h1 className="text-3xl font-bold">Semester 2 Project</h1>
      <p>
        The Auction House Project is a web application that allows users to
        create, manage, and participate in online auctions. The app is built
        with Vite, styled using Bootstrap and SASS/SCSS, and deployed using
        GitHub Pages. The project features user authentication, listing
        creation, bidding functionality, and search capabilities.
      </p>

      {/* Thumbnails */}
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
              <figcaption className="text-sm mt-2 text-center">
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <img
            src={activeImage}
            alt="Zoom Preview"
            className="max-w-[90%] max-h-[90%] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}

      {/* Links + Share */}
      <div className="flex flex-wrap items-center gap-4 pt-4">
        <a
          href="https://lynar13.github.io/auction-website/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Live Site
        </a>
        <a
          href="https://github.com/lynar13/auction-website"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          GitHub Repo
        </a>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-gray-200 transition"
          title="Copy page URL"
        >
          <RiShare2Line size={18} />
          {copied ? "Copied!" : "Share"}
        </button>
      </div>

      <section className="mt-10">
        <h2 className="text-xl mb-2">Overview</h2>
        <h3 className="text-lg mb-2">
          Built as part of the Semester Project 2, this platform features:
        </h3>
        <ul className="space-y-1 p-4 list-disc list-inside">
          <li>User registration and authentication</li>
          <li>Create, delete, and bid on listings</li>
          <li>Search and filter results</li>
          <li>SCSS for responsive theming</li>
          <li>GitHub Pages deployment</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl mb-2">
          Reflections & Improvements
        </h2>
        <ul className="space-y-1 p-4 list-disc list-inside">
          <h3>Security:</h3>
          <li className="p-4">
            🔐 Environment Variables: Sensitive data like the API key is now
            stored in a .env file, removing hardcoded secrets from the codebase
            and improving overall security.
          </li>
          <h3>Unit Testing Coverage:</h3>
          <li className="p-4">
            🧪 Unit Testing Added: Integrated Vitest (tailored for Vite), jsdom,
            and React Testing Library to provide robust testing. This ensures
            critical components behave as expected and increases
            maintainability.
          </li>
          <h3>Performance Optimization:</h3>
          <li className="p-4">
            🚀 Request Caching: Implemented a reusable
            fetchWithLocalStorageCache utility to cache all GET requests,
            reducing redundant API calls and improving app responsiveness.
          </li>
          <h3>Code Quality:</h3>
          <li className="p-4">
            🔁 DRY Principle: Replaced manual fetch calls like readProfile()
            with the caching utility to centralize and standardize data-fetching
            logic.
          </li>
          <li className="p-4">
            🧱 TypeScript Support: Migrated to TypeScript, introducing reusable
            interfaces for User, Profile, and Listing types. This significantly
            improves code reliability and developer experience through type
            safety.
          </li>
        </ul>
      </section>
    </article>
  );
}
