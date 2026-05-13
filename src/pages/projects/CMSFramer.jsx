// src/pages/projects/CMSFramer.jsx
import { useState } from "react";
import { RiShare2Line } from "react-icons/ri";
import BackButton from "../../components/BackButton";

export default function CMSFramer() {
  const [activeImage, setActiveImage] = useState(null);
  const [copied, setCopied] = useState(false);

  const thumbnails = [
    {
      src: "/assets/cms-home.png",
      alt: "Home Page",
    },
    {
      src: "/assets/cms-Services-page.png",
      alt: "Treatments Page",
    },
    {
      src: "/assets/cms-Book-Now.png",
      alt: "Booking Page",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="text-gray-200 max-w-4xl mx-auto px-4 py-12 space-y-6">
      <BackButton label="Back to Projects" />

      <h1 className="text-3xl font-bold">CMS Framer</h1>
      <p>
        In this project, I developed a functional website using the CMS tool
        Framer. The purpose of the website is to present a professional and
        user-friendly digital solution for a skincare business. The website
        serves as an informational platform where users can read about
        treatments, learn more about the business, and easily get in touch.
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
              <figcaption className="text-sm mt-2 text-center">
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
            className="absolute top-6 right-6 text-3xl font-bold"
          >
            &times;
          </button>
        </div>
      )}

      {/* Links + Share */}
      <div className="flex flex-wrap items-center gap-4 pt-4">
        <a
          href="https://lyn-a-skin-studio.framer.website/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Live Site
        </a>
        <a
          href="https://lyn-a-skin-studio.framer.website/"
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
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <h3 className="text-lg font-medium mb-2">
          Lyn A. Skin Studio is a fully responsive, mobile-first web app that
          allows users to:
        </h3>
        <ul className="space-y-1 p-4 list-disc list-inside">
          <li>Browse list of treatments</li>
          <li>Book a treatment</li>
          <li>See all the results</li>
          <li>Search and Inquiries FAQ</li>
          <li>Contact the company</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-2">
          Reflections & Improvements
        </h2>
        <p>
          I am satisfied with the final result and believe that the website
          meets both the functional and visual requirements. The project
          demonstrates a comprehensive understanding of how design, technology,
          and user experience work together.
        </p>
        <section className="mt-10">
          <h3>What Worked Well</h3>
          <ul className="space-y-1 p-5 list-disc list-inside">
            <li>Efficient development in Framer,</li>
            <li>Strong visual design,</li>
            <li>Functional CMS solution,</li>
            <li>Good balance between design and functionality</li>
          </ul>
        </section>
        <section className="mt-10">
          <h3 className="mb-2">Areas for improvement:</h3>
            <p>
              One area for improvement is more extensive user testing, which
              could have provided deeper insight into user behavior. In
              addition, implementing features such as reviews or a blog could
              have contributed to increased user engagement.
            </p>
        </section>
        <section className="mt-10">
          <h3 className="mb-2">Relevance:</h3>
            <p>
              The project demonstrates how CMS tools can be used to create
              professional websites without coding, which is highly relevant in
              modern web design.
            </p>
         
        </section>
      </section>
    </article>
  );
}
