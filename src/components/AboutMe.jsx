import { useState } from 'react';
import Myphoto from '../imgs/my-photo.png';

const AboutMe = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section id='about' className="flex flex-col lg:flex-row items-center justify-between p-6 lg:px-10 lg:py-16">
      {/* Text Section */}
      <div className="lg:w-1/3 w-full mb-8 lg:mb-0 lg:ml-8">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6 font-montserrat text-white ml-10">
          About Me
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed font-montserrat ml-10">
          Hello! I'm John Lester Bodonal, a dedicated Fullstack Developer with a background in Computer Engineering.
          I specialize in crafting dynamic, responsive web applications.
          
          {/* Part of the text hidden on small screens */}
          <span className="hidden lg:inline">
            By leveraging both frontend and backend technologies, I focus on delivering efficient and scalable
            solutions. With a solid technical foundation, I enjoy tackling challenges, building innovative web
            solutions, and staying up to date with the latest technologies. When I’m not coding, you’ll find me gaming,
            reading, playing chess, or hitting the gym.
          </span>

          {/* Full text revealed when "See More" is clicked on smaller screens */}
          {showMore && (
            <span className="lg:hidden">
              By leveraging both frontend and backend technologies, I focus on delivering efficient and scalable
              solutions. With a solid technical foundation, I enjoy tackling challenges, building innovative web
              solutions, and staying up to date with the latest technologies. When I’m not coding, you’ll find me gaming,
              reading, playing chess, or hitting the gym.
            </span>
          )}
        </p>
        
        {/* See More / See Less Button only visible on small screens */}
        {!showMore && (
          <button
            onClick={toggleShowMore}
            className="text-blue-500 hover:text-blue-300 mt-3 underline focus:outline-none lg:hidden ml-10"
          >
            See More
          </button>
        )}

        {showMore && (
          <button
            onClick={toggleShowMore}
            className="text-blue-500 hover:text-blue-300 mt-3 underline focus:outline-none lg:hidden ml-10" 
          >
            See Less
          </button>
        )}
      </div>

      {/* Image Section - Takes 2/3 of the screen */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          src={Myphoto}
          alt="John Lester Bodonal"
          className="w-2/3 h-2/3 border-2 rounded-full shadow-lg"
          style={{ borderColor: '#39FF14', boxShadow: '0 0 10px #39FF14' }} // Neon green border & shadow
        />
      </div>
    </section>
  );
};

export default AboutMe;
