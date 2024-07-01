import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between w-full px-20 pt-20 pb-10 select-none">
      <div className="glow text-5xl">
        <Link to={"/"} className="focus:outline-none focus:underline">
          winit.
        </Link>
      </div>
      <div className="flex flex-row space-x-2">
        {["about", "•", "projects", "•", "blog", "•", "socials"].map(
          (route, i) => (
            <h4
              className={`text-2xl text-center glow ${
                route !== "•" ? "hover:underline cursor-pointer" : ""
              }`}
              key={i}
            >
              {route === "•" ? (
                route
              ) : (
                <Link
                  className="focus:outline-none focus:underline"
                  to={`/${route}`}
                >
                  {route}
                </Link>
              )}
            </h4>
          )
        )}
      </div>
    </nav>
  );
}
