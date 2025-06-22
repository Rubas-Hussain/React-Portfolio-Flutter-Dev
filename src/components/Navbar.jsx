import logo from "../assets/kevinRushLogo.png";
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt="Logo" />
      </div>

      {/* Uncomment if you want social media icons
      <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
        <FaLinkedin />
        <FaGithub />
        <FaSquareXTwitter />
        <FaInstagram />
      </div> */}

      <div className='flex items-center justify-between gap-4'>

        <button
          className='bg-transparent rounded-lg border-2 border-neutral-800 px-4 py-3 text-lg font-semibold mr-5 mb-2 transform transition-transform hover:scale-105 hover:bg-neutral-900 hover:text-slate-300 cursor-pointer'
        >
          <a
            href="public/resume/Rubas-Flutter-Dev-CV+2-1.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </button>

        <button
          className='bg-transparent rounded-lg border-2 border-neutral-800 px-4 py-3 text-lg font-semibold mr-2 mb-2 transform transition-transform hover:scale-105 hover:bg-neutral-900 hover:text-slate-300 cursor-pointer'
        >
          <a href="/all-projects">
            Projects
          </a>
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
