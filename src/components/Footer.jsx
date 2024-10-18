import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-6 bg-gray-900 text-white mt-20">
      {/* Social Media Links */}
      <div className="flex space-x-6 mb-4">
        <a
          href="https://www.facebook.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#39FF14] hover:text-[#28cc10] transition"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#39FF14] hover:text-[#28cc10] transition"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#39FF14] hover:text-[#28cc10] transition"
        >
          <FaGithub size={30} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-400">
        © {new Date().getFullYear()} John Lester Bodonal. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
