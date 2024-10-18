import { FaFacebookMessenger, FaLinkedin, FaGithub } from 'react-icons/fa';
import IntroImge from '../imgs/introduction-img.png';

const Introduction = () => {
  return (
    <div
      id='home'
      className='flex flex-col-reverse lg:flex-row items-center justify-between mt-20 px-6 lg:px-10 lg:ml-24 h-auto lg:h-[90vh]'
    >
      {/* Left Side: Text and Icons */}
      <div className='w-full lg:w-1/2 mb-10 lg:mb-0'>
        <h1 className='text-3xl lg:text-4xl font-bold mb-4 font-montserrat text-white text-center lg:text-left'>
          Hey there!
          <br />I am John Lester
          <br />a Fullstack Developer
        </h1>

        {/* Social Media Icons */}
        <div className='flex justify-center lg:justify-start flex-row gap-5 mb-5 mt-5'>
          <a
            href='https://m.me/Iod.retselnhoj'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebookMessenger
              className='text-blue-500 hover:text-blue-300'
              size={30}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/john-lester-bodonal-8b9680237/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin
              className='text-blue-700 hover:text-blue-500'
              size={30}
            />
          </a>
          <a
            href='https://github.com/retselnhoj'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub
              className='text-indigo-700 hover:text-gray-700'
              size={30}
            />
          </a>
        </div>

        {/* Buttons */}
        <div className='flex justify-center lg:justify-start gap-4 mt-10'>
          <a
            href='#contact'
            className='border-2 border-[#39FF14] p-2 rounded-lg text-white hover:bg-[#39FF14] hover:text-white transition duration-300 shadow-lg'
            style={{ boxShadow: '0 0 15px #39FF14' }}
          >
            Contact Me!
          </a>

          {/* Download Resume Button */}
          <a
            href='/John Lester Bodonal.pdf'
            download
            className='border-2 border-[#39FF14] p-2 rounded-lg text-white hover:bg-[#39FF14] hover:text-white transition duration-300 shadow-lg'
            style={{ boxShadow: '0 0 15px #39FF14' }}
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
        <img
          src={IntroImge}
          alt='Introduction'
          className='border-4 shadow-lg rounded-lg'
          style={{ borderColor: '#39FF14', boxShadow: '0 0 20px #39FF14' }} // Neon green border & shadow
        />
      </div>
    </div>
  );
};

export default Introduction;
