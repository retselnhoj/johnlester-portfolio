import quickFinder from '../imgs/quickfinder-project.png';
import airbnbClone from '../imgs/airbnb-clone.png';
import freshbaskets from '../imgs/freshbaskets-project.png';

const Projects = () => {
  return (
    <section id='projects' className="flex flex-col items-center justify-center p-10 mt-20 min-h-[90vh]">
      <h1 className="text-3xl font-bold mb-8 text-white">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* QuickFinder Card */}
        <div className="p-4 border-2 border-[#39FF14] rounded-md shadow-md hover:border-[#39FF14] transition-all duration-300 hover:shadow-neon-green transform hover:scale-105">
          <img src={quickFinder} alt="QuickFinder" className="rounded-md mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-white">QuickFinder</h2>
          <p className="text-gray-300 mb-4">
            QuickFinder is a web app that helps parents and children register and locate lost items through a simple login and item-tracking system.
          </p>
          <a
            href="https://quickfinder-project2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-[#39FF14] text-gray-600 py-2 px-4 rounded-md text-center transition hover:bg-[#28cc10]"
          >
            View Demo App
          </a>
        </div>

        {/* AirBnb Clone Card */}
        <div className="p-4 border-2 border-[#39FF14] rounded-md shadow-md hover:border-[#39FF14] transition-all duration-300 hover:shadow-neon-green transform hover:scale-105">
          <img src={airbnbClone} alt="AirBnb Clone" className="rounded-md mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-white">AirBnb Clone</h2>
          <p className="text-gray-300 mb-4">
            The Airbnb Clone is a web application that allows users to book and list properties, simulating the core functionalities of the real Airbnb platform.
          </p>
          <a
            href="https://bookmona.netlify.app/homepage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-[#39FF14] text-gray-600 py-2 px-4 rounded-md text-center transition hover:bg-[#28cc10]"
          >
            View Demo App
          </a>
        </div>

        {/* FreshBaskets Card */}
        <div className="p-4 border-2 border-[#39FF14] rounded-md shadow-md hover:border-[#39FF14] transition-all duration-300 hover:shadow-neon-green transform hover:scale-105">
          <img src={freshbaskets} alt="FreshBaskets" className="rounded-md mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-white">FreshBaskets</h2>
          <p className="text-gray-300 mb-4">
            Fresh Baskets is a marketplace where users can buy local products or become sellers, supporting farmers and local producers.
          </p>
          <a
            href="https://fresh-baskets-final.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 bg-[#39FF14] text-gray-600 py-2 px-4 rounded-md text-center transition hover:bg-[#28cc10]"
          >
            View Demo App
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
