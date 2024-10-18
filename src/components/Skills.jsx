import { FaHtml5, FaCss3, FaReact, FaNodeJs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiExpress, SiMongodb, SiAdobephotoshop } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold mb-8 text-white">Skills</h1>

      {/* Responsive Icon Container */}
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {/* Icon Boxes */}
        <div className="p-4 border-2 rounded-md shadow-md flex justify-center items-center transition duration-300 hover:border-[#39FF14] hover:shadow-neon-green">
          <FaHtml5 className="text-5xl text-orange-600 transform transition duration-300 hover:scale-110" />
        </div>
        <div className="p-4 border-2 rounded-md shadow-md flex justify-center items-center transition duration-300 hover:border-[#39FF14] hover:shadow-neon-green">
          <FaCss3 className="text-5xl text-blue-600 transform transition duration-300 hover:scale-110" />
        </div>
        <div className="p-4 border-2 rounded-md shadow-md flex justify-center items-center transition duration-300 hover:border-[#39FF14] hover:shadow-neon-green">
          <IoLogoJavascript className="text-5xl text-yellow-500 transform transition duration-300 hover:scale-110" />
        </div>
        <div className="p-4 border-2 rounded-md shadow-md flex justify-center items-center transition duration-300 hover:border-[#39FF14] hover:shadow-neon-green">
          <FaReact className="text-5xl text-blue-400 transform transition duration-300 hover:scale-110" />
        </div>
        <div className="p-4 border-2 rounded-md shadow-md flex justify-center items-center transition duration-300 hover:border-[#39FF14] hover:shadow-neon-green">
          <FaNodeJs className="text-5xl text-green-600 transform transition duration-300 hover:scale-110" />
        </div>
        <div className="p-4 border-2 rounded-md shadow-md flex justify-center items-center transition duration-300 hover:border-[#39FF14] hover:shadow-neon-green">
          <SiExpress className="text-5xl text-gray-600 transform transition duration-300 hover:scale-110" />
        </div>
        <div className="p-4 border-2 rounded-md shadow-md flex justify-center items-center transition duration-300 hover:border-[#39FF14] hover:shadow-neon-green">
          <SiMongodb className="text-5xl text-green-700 transform transition duration-300 hover:scale-110" />
        </div>
        <div className="p-4 border-2 rounded-md shadow-md flex justify-center items-center transition duration-300 hover:border-[#39FF14] hover:shadow-neon-green">
          <SiAdobephotoshop className="text-5xl text-blue-500 transform transition duration-300 hover:scale-110" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
