// src/components/ProjectCard.jsx
import { Link } from 'react-router-dom';

export default function ProjectCard({ title, desc, image, path }) {
  return (
    <Link
      to={path}
      className="group block rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#D98969] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </Link>
  );
}
