import React from "react";
import Project1 from "../assets/education-jobs.jpg";
import Project2 from "../assets/neophyte-consulting.jpg";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container m-auto px-4 sm:py-12">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="flex flex-col sm:flex-row gap-10 mt-11">
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <img src={Project1} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Education Jobs: Empowering Educators, Connecting Opportunities
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Introducing Education Jobs, a comprehensive job portal tailored
              specifically for the dynamic education sector. Leveraging the
              power of the MERN stack with Redux, we've meticulously crafted a
              full-stack application that seamlessly integrates cutting-edge
              technology with the intricate demands of the education industry.
            </p>
            <div className="flex mt-12 gap-2">
              <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                Live preview
              </button>
              <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                Checkout github
              </button>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <img src={Project2} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Neophyte Consulting Services: Your Path to Success Redefined
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Welcome to Neophyte Consulting Services, your trusted partner in
              navigating the complexities of today's business landscape.
              Formerly established in WordPress, we've elevated our online
              presence to new heights by transitioning to React, reflecting our
              commitment to innovation and excellence
            </p>
            <div className="flex gap-2 mt-12">
              <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                Live preview
              </button>
              <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                Checkout github
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row  gap-10 mt-11">
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <img src={Project3} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Landing page for front-end developer
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Responsive HTML/CSS layout for landing page for front-end
              developer. HTML5, CSS3 (SCSS)
            </p>
            <div className="flex gap-4 mt-12">
              <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                Live preview
              </button>
              <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                Checkout github
              </button>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md p-5 flex-1">
            <img src={Project4} className="w-full h-auto" />
            <h3 className="text-2xl font-semibold mt-8">
              Website redesign for The Venus project
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Responsive HTML/CSS layout for The Venus project. HTML5, CSS3
              (SCSS)
            </p>
            <div className="flex gap-2 mt-12">
              <button className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700">
                Live preview
              </button>
              <button className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500">
                Checkout github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
