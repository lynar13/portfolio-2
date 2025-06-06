// src/pages/projects/JsFrameworks.jsx
import { useState } from "react";
import { RiShare2Line } from "react-icons/ri";
import BackButton from "../../components/BackButton";

export default function JsFrameworks() {
  const [activeImage, setActiveImage] = useState(null);
  const [copied, setCopied] = useState(false);

  const thumbnails = [
    { src: "/src/assets/jsfw.png", alt: "Main App Page" },
    { src: "/src/assets/jsfw-cart.png", alt: "Cart Page" },
    { src: "/src/assets/jsfw-checkout.png", alt: "Checkout Flow" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="mx-auto px-4 py-12 max-w-4xl space-y-6">
      <BackButton label="Back to Projects" />

      <h1 className="text-3xl font-bold text-gray-200">JavaScript Frameworks Project</h1>
      <p className="text-gray-200">
        This is a fully functional eCommerce store built with React and React Router. It features product browsing, a cart system, a checkout process, and a contact form with validation. The project ensures a responsive design and uses CSS Modules for styling.
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
              <figcaption className="text-sm text-gray-200 mt-2 text-center">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50" onClick={() => setActiveImage(null)}>
          <img
            src={activeImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] object-contain shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={() => setActiveImage(null)} className="absolute top-6 right-6 text-white text-3xl font-bold">
            &times;
          </button>
        </div>
      )}

      {/* Links + Share */}
      <div className="flex flex-wrap items-center gap-4 pt-4">
        <a
          href="https://lyn-ellie-store.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-200 underline"
        >
          Live Site
        </a>
        <a
          href="https://github.com/lynar13/lyn-ellie-store-app"
          target="_blank"
          rel="noreferrer"
          className="text-gray-200 underline"
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
        <h2 className="text-xl text-gray-200 font-semibold mb-2">Overview</h2>
        <h3 className="text-lg text-gray-200 font-medium mb-2">The LynEllie Store App is a single-page React application featuring:</h3>
        <ul className="space-y-1 p-4 text-gray-200 list-disc list-inside">
          <li>Product listing and details</li>
          <li>Persistent shopping cart</li>
          <li>Multi-step checkout process</li>
          <li>Contact form with validation</li>
          <li>Responsive layout using CSS Modules</li>
          <li>Netlify deployment</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Reflections & Improvements</h2>
        <ul className="space-y-1 p-4 text-gray-200 list-disc list-inside">
          <li>Challenges: Managing state across cart, checkout, and contact form logic.</li>
          <li>Learnings: Gained strong understanding of controlled forms and client-side validation in React.</li>
          <li>Next Steps: Add user login, order history, and API integration.</li>
        </ul>
      </section>
    </article>
  );
}
