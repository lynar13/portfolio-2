import ProjectCard from '../components/ProjectCard';
import jsImg from '/assets/jsfw.png';
import semImg from '/assets/sem2-desktop.png';
import examImg from '/assets/exam2.png';
import cmsImg from "/assets/cms-home.png";

export default function Home() {
  const projects = [
    {
      title: "JavaScript Frameworks",
      desc: "E-commerce Store built with React with routing, auth, API & filtering.",
      path: "/projects/js-frameworks",
      image: jsImg,
    },
    {
      title: "Auction Website",
      desc: "Auction Website frontend using Noroff API where users can bid on listings.",
      path: "/projects/semester-project-2",
      image: semImg,
    },
    {
      title: "Booking Website",
      desc: "Venue booking frontend using Noroff API, auth, and filtering.",
      path: "/projects/exam-project-2",
      image: examImg,
    },
    {
      title: "CMS Framer",
      desc: "A functional website using the CMS tool Framer.",
      path: "/projects/cms-framer",
      image: cmsImg,
    },
  ];

  return (
    <div className='flex-grow max-w-screen-xl mx-auto px-4 py-10'>
        <h1 className='text-4xl text-[#D98969] font-bold justify-center flex'>My Projects</h1>
        <section className="max-w-6xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
            <ProjectCard key={proj.path} {...proj} />
        ))}
        </section>
    </div>
  );
}
