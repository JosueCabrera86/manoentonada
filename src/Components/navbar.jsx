import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useAutoHideNavbar } from "../hooks/auto-hide";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { visible, onMouseEnter, onMouseLeave } = useAutoHideNavbar(1500);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-40"
        style={{ height: 6 }}
        onMouseEnter={onMouseEnter}
      />

      <nav
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`
    fixed z-50 
    w-full max-w-[90%] md:max-w-[80%]
    left-1/2 -translate-x-1/2
    bg-gradient-to-r from-white/30 via-white/10 to-white/30
    backdrop-blur-xl border border-white/40
    rounded-3xl md:rounded-4xl
    shadow-lg
    px-3 sm:px-4 md:px-6
    py-1 md:py-0
    transition-all duration-500

    ${
      visible
        ? "top-2 md:top-4 opacity-100 pointer-events-auto"
        : "-top-32 opacity-0 pointer-events-none"
    }
  `}
      >
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between mx-4 lg:mx-8">
          <ul className="flex gap-6 lg:gap-8 text-xl playfairbold text-white drop-shadow-md">
            <li>
              <Link
                className="transition-all duration-200 hover:text-[#c996ff]"
                to="/yogafacial"
              >
                Yoga Facial
              </Link>
            </li>
          </ul>

          <Link to="/">
            <img
              src="/imagenes/logo_manoentonadas.png"
              alt="logo"
              className="w-16 lg:w-20 h-auto transition-transform hover:scale-105 cursor-pointer"
            />
          </Link>

          <ul className="flex gap-6 lg:gap-8  text-white text-xl playfairbold drop-shadow-md">
            <li>
              <Link
                className="flex items-center gap-2 transition-all duration-200 hover:text-[#c996ff]"
                to="/acceder"
              >
                Acceder
                <FiUser size={22} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-between">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src="/imagenes/logo_manoentonadas.png"
              alt="logo"
              className="w-16 h-auto"
            />
          </Link>

          <button
            className="text-2xl text-white drop-shadow-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 md:hidden">
            <ul className="flex flex-col gap-4 text-center font-semibold text-white drop-shadow-md pb-2">
              <li>
                <Link
                  to="/yogafacial"
                  onClick={() => setIsOpen(false)}
                  className="transition-all duration-200 hover:text-[#c996ff]"
                >
                  Yoga Facial
                </Link>
              </li>

              <li>
                <Link
                  to="/acceder"
                  onClick={() => setIsOpen(false)}
                  className="transition-all duration-200 hover:text-[#c996ff]"
                >
                  Acceder
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
