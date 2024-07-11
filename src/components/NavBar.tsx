import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["about", "projects", "blog", "socials"];

  return (
    <nav className="flex flex-row items-center justify-between w-full px-4 py-2 lg:px-20 lg:pt-10 lg:pb-5 select-none">
      <div className="glow lg:text-3xl text-5xl">
        <Link to="/" className="focus:outline-none focus:underline">
          winit.
        </Link>
      </div>
      {isMobile ? (
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="text-4xl focus:outline-none glow"
          >
            ☰
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 border-2 border-prim py-2 w-48 bg-[#000000dd] rounded-lg shadow-xl">
              {navItems.map((route, i) => (
                <Link
                  key={i}
                  to={`/${route}`}
                  className="block px-4 py-2 glow hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route}
                </Link>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="flex flex-row space-x-2">
          {navItems
            .map((route, i) => (
              <h4
                className="text-2xl text-center glow hover:underline cursor-pointer"
                key={i}
              >
                <Link
                  className="focus:outline-none focus:underline"
                  to={`/${route}`}
                >
                  {route}
                </Link>
              </h4>
            ))
            .reduce((acc: any[], elem, index) => {
              if (index !== 0)
                acc.push(
                  <span key={`dot-${index}`} className="text-2xl">
                    •
                  </span>
                );
              acc.push(elem);
              return acc;
            }, [])}
        </div>
      )}
    </nav>
  );
}
