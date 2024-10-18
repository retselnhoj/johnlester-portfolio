const Experience = () => {
    return (
      <section id="experience" className="flex flex-col items-center justify-center p-10 mt-20">
        <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
  
        {/* Experience Cards with Connected Lines */}
        <div className="relative space-y-6 w-full max-w-xl">
          {/* Vertical Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#39FF14]"></div>
  
          {/* App/Cloud Support Associate Card */}
          <div className="relative p-6 border-2 border-[#39FF14] rounded-md shadow-md hover:border-[#39FF14] transition-all duration-300 hover:shadow-neon-green bg-gray-700">
            <div className="absolute -left-6 top-6 h-4 w-4 bg-[#39FF14] rounded-full"></div>
            <h3 className="font-bold text-xl text-white mb-2">App/Cloud Support Associate</h3>
            <p className="text-gray-400 mb-2">June 2022 - March 2024</p>
            <p className="text-gray-200">
              Experienced cloud/server administrator managing servers (deploying, updating, patching), resolving technical issues, providing user support, whitelisting/blacklisting, collaborating with teams, and creating daily reports.
            </p>
          </div>
  
          {/* IT Assistant Card */}
          <div className="relative p-6 border-2 border-[#39FF14] rounded-md shadow-md hover:border-[#39FF14] transition-all duration-300 hover:shadow-neon-green bg-gray-700">
            <div className="absolute -left-6 top-6 h-4 w-4 bg-[#39FF14] rounded-full"></div>
            <h3 className="font-bold text-xl text-white mb-2">IT Assistant</h3>
            <p className="text-gray-400 mb-2">February 2021 - January 2022</p>
            <p className="text-gray-200">
              Performs daily encoding of Tax Declarations for database completion, monitors and manages database tasks, assists with QGIS mapping in Metro Manila, troubleshoots connection issues, and ensures accurate, updated integration of Tax Declarations into Digitization.
            </p>
          </div>
  
          {/* Intern - Manila City Hall Card */}
          <div className="relative p-6 border-2 border-[#39FF14] rounded-md shadow-md hover:border-[#39FF14] transition-all duration-300 hover:shadow-neon-green bg-gray-700">
            <div className="absolute -left-6 top-6 h-4 w-4 bg-[#39FF14] rounded-full"></div>
            <h3 className="font-bold text-xl text-white mb-2">Intern - Manila City Hall</h3>
            <p className="text-gray-400 mb-2">January 2021 - February 2021</p>
            <p className="text-gray-200">
              Assisted with basic IT needs, including troubleshooting technical issues, setting up workstations, managing user accounts, and providing support for software and hardware installations. Ensured smooth day-to-day operations and supported the IT team in maintaining system efficiency.
            </p>
          </div>
  
          {/* Uplift Code Camp Card */}
          <div className="relative p-6 border-2 border-[#39FF14] rounded-md shadow-md hover:border-[#39FF14] transition-all duration-300 hover:shadow-neon-green bg-gray-700">
            <div className="absolute -left-6 top-6 h-4 w-4 bg-[#39FF14] rounded-full"></div>
            <h3 className="font-bold text-xl text-white mb-2">Uplift Code Camp</h3>
            <p className="text-gray-400 mb-2">Fullstack Developer Student</p>
            <p className="text-gray-200">
              Gained a solid foundation in web development, starting with the basics of HTML, CSS, and JavaScript. Progressed to building full MERN stack (MongoDB, Express, React, Node.js) projects, focusing on dynamic, responsive websites. Gained hands-on experience in both frontend and backend development, and learned how to create efficient, scalable web applications.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  