import logo from "../assets/kevinRushLogo.png";
import '../App.css';

const Navbar = () => {
  return (
    <nav className="mb-10 py-6 px-4 flex md:flex-row items-center justify-between gap-4 md:gap-0">
      {/* Logo */}
      <div className='flex items-center'>
        <img className='w-10' src={logo} alt="Logo" />
      </div>

      {/* Buttons – responsive layout */}
      <div className='flex sm:flex-row items-center gap-3'>
        <a
          href="/Rubas-Flutter-Dev-CV_v2_v2.pdf"
          target="_blank"
          rel="noreferrer"
          className='w-full sm:w-auto text-center bg-transparent rounded-lg border-2 border-neutral-800 px-4 py-2 text-sm sm:text-base font-semibold hover:bg-neutral-900 hover:text-slate-300 transition'
        >
          Resume
        </a>

        <a
          href="/all-projects"
          className='w-full sm:w-auto text-center bg-transparent rounded-lg border-2 border-neutral-800 px-4 py-2 text-sm sm:text-base font-semibold hover:bg-neutral-900 hover:text-slate-300 transition'
        >
          Projects
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
