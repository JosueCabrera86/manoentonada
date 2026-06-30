import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useAutoHideNavbar } from "../hooks/auto-hide";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { visible, onMouseEnter, onMouseLeave } = useAutoHideNavbar(1500);

  const isNotHome =
    location.pathname === "/yogafacial" || location.pathname === "/acceder";

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
          bg-gradient-to-r from-white/40 via-white/20 to-white/40
          backdrop-blur-xl border border-white/40
          rounded-3xl md:rounded-4xl
          shadow-lg
          px-3 sm:px-4 md:px-6
          py-1 md:py-0
          transition-all duration-500
          ${visible ? "top-2 md:top-4 opacity-100 pointer-events-auto" : "-top-32 opacity-0 pointer-events-none"}
        `}
      >
        <div className="hidden md:flex items-center justify-between mx-4 lg:mx-8">
          <div className="w-1/3 flex justify-start">
            <ul className="text-2xl playfairbold text-[#c996ff] drop-shadow-md">
              <li>
                {isNotHome ? (
                  <Link
                    className="transition-all duration-200 hover:texto-[#0d9488]"
                    to="/"
                  >
                    Inicio
                  </Link>
                ) : (
                  <Link
                    className="transition-all duration-200 hover:text-[#0d9488]"
                    to="/yogafacial"
                  >
                    Yoga Facial
                  </Link>
                )}
              </li>
            </ul>
          </div>

          <div className="w-1/3 flex justify-center">
            <Link to="/">
              <img
                src="/imagenes/logo_manoentonadas.png"
                alt="logo"
                className="w-16 lg:w-20 h-auto transition-transform hover:scale-105 cursor-pointer"
              />
            </Link>
          </div>

          <div className="w-1/3 flex justify-end">
            <ul className="text-[#c996ff] text-2xl playfairbold drop-shadow-md">
              <li>
                {location.pathname !== "/acceder" ? (
                  <Link
                    className="flex items-center gap-2 transition-all duration-200 hover:text-[#0d9488]"
                    to="/acceder"
                  >
                    Acceder
                    <FiUser size={22} />
                  </Link>
                ) : (
                  <span className="opacity-50 flex items-center gap-2">
                    Acceder
                    <FiUser size={22} />
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex md:hidden items-center justify-between">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img
              src="/imagenes/logo_manoentonadas.png"
              alt="logo"
              className="w-16 h-auto"
            />
          </Link>
          <button
            className="text-2xl text-[#c996ff] drop-shadow-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 md:hidden">
            <ul className="flex flex-col gap-4 text-center font-semibold text-xl text-[#c996ff] drop-shadow-md pb-2">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="transition-all duration-200 hover:text-[#0d9488]"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/yogafacial"
                  onClick={() => setIsOpen(false)}
                  className="transition-all duration-200 hover:text-[#0d9488]"
                >
                  Yoga Facial
                </Link>
              </li>
              <li>
                <Link
                  to="/acceder"
                  onClick={() => setIsOpen(false)}
                  className="transition-all duration-200 hover:text-[#0d9488]"
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
